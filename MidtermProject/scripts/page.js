//const { default: page } = require("page");

/**
 * the WikiCard class holds the data for the Card element on the webpage
 */
class WikiCard {
    constructor(title, imgUrl,) {
        this.title = title;
        this.imgUrl = imgUrl;
    }

    /**
     * Creates a WikiCard Div element. append this to 
     * another element in the document to see it on the page.
     */
    toCard() {

        // heavily destructured for granular edits on creation
        // (this was made like this on purpose)
        let thisCard = document.createElement('div');
        let thisContent = document.createElement('div');
        let thisCardHeader = document.createElement('div');
        let thisHeaderText = document.createElement('p');
        let thisContentInfo = document.createElement('div');

        // set all info before appending to root div
        thisCard.style.backgroundImage = "url(" + this.imgUrl + ")";
        thisHeaderText.innerText = this.title;
        thisCard.className = "card";
        thisContent.className = "cardContent";
        thisHeaderText.style.textDecoration = "underline";
        thisHeaderText.style.top = "180px";
        thisHeaderText.style.fontSize = "17pt";
        thisContentInfo.className = "scrollable-box";

        // glue it all together
        thisCardHeader.appendChild(thisHeaderText);
        thisContent.appendChild(thisCardHeader);
        thisContent.appendChild(thisContentInfo);
        thisCard.appendChild(thisContent);

        // there it goes
        return thisCard;
    }
}

async function getData(url) {

    // set these badboys up
    const headers = new Headers();
    // be polite and add a user agent so Mediawiki aren't aprehensive of our
    // requests to the api
    headers.append("User-Agent", "WikiCards/0.9 (+https://github.com/itspacrat/cis185_fall_2025/tree/main/MidtermProject; blakemichaelgaynor@gmail.com)");

    // set up both url query strings (one for page data, one for thumbnails)
    try {

        let response = await fetch(url, { method: 'GET', headers: headers });
        return response.json();

    } catch (error) {
        console.error(error);
    }
}

/**
 * Requests both the wikipedia pages data and the thumbnail link(s) for a batch url,
 * and then turns them into an array of WikiCard instances
 * @param {String} url 
 */
async function getCards(batchUrl) {
    // eventually return these
    let cardElements = [];

    let pageDataArgs = "&rvprop=content&rvslots=*"; // for page content
    let pageImageArgs = "&prop=pageimages&piprop=thumbnail&pithumbsize=500"; // for thumbnail link

    // can't think of a good way to get what I need in a single response, boooo!
    console.log("getting data for " + batchUrl + pageDataArgs)
    let pageContentJSON = await getData(batchUrl + pageDataArgs);
    console.log("getting data for " + batchUrl + pageImageArgs)
    let pageThumbnailJSON = await getData(batchUrl + pageImageArgs);
    console.log("content:");
    console.log(await pageContentJSON);
    console.log("images:")
    console.log(await pageThumbnailJSON);

    let count = await pageContentJSON.query.pages.length;

    console.log("pages: " + count);

    // go over all pages in batch
    for (i = 0; i < count; i++) {
        let pushTitle = await pageThumbnailJSON.query.pages["" + i].title;
        let pushLink = await pageThumbnailJSON.query.pages["" + i].thumbnail.source;
        let pushCard = new WikiCard(
            pushTitle,
            pushLink
        );
        //pushCard.title = (await pageThumbnailJSON.query.pages["" + i]).title;
        //pushCard.imgUrl = (await pageThumbnailJSON.query.pages["" + i]).thumbnail.source;
        cardElements.push(pushCard);
    }
    return cardElements;

}

// from https://stackoverflow.com/questions/1787322/what-is-the-htmlspecialchars-equivalent-in-javascript
function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}