require('dotenv').config();
const fetch = require("node-fetch");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Twitter = require('twitter');
const cors = require('cors')({origin: true});
const {TwitterDatabaseAgent} = require('./TwitterDabataseAgent.js');

admin.initializeApp();
const tweetAgent = new TwitterDatabaseAgent(admin.firestore());

const getTwitterClient = () => {
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
}

const callApi = (request, response, url) => {
  let client = getTwitterClient();
  client.get(url, {screen_name:"bts_bighit", count:10}, function(error, tweets, res) {
    if (!error) {
      tweetAgent.deleteDocuments('tweets');
      tweets.forEach(async (tweet) => {
        const embedTweet = await client.get('statuses/oembed', {id: tweet.id_str});
        tweetAgent.saveDocument(embedTweet, 'tweets');
      })
      response.status(200).send(tweets);
    }
  });
}

exports.updateTweets = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    callApi(request, response, 'statuses/user_timeline');
  });
});

exports.getDataFromDB = functions.https.onCall(async (data, context) => {
  return tweetAgent.getDocuments(data);
})

exports.refreshTweets = functions.pubsub.schedule('every day 00:00').timeZone('America/New_York').onRun((context) => {
  const URL = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateTweets';
  fetch(URL)
  .then((result) => console.log(result));
  return null;
})