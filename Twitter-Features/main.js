//import modules
var Twitter = require('twitter');
const {TweetFetcher} = require('./TweetFetcher');
 
const apiKey = 'JGtdpHIr0aVISq1OihkBDPz9g'
const apiSecretKey = 'DBmRMtAqLbilmEPGSTzZqJvWqY7UULfc01EG08diKBNZe0c7tp'
const accessToken = '1208496905442992128-sXDtoDZipXIeDXKtPwKjJiceec05QL'
const accessTokenSecret = 'YQ5VpOLvuPZDq4DTIoIw7sbtQDXluBdEJSchNj3dobyVQ'

//create Twitter object
var client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});
 
const t = new TweetFetcher(client);


//Fetch tweets by keyphrase and number of tweets to return
t.getTweets("#bts", 10);

//Fetch any new tweet posted that includes the keyphrase
t.streamTweets('#bts');