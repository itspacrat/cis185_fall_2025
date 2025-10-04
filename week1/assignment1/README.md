# Week 1: Assignment 1 <h6>exploring html elements</h6>

## \<title> <h6>visual info in your browser tabs</h6>
- the \<title> tag can be used to add a tab title to the document, and is semantic
- this helps things liek screen readers pull title information, and can assist in keeping data for web scrapers organized.

## \<section> <h6></h6>
- the section tag helps denote a section of a page, which could help someone paginate data easier if they were scraping your site.
- this is semantic html that is not necessarily seen a lot these days on big sites or blogs.

## \<div> <h6>grouping elements</h6>
- the \<div> tag can be used to contain multiple HTML elements, and apply a similar to styling to any number of them (or all of them!)

## \<ul> (\<li>)
- the "u(nordered) l(ist)" tag can be used to structure a linear set of options, and can be nested like you can do with tables.
- unordered lists use bullet points to separate list items, whereas ordered lists would use numeric separators or alphabetic separators.

## \<table>  (\<tr>, \<td>) <h6>organizing similar data</h6>
- this tag can be used to organize tabular data, similar to how spreadsheets do.
- on larger screens, it could potentially be useful to nest these, as the example in `index.htm` shows.
- somtimes a `grid` css display style might work out better for visuals, but might not be as robust for each table element.