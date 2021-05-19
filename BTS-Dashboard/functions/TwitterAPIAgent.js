//KD
/**
 * This class poses as a medium for communicating with Twitter's API.
 */
class TwitterAPIAgent{
    /**
     * <<Constructor>>
     * @param client The client is a Twitter object to which we will be making API calls to
     */
    constructor(client){
        this.client = client;
    }
    /**
     * This method makes a GET request to our client and upon receiving that data returns it.
     * @param url The URL endpoint to which we will be making a call to, A list of these can
     * be found at https://developer.twitter.com/en/docs/twitter-api/early-access under the 
     * updated endpoints header
     * @param params The parameters that will be followed when the GET request is made. Params
     * differ based on the URL endpoint given and can be found at 
     * https://developer.twitter.com/en/docs/twitter-api/early-access under the updated enpoints
     * header and by clicking any one of the URL endpoints.
     * @returns The twitter data in a json formatted array.
     */
    async get(url, params){
        let data = await this.client.get(url, params);
        //URL endpoints that user "search" returns data in a different format than the other URL
        //enpoints so this function makes sure that data is returned like that of the other endpoints
        if(url.includes("search")){
            return data.statuses;
        }
        else{
            return data;
        }
    }
    /**
     * This method embeds twitter tweet data and returns it as a json formatted array.
     * @param tweets An array of json formatted tweet data. All elements in this array 
     * will be converted to embedded tweet data.
     * @returns An array of json formatted embedded tweet data.
     */
    async embedTweets(tweets){
        let embedTweets = [];
        for(let index = 0; index < tweets.length; index++){
            let embedTweetData = await this.client.get('statuses/oembed', {id: tweets[index].id_str});
            embedTweets.push(embedTweetData);
        }
        return embedTweets;
    }
}

module.exports = {TwitterAPIAgent};