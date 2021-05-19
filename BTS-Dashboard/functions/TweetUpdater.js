//KD
/**
 * This class deals with updating any tweet data that is being stored in a firebase firestore.
 */
class TweetUpdater{
    /**
     * <<Constructor>>
     * @param TD_Agent A TwitterDatabaseAgent that will deal with communicating to a firebase firestore
     * @param TAPI_Agent A TwitterAPIAgent that will deal with communicating to the Twitter API
     */
    constructor(TD_Agent, TAPI_Agent){
        this.TD_Agent = TD_Agent;
        this.TAPI_Agent = TAPI_Agent;
    }
    /**
     * This method will replace tweets within a firebase collection with the 10 most
     * recent tweets from a Twitter URL enpoint. 
     * @param url The URL endpoint we will be sending a GET request to
     * @param params The parameters that will be followed when the URL request is made
     * @param collection The firestore collection we will be storing our data to
     * @param response A reference to a URL response object where we will update its status
     * and send whatever data we receive
     */
    async updateTweets(url, params, collection, response){
        this.TD_Agent.deleteDocuments(collection);
        let tweetData = await this.TAPI_Agent.get(url,params)
        .then(async(data) => {
            for(let index = 0; index < data.length; index++){
                this.TD_Agent.saveDocument(data[index], collection);
            }
            return data;
        });
        return tweetData;
    }
}

module.exports = {TweetUpdater};