
/**
 * the WikiCard class holds the data for the Card element on the webpage
 */
class WikiCard {
    constructor(title, imgUrl,) {
        this.title = title;
        this.imgUrl = imgUrl;
    }

    /**
     * 
     */
    createCard() {
        let thisCard = document.createElement('div');
        thiscard.append(document.createElement());
        return thisCard;
    }

}

async function getData(url) {

    // set these badboys up
    const headers = new Headers();
    // be polite and add a user agent so Mediawiki aren't aprehensive of our
    // requests to the api
    headers.append("User-Agent", "WikiCards/0.7 (+https://github.com/itspacrat/cis185_fall_2025/tree/main/MidtermProject; blakemichaelgaynor@gmail.com)");

    // set up both url query strings (one for page data, one for thumbnails)
    try {

        let response = await fetch(url, { method: 'GET', headers: headers });
        return response.json();

    } catch (error) {
        console.error(error);
    }
}

/**
 * Requests both the wikipedia page data and the thumbnail link(s) for a url
 * @param {String} url 
 */
async function getBoth(url) {

    let pageDataArgs = "&rvprop=content&rvslots=*"; // for page content
    let pageImageArgs = "&prop=pageimages&piprop=thumbnail&pithumbsize=600"; // for thumbnail links



}