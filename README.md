# Whiteboard Grid

Create a fully responsive, fluid and nestable grid layout.
The Whiteboard grid system follows the mobile-first approach and 
accomodates up to 6 grid columns. It uses units with predefined classes 
inside each grid, which define the column width.

## Install
``` $ npm install --save-dev whiteboard-grid ```

## Usage
You can use Whiteboard grid in node-sass or any project that depends on node-sass.
The only thing you need to do to make this work is add the importer to the options and include the grid system.

### node-sass
```js
var sass = require("node-sass");
var wbGrid = require("whiteboard-grid");

sass.render({
  data: '@import "wb-grid";',
  importer: wbGrid
});
```

### grunt-sass
```js
var wbGrid = require("whiteboard-grid");

grunt.initConfig({
    sass:{
        options: {
            importer: wbGrid
        },
        ...        
    }
})
```

### gulp-sass
```js
var gulp = require("gulp");
var sass = require("gulp-sass");
var wbGrid = require("whiteboard-grid");

gulp.task("sass", function() {
    return gulp.src("sass/**/*.scss")
      .pipe(sass({ importer: wbGrid }).on("error", sass.logError))
      .pipe(gulp.dest("./css"));
});
```

## Getting Started
### Grid System 101
Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the grid system works:

- Use rows to create horizontal groups of columns.
- Content should be placed within columns, and only columns may be immediate children of rows.
- Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on rows.
- Grid columns are created by specifying the amount you wish the column to span. For example, three equal columns would use three `.wb-col-1-3` (one of three).
- Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any `.wb-col-*` class to an element will not only affect its styling on medium devices but also on large devices if a `.wb-col-lg-*` class is not present.

The following table gives you an overview of the `wb-col-*` classes that can be used.

| | |
|---|---|
| `.wb-col-1-1` | Fills 100% of the available width. |
| `.wb-col-1-2` | Divides the row into halves. |
| `.wb-col-1-3` to `.wb-col-2-3` | Divides the row into thirds. |
| `.wb-col-1-4` to `.wb-col-3-4` | Divides the row into fourths. |
| `.wb-col-1-5` to `.wb-col-4-5` | Divides the row into fifths. |
| `.wb-col-1-6` to `.wb-col-5-6` | Divides the row into sixths. |
  
### Simple layouts
Using a single set of `.wb-col-*` grid classes, you can create a basic grid system 
that starts out stacked on mobile devices and tablet devices (the extra-small to medium range) before becoming horizontal on desktop (normal to large) devices.
Place grid columns in any `.wb-row` where each `.wb-col-*` spans a certain portion of the row.
    
Here is a simple code example of how the default grid with 2 columns would look like:
    
```
<div class="wb-row">
    <div class="wb-col-1-2">...</div>
    <div class="wb-col-1-2">...</div>
</div>
```
  
### Container
Containers are used to set a maximum width for grids. They are handy for creating boxed layouts.

The following table gives you an overview of the `wb-container-*` classes that can be used.

| | |
|---|---|
| `.wb-container-xsmall` | Fills 100% of the available width (Fluid container). |
| `.wb-container-small` | Has a maximum width of 750px |
| `.wb-container` | Has a maximum width of 960px |
| `.wb-container-large` | Has a maximum width of 1140px |
    
### Responsive layouts
Don't want your columns to simply stack on smaller devices?
Whiteboard grid provides a number of very useful responsive column classes.
Basically they work just like the usual column classes, except they are 
prefixed, so that they only come to effect at certain breakpoints. 
This is great to adjust your layout and content for different device sizes.

See the following example for a better idea of how it all works.

```
<div class="wb-row">
  <div class="wb-col-sm-1-2 wb-col-1-4">
    (SM 1/2) (MD 1/4)
  </div>
  
  <div class="wb-col-sm-1-2 wb-col-3-4">
    (SM 1/2) (MD 3/4)
  </div>
</div>
```

The following table gives you an overview of the responsive column classes that 
can be used.

| | |
|---|---|
| `.wb-col-xs-*` | Affects all device widths, grid columns stay side by side. |
| `.wb-col-sm-*` | Affects device widths of 480px and higher. Grid columns will stack on smaller sizes. |
| `.wb-col-*` | Affects device widths of 768px and higher. Grid columns will stack on smaller sizes. |
| `.wb-col-lg-*` | Affects device widths of 960px and higher. Grid columns will stack on smaller sizes. |
    
### Auto-sized column
In certain cases, you might want a column to fit its content but you still want to
take advantage of the default column behaviour. Use `.wb-col-auto` for such situations.
    
### Nesting
You can easily extend your grid layout with nested grids.
Simply add a new `.wb-row` and set of `.wb-col-*` children within an existing `.wb-col-*` element.  
Nested rows should include a set of columns that also add up to a whole 1 or less (it is not required that you use all six columns).  
Nested grids are also responsive and there is no limit on how deep can nesting go.
Note that the span of each column should be set based on the width of its direct parent row.  
This opens a door for creating more complicated layouts and allows creating more than 6 columns per row.

```
<div class="wb-row">
  <div class="wb-col-1-2">
    <div class="wb-row">
      <div class="wb-col-1-2">Content</div>
      <div class="wb-col-1-2">Content</div>
    </div>
  </div>
  
  <div class="wb-col-1-2">
    <div class="wb-row">
      <div class="wb-col-1-3">Content</div>
      <div class="wb-col-1-3">Content</div>
      <div class="wb-col-1-3">Content</div>
    </div>
  </div>
</div>
```

