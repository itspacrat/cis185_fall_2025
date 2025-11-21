
async function getData(url) {

    // set these badboys up
    const headers = new Headers();
    // be polite and add a user agent so Mediawiki aren't aprehensive of our
    // requests to the api
    headers.append("User-Agent", "WikiCards/0.5 (+https://github.com/itspacrat/cis185_fall_2025/tree/main/MidtermProject; blakemichaelgaynor@gmail.com)");

    // set up both url query strings (one for page data, one for thumbnails)
    try {

        let response = await fetch(url, { method: 'GET', headers: headers });
        return response.json();

    } catch (error) {
        console.error(error);
    }
}