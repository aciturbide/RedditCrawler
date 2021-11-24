import {
    RedditScraper,
    IPageListingResults,
    IRequestOptions,
    IRedditCredentials,
} from "redditscraper.js";

(async () => {

    const redditScraperOptions: IRedditCredentials = {
        AppId: "SPbi2xbTrZ68xioHa5WupQ",
        AppSecret: "H5xYrhHhVnpUGQ327ZgAadJfkB6FMg",
    };

    const requestOptions: IRequestOptions = {
        Pages: 5,
        Records: 25,
        SubReddit: "javascript",
        SortType: "hot",
    };

    try {
        const redditScraper: RedditScraper = new RedditScraper(redditScraperOptions);
        const scrapedData: IPageListingResults = await redditScraper.scrapeData(requestOptions);
        console.log(scrapedData);
    } catch (error) {
        console.error(error);
    }

})();
