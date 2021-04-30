//Load needed packages
require('dotenv').config();
const fetch = require("node-fetch");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

//Import neeeded classes
const {TwitterDatabaseAgent} = require('./TwitterDabataseAgent.js');
const {SpotifyDatabaseAgent} = require('./SpotifyDatabaseAgent.js');
const {TwitterAPIAgent} = require("./TwitterAPIAgent.js");
const {TweetUpdater} = require("./TweetUpdater.js");
const {getTwitterClient} = require("./getTwitterClient.js");
const {getSpotifyClient} = require("./getSpotifyClient.js");
const {SpotifyTopTracks} = require("./SpotifyTopTracks.js");

//initialize the firebase app
admin.initializeApp();
//Instantiate needed classes
const client = getTwitterClient();
const SpotifyClient = getSpotifyClient();
const TD_Agent = new TwitterDatabaseAgent(admin.firestore());
const SD_Agent = new SpotifyDatabaseAgent(admin.firestore());
const TAPI_Agent = new TwitterAPIAgent(client);
const tweetHandler = new TweetUpdater(TD_Agent, TAPI_Agent);
const SpotifyTracker = new SpotifyTopTracks(SpotifyClient, SD_Agent);

exports.getTopTracks = functions.https.onCall(async(context) =>{
  SpotifyTracker.getTracks();

})

//firebase request function to update tweets that will be displayed on the main page
exports.updateMainTweets = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'statuses/user_timeline';
    let params = {screen_name:"bts_bighit", count:10};
    tweetHandler.updateTweets(url, params, "tweets", response)
  });
});

//firebase request function to update tweets that will be displayed on user page
exports.updateTrendingTweets = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'search/tweets';
    let params = {q:"#bts", count:10, response_type:"popular"};
    tweetHandler.updateTweets(url, params, "#bts", response)
  });
});

//firebase onCall function that gets twitter data from the database and returns it
exports.getDataFromDB = functions.https.onCall(async (data, context) => {
  return TD_Agent.getDocuments(data);
})

//firebase scheduled function for updating main and user page tweets
exports.refreshTweets = functions.pubsub.schedule('every 24 hours').timeZone('America/New_York').onRun((context) => {
  const mainTweets = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateMainTweets';
  const trendingTweets = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateTrendingTweets';
  fetch(mainTweets)
  .then((result) => console.log(result));
  fetch(trendingTweets)
  .then((result) => console.log(result));
  return null;
})