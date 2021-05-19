//KD
const Twitter = require('twitter');
/**
 * This function creates a new Twitter API Object which can be used for
 * making calls. Twitter API keys used to create this object are hidden in the
 * .env file.
 * @returns A Twitter API object.
 */
const getTwitterClient = () => {
    return new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
}

module.exports = {getTwitterClient};
