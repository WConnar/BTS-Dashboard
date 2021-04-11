const {DatabaseAgent} = require('./DatabaseAgent.js');

class TwitterDatabaseAgent extends DatabaseAgent{
    constructor(database){
        super(database);
    }

    async saveDocument(tweet, collection){
        this.database.collection(collection).add({
            author_name: tweet.author_name,
            author_url: tweet.author_url,
            html: tweet.html,
            url: tweet.url
        })
    }
}
module.exports = {TwitterDatabaseAgent};