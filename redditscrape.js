//https://browntreelabs.com/scraping-reddits-api-with-snoowrap/
import snoowrap from 'snoowrap';
export async function scrapeSubreddit() {
  const r = new snoowrap({
    userAgent: 'Effective-Function10',
    clientId: 'cuhD9nmq-ltJTfaZ47_ncQ',
    clientSecret: 'flkEE6bYDESJKRPDQZz-Oq-iuZfTlQ',
    refreshToken: '1188643323079-k67vno5bbh9n6FHbuQppm3eBteRvCQ'
  });

  const subreddit = await r.getSubreddit('stopthesteal');
  const topPosts = await subreddit.getTop({time: 'year', limit: 1000});

  let data = [];

  topPosts.forEach((post) => {
    data.push({
      link: post.url,
      text: post.title,
      score: post.score
    })
  });

  console.log(data);
};