### Source ordering

You can change the display order of the columns to keep a specific column order
in the source code.  
Add one of the `.wb-push-*` classes to move the column to the 
right and add one of the `.wb-pull-*` classes to move a column to the left.  

This allows you for example to flip the columns' display order for wider viewports.
The classes can also be used to offset columns, creating additional space between them.
    
Source ordering is useful for SEO and responsive design, because in narrow viewports the grid will be displayed according to the source order of the markup.

```
<div class="wb-row">
  <div class="wb-col-1-4 wb-push-3-4">Pushed 3/4</div>
  <div class="wb-col-3-4 wb-pull-1-4">Pulled 1/4</div>
</div>
```

Move columns to the right using `.wb-offset-*` classes.
These classes increase the horizontal margin of a column by `*` columns.
For example, `.wb-offset-1-4` moves `.wb-col-1-4` over one column out of four columns (or 25%).

```
<div class="wb-row">
  <div class="wb-col-1-2">
    1/2
  </div>
  
  <div class="wb-col-1-4 wb-offset-1-4">
    1/4 (Offset 1/4)
  </div>
</div>
```

**NOTE:** This feature only works in combination with one of the `.wb-col-*` classes.
    
### Centered grid
Add the `.wb-col-centered` class to center a grid column.

```
<div class="wb-row">
  <div class="wb-col-1-2 wb-col-centered">
    Centered
  </div>
</div>
```

### Align
Add classes to align columns to the top, center or bottom of a row.
```
<div class="wb-row wb-row-align-middle">
  <div class="wb-col-1-3">
    <div class="wb-grid-panel" style="height: 200px">
      Middle aligned
    </div>
  </div>
  
  <div class="wb-col-1-3">
    <div class="wb-grid-panel" style="height: 300px">
      Middle aligned
    </div>
  </div>
  
  <div class="wb-col-1-3">
    <div class="wb-grid-panel" style="height: 100px">
      Middle aligned
    </div>
  </div>
</div>
```

You can override row alignment on column level.

```
<div class="wb-row wb-row-align-middle">
  <div class="wb-col-1-3 wb-col-align-top">
    <div class="wb-grid-panel" style="height: 200px">
      Top aligned
    </div>
  </div>
  
  <div class="wb-col-1-3">
    <div class="wb-grid-panel" style="height: 300px">
      Middle aligned
    </div>
  </div>
  
  <div class="wb-col-1-3 wb-col-align-bottom">
    <div class="wb-grid-panel" style="height: 100px">
      Bottom aligned
    </div>
  </div>
</div>
```

### Gutter
Rows automatically create a horizontal gutter between columns. By default, the grid gutter is wider on large screens.

You can change the gutter for each row by adding one of the gutter modifier classes.

```
<div class="wb-row wb-row-gutter-large">
  <div class="wb-col-1-2">
    Column
  </div>
  
  <div class="wb-col-1-2">
    Column
  </div>
</div>
```

The following table gives you an overview of the `wb-row-gutter-*` classes that can be used.

| | |
|---|---|
| `.wb-row-gutter-none` | Removes the gutter entirely. |
| `.wb-row-gutter-smallest` | Applies the smallest gutter between columns. |
| `.wb-row-gutter-smaller` | Applies smaller gutter between columns. |
| `.wb-row-gutter-small` | Applies small gutter between columns. |
| `.wb-row-gutter-large` | Applies large gutter between columns. |
| `.wb-row-gutter-larger` | Applies larger gutter between columns. |
| `.wb-row-gutter-largest` | Applies the largest gutter between columns. |
    
### Row AB
  
The `.wb-row-ab` class is useful for creating a simple two columns row. 
Column `a` will be aligned to the left while column `b` will be aligned to the right.
Both columns will stack on smaller screen sizes.

```
<div class="wb-row wb-row-ab">
  <div class="wb-col-auto wb-col-a">
    <div class="wb-grid-panel">
      A
    </div>
  </div>
  
  <div class="wb-col-auto wb-col-b">
    <div class="wb-grid-panel">
      B
    </div>
  </div>
</div>
```

### Wrap multiple rows

You can also create a grid with as many columns as you want, which automatically 
break into the next line.

```
<div class="wb-row">
  <div class="wb-col-1-3">
    <div class="wb-grid-panel">
      Panel
    </div>
  </div>
  
  <div class="wb-col-1-3">
    <div class="wb-grid-panel">
      Panel
    </div>
  </div>
  
  <div class="wb-col-1-3">
    <div class="wb-grid-panel">
      Panel
    </div>
  </div>
  
  <div class="wb-col-1-3">
    <div class="wb-grid-panel">
      Panel
    </div>
  </div>
  ...
</div>
```

### Automatic grid

To create a grid whose child elements' widths are evenly split, you don't have 
to apply the same class to each list item within the grid. 
Just add one of the `.wb-row-auto-*` classes to the row itself.
Typically this layout is built using a `<ul>` element.

```
<ul class="wb-row wb-row-auto-4">
  <li>
    <div class="wb-grid-panel">
      Panel
    </div>
  </li>
  
  <li>
    <div class="wb-grid-panel">
      Panel
    </div>
  </li>
  ...
</ul>
```

### Grid divider
Add the `.wb-row-divider` class to separate grid columns with lines.