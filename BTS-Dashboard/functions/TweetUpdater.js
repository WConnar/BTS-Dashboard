class TweetUpdater{
    constructor(TD_Agent, TAPI_Agent){
        this.TD_Agent = TD_Agent;
        this.TAPI_Agent = TAPI_Agent;
    }

    async updateTweets(url, params, collection, response){
        let tweetData = await this.TAPI_Agent.get(url, params);
        this.TAPI_Agent.embedTweets(tweetData)
        .then(async (data) => {
            this.TD_Agent.deleteDocuments(collection);
            for(let index = 0; index < data.length; index++){
                this.TD_Agent.saveDocument(data[index], collection);
            }
            response.status(200).send(data);
        });
    }
}

module.exports = {TweetUpdater};