/*
* The TweetFetcher program retrieves and outputs tweets 
* from Twitter. Tweets are retrieved by search phrase and
* can be outputted either as a set number of tweets or a 
* continuous stream of new tweets.
*
* @version 1.0
*/
class TweetFetcher{
    constructor(client){
        this.client = client;
    }
    /*
    * This method fetches and outputs Twitter tweets.
    *
    * @param key - The phrase that will be searched for
    * @param nmumTweets - Number of phrases to outputted
    */
    getTweets(key, numTweets){
        this.client.get('search/tweets', {q: key, count:numTweets}, function(error, tweets, response) {
            if (!error) {
              console.log(tweets);
            }
          });
    }
    /*
    * This method constantly streams Twitter tweets.
    *
    * @param key - The phrase that will be searched for
    */
    streamTweets(key){
        var stream = this.client.stream('statuses/filter', {track: key});
        stream.on('data', function(event) {
          console.log(event && event.text);
        });
        
        stream.on('error', function(error) {
          throw error;
        });
    }
}

module.exports = {TweetFetcher};