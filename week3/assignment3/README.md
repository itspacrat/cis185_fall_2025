# Assignment 3: Bootstrap.css

## My initial `css-grid` layout (previous portfolio assignment)
My initial portfolio assignment utilized the css-grid model, and I manually separated out a responsive 3-column-to-single-column layout by hand;
Some things I noticed when I was setting my css up for the page included the following:
- Creating the css for the grid re-formatting using media queries was kind of taxing
- It felt like I was creating a ton of duplicate code in the CSS media queries (3 styles for each important selector)
- I felt like there was a lot of niche form factors I may have to account for in the future, and adding those in feels like it would be very tedious.
- I am new to frontend development as a whole, and therefore know that I will inevitably miss somethign a seasoned UX developer might already know and plan for in their code.

## Where `bootstrap.css` helped
bootstrap's 12-column flexbox design model was insanely easy to use, even for my first time using it period.
Some of the facilities bootstrap provides that were increasingly helpful to me were the following:
- Bootstrap's 12-column flexbox layout makes asymetric-but-responsive grids a breeze
  - > *I don't know how I could make css-grid items easily span across more than 1 column like bootstrap does*
  - > *I also don't know, even if I had managed the spanning, how I would nicely get my grid items to automatically scale and center themselves like bootstrap does*
- IF someone had to look at my code and edit it, there's a  ton of documentation online about bootstrap, whereas my previous code would not be as easily accessible and whoever it was would probably have to get in contact with me or spend a lot of time getting a sense of my own personal design philosophy to effectively debug and modify my code.
- the semantics within bootstrap are very practical and down-to-earth, with things like the idea of `gx-*` "gutter" classes replacing the `gap` attribute in css-grid.

## Conclusions
All in all, `bootstrap.css` was a very helpful tool, and I do definitely see myself revising my actual portfolio using bootstrap to take the weight of basic responsive design and accessibility off of my shoulders