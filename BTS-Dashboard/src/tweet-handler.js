//import modules
const { CONSOLE_APPENDER } = require('karma/lib/constants');
var Twitter = require('twitter');

class TweetFetcher{
  constructor(){
    this.apiKey = 'JGtdpHIr0aVISq1OihkBDPz9g'
    this.apiSecretKey = 'DBmRMtAqLbilmEPGSTzZqJvWqY7UULfc01EG08diKBNZe0c7tp'
    this.accessToken = '1208496905442992128-sXDtoDZipXIeDXKtPwKjJiceec05QL'
    this.accessTokenSecret = 'YQ5VpOLvuPZDq4DTIoIw7sbtQDXluBdEJSchNj3dobyVQ'
    this.client = new Twitter({
      consumer_key: this.apiKey,
      consumer_secret: this.apiSecretKey,
      access_token_key: this.accessToken,
      access_token_secret: this.accessTokenSecret
    });
  }
  /*
  * This method fetches and outputs Twitter tweets.
  *
  * @param key - The phrase that will be searched for
  * @param nmumTweets - Number of phrases to outputted
  */
  async getTweets(key, numTweets){
      const allTweets = new Array();
        var tw = await this.client.get('search/tweets', {q: key, count:numTweets})
        .then(function(tweets){
            return tweets.statuses;
        })
        .catch(error => console.log(error));
        return tw;
  }
}

async function displayTweets(){
    const tweetList = await tweets;
    var section = document.getElementsByClassName("column right");
    var uList = document.createElement("ul");
    section.appendChild(uList);
    tweetList.forEach(function(tweet){
        console.log(tweet)
        var f = document.createElement("li");
        f.appendChild(document.createTextNode(tweet.text));
        uList.appendChild(f);
    })
}

var tweetFetcher = new TweetFetcher();
var tweets = tweetFetcher.getTweets("bts", 5);
displayTweets();
//module.exports = {TweetFetcher};