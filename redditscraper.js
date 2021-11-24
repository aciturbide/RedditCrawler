const RedditScraper = require("reddit-scraper");

(async () => {

    const redditScraperOptions = {
        AppId: "SPbi2xbTrZ68xioHa5WupQ",
        AppSecret: "H5xYrhHhVnpUGQ327ZgAadJfkB6FMg",
    };

    const requestOptions = {
        Pages: 5,
        Records: 25,
        SubReddit: "#stopthesteal",
        SortType: "hot",
    };

    try {
        const redditScraper = new RedditScraper.RedditScraper(redditScraperOptions);
        const scrapedData = await redditScraper.scrapeData(requestOptions);
        console.log(scrapedData);
    } catch (error) {
        console.error(error);
    }

})();
