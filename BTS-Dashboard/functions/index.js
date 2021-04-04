const functions = require('firebase-functions');
const Twitter = require('twitter');
const cors = require('cors')({origin: true});

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
  client.get(url, {q: "#bts", count:5}, function(error, tweets, res) {
    if (!error) {
      return tweets.statuses;
    }
  });
}

exports.getTweets = functions.https.onCall((request, response) => {
  cors(request, response, () => {
    return callApi(request, response, 'search/tweets');
  });
});