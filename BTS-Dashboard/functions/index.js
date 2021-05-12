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

let countryList = [
  '5714382051c06d1e',
  '25530ba03b7d90c6',
  '4d3b316fe2e52b29',
  '682c5a667856ef42',
  '8633ee56a589f49c',
  '2dfa9ecb0179a4e4',
  '974c290e10850494',
  '06ef846bfc783874',
  '1b107df3ccc0aaa1',
  '2371490f9d073edc',
  'b850c1bfd38f30e0',
  'ce7988d3a8b6f49f',
  '96683cc9126741d1'
];
exports.getTopTracks = functions.https.onCall(async(context) =>{
  SpotifyTracker.getTracks('PH');
  SpotifyTracker.getTracks('US');
  SpotifyTracker.getTracks('TH');
  SpotifyTracker.getTracks('BR');
  SpotifyTracker.getTracks('MX');
  SpotifyTracker.getTracks('MY');
  SpotifyTracker.getTracks('IN');
  SpotifyTracker.getTracks('KR');
  SpotifyTracker.getTracks('JP');
  SpotifyTracker.getTracks('ID');

})

exports.getLocationData = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'search/tweets';
    let g = [];
    for(let index = 0; index<countryList.length; index++){
      let params = {q:"#bts place:"+countryList[index], count:10, result_type:"popular"};
      let countryActivity = await tweetHandler.updateLocationData(url, params);
      g.push(countryActivity);
    }
    console.log(g);
    response.status(200);
  });
});

exports.updateActivityData = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let responseData = [];
    let dateRange = 7;
    let url = 'search/tweets';
    let params;
    let currDate = new Date();
    let presentDate;
    let prevDate;
    let sinceDate;
    let date;
    for (let index = 0; index<dateRange; index++){
      presentDate = new Date(currDate.getTime() - (index * 24 * 60 * 60 * 1000));
      prevDate = new Date(currDate.getTime() - ((index+1) * 24 * 60 * 60 * 1000));
      date = presentDate.getFullYear() + "-" + (presentDate.getMonth()+1) + "-" + presentDate.getDate();
      sinceDate = prevDate.getFullYear() + "-" + (prevDate.getMonth()+1) + "-" + prevDate.getDate();
      params = {q:"#bts", count:10, result_type:"popular", since:sinceDate, until:date};
      await tweetHandler.updateTweets(url, params, date, response)
      .then(data => {
        responseData.push(data);
      });
    }
    TD_Agent.deleteDocuments(sinceDate);
    response.status(200).send(responseData);
  });
});

//firebase request function to update tweets that will be displayed on the main page
exports.updateMainTweets = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'statuses/user_timeline';
    let params = {screen_name:"bts_bighit", count:10};
    await tweetHandler.updateTweets(url, params, "tweets", response)
    .then(data => {
      response.status(200).send(data);
    });
  });
});

//firebase request function to update tweets that will be displayed on user page
exports.updateTrendingTweets = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    let url = 'search/tweets';
    let params = {q:"#bts", count:10, response_type:"popular"};
    tweetHandler.updateTweets(url, params, "#bts", response)
    .then(data => {
      response.status(200).send(data);
    });
  });
});

//firebase onCall function that gets twitter data from the database and returns it
exports.getDataFromDB = functions.https.onCall(async (data, context) => {
  return TD_Agent.getDocuments(data);
})

exports.getDataFromSpotifyDB = functions.https.onCall(async (data, context) => {
  return SD_Agent.getDocuments(data);
})

//firebase scheduled function for updating main and user page tweets
exports.refreshTweets = functions.pubsub.schedule('every 24 hours').timeZone('America/New_York').onRun((context) => {
  const mainTweets = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateMainTweets';
  const trendingTweets = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateTrendingTweets';
  const activityData = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/updateActivityData';
  fetch(mainTweets)
  .then((result) => console.log(result));
  fetch(trendingTweets)
  .then((result) => console.log(result));
  fetch(activityData)
  .then((result) => console.log(result));
  return null;
})

exports.refreshTracks = functions.pubsub.schedule('every 24 hours').timeZone('America/New_York').onRun((context) => {
  const newTracks = 'https://us-central1-btsdashboard-d7ad5.cloudfunctions.net/getTopTracks';
  fetch(newTracks)
  .then((result) => console.log(result));

  return null;
})