const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Twitter = require('twitter');
const cors = require('cors')({origin: true});

admin.initializeApp();

const getTwitterClient = () => {
  return new Twitter({
    consumer_key: 'JGtdpHIr0aVISq1OihkBDPz9g',
    consumer_secret: 'DBmRMtAqLbilmEPGSTzZqJvWqY7UULfc01EG08diKBNZe0c7tp',
    access_token_key: '1208496905442992128-sXDtoDZipXIeDXKtPwKjJiceec05QL',
    access_token_secret: 'YQ5VpOLvuPZDq4DTIoIw7sbtQDXluBdEJSchNj3dobyVQ'
  });
}

const callApi = (request, response, url) => {
  let client = getTwitterClient();  
  client.get(url, {screen_name:"bts_bighit", count:5}, function(error, tweets, res) {
    if (!error) {
      admin.firestore().collection('tweets').listDocuments().then(val => {
        val.map((val) => {
            val.delete()
        })
      })
      tweets.forEach((tweet) => {
        admin.firestore().collection('tweets').add({
          text: tweet.text
        })
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
