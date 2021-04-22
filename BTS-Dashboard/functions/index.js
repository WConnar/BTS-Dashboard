require('dotenv').config();
const fetch = require("node-fetch");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const {TwitterDatabaseAgent} = require('./TwitterDabataseAgent.js');
const {TwitterAPIAgent} = require("./TwitterAPIAgent.js");
const {TweetUpdater} = require("./TweetUpdater.js");
const {getTwitterClient} = require("./getTwitterClient.js");

admin.initializeApp();
const client = getTwitterClient();
const TD_Agent = new TwitterDatabaseAgent(admin.firestore());
const TAPI_Agent = new TwitterAPIAgent(client);
const tweetHandler = new TweetUpdater(TD_Agent, TAPI_Agent);

exports.updateMainTweets = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'statuses/user_timeline';
    let params = {screen_name:"bts_bighit", count:10};
    tweetHandler.updateTweets(url, params, "tweets", response)
  });
});

exports.updateTrendingTweets = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'search/tweets';
    let params = {q:"#bts", count:10};
    tweetHandler.updateTweets(url, params, "#bts", response);
  });
});

exports.getDataFromDB = functions.https.onCall(async (data, context) => {
  return TDAgent.getDocuments(data);
})

exports.refreshTweets = functions.pubsub.schedule('every day 00:00').timeZone('America/New_York').onRun((context) => {
  const URL = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateTweets';
  fetch(URL)
  .then((result) => console.log(result));
  return null;
})