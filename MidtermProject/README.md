![Icon image made by blake (in about 7 minutes)](https://github.com/itspacrat/cis185_fall_2025/blob/main/MidtermProject/media/WikiCardsIcon-transparent.png?raw=true)


#  WikiCards example Wikipedia API explorer
## About
This project serves as a fun way to look at surface-level details of wikipedia pages.

## Usage
> [!WARNING]
> PLEASE NOTE: since this project reaches out to external resources via cross-origin site requests (CORS), to properly use this site it must be ran through at least a local server!
>
> **<u>example:</u>**
> ```py
> # this will start serving the project directory on a local server with node
> cd path/to/this/repo # should contain a "MidtermProject" subdirectory
> npx serve MidtermProject
> ```
>
> in  this example, `npx` will print out a `http://localhost:<port number>` address showing what port the local MidtermProject site is being hosted on (i.e. `https://localhost:3000`).
> given that address, to access this hosted site, navigate in your browser to `https://localhost:3000/index.htm`*
>
> <sub>\*note: your local port may be different.</sub>

## What I've Learned...
### techniques / technologies:
- Hosting a local web server with `npx serve`
- Utilizing API access with javascript's `fetch()`
- <u>Understanding why certain js documentation was written the way it was</u>
- manipulating the DOM with js functions
- Organizing scripts into units with specific goals for each 
### Frusturations & errors I overcame
*Don't try to know everything, because no one truly can.*<br>- Blake, a million different times probably.
- **Dealing with Promise<any> types**
  - By virtue of using functions like `fetch()`, `Promise<>` Objects are everywhere in my code
  - I've dealt with a similar type in the Rust programming language, called <u>[`Future<>`](#referenced-materials)</u>, which uses virtually identical syntax in its code; Rust, like javascript, requires that `async` functions  only be called inside `async` blocks/functions, and these need to be `await`-ed to successfully use the value in the `Future<>` type.
  - I google searched until I ended up on the <u>[MDN page for IIFEs in js](#referenced-materials)</u>, and used their async IIFE example in my code, which fixed my issue.

- **CORS requests not completing / being rejected**
  - I took time to read helpful articles and documentation online after about 2 hours of pulling my hair out because of failed CORS requests. Once you begin playing with APIs and start  accessing external resources, it's nearly *required* that you host your site via a local server!

- **Lack of type annotations making things like attribute changes feel harder or uncertain**
  - When trying to change attributes of updated HTML elements (i.e. the `src` attribute in an `img` element), it felt hard to know code was going to execute properly, or that the errors I recieved were going to be helpful
  - I took an opportunity here to recognize that this may very well just be a shortcoming of javascript as a whole, and instead of worrying more about the things I missed in javascript, I decided to focus on learning how the ES/js documentation was structured, and how to debug errors more effectively.

- **Project scope was too ambitious at the beginning**
  - I realized after fiddling with my API access code for a while that I had to narrow this project from a game-focused idea I had down to a page explorer; gertting honest with myself about the scope of the project early on was probably the best decision I made during the development of this site altogether.

> <sub>in a nutshell: You can still be effective with a language, even if it feels barebones/ancient/lacking in forethought; you just need to be good at understanding the "why" behind how parts of the language work, and that takes dedication to reading documentation; becoming  great at this skill ultimately leads to a workflow that dosen't require you to read the documentation as much, because you will quickly learn how to work alongside whatever programming language you are using.</sub>


## Referenced Materials
**MDN**
- [CORS Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default)
- [javascript async IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**MediaWiki API**
- [Etiquitte](https://www.mediawiki.org/wiki/API:Etiquette)
- [API sandbox](https://en.wikipedia.org/wiki/Special:ApiSandbox)

**W3Schools**
- [Text input](https://www.w3schools.com/tags/tag_input.asp)
- [Button Onclick Event](https://www.w3schools.com/jsref/event_onclick.asp)

**StackOverflow**



- [Input Sanitizing with only JS](https://stackoverflow.com/questions/1787322/what-is-the-htmlspecialchars-equivalent-in-javascript)
- [Prevent implicit form submit on enter pressed](https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter)
- [Only return the leading info from a wiki page](https://stackoverflow.com/questions/7185288/how-can-i-get-wikipedia-content-using-wikipedias-api)

<sub>(shoutout Ashraf Alattar's and Lars Stranger's classes for bringing up input sanitization this week)</sub>


**jsdoc\.app**
- [js Documentation Comments](https://jsdoc.app/about-getting-started)

<sub>(honorable mention)</sub>
**doc\.rust-lang\.org**

- [`Future<>`, `async`, and `await`](https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html)
