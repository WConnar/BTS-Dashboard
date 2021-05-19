//KD
const {DatabaseAgent} = require('./DatabaseAgent.js');

/**
 * This classes poses a medium for communication with a firebase firestore
 * when dealing with json formated tweet data
 */
class TwitterDatabaseAgent extends DatabaseAgent{
    constructor(database){
        super(database);
    }
    /**
     * Given the contents of an embedded tweet, this method will create a new
     * document within our firestore collection, saving the keys author_name,
     * author_url, html, and url, alongside their values
     * @param tweet json formatted tweet data that will be added to the firestore collection
     * @param collection The firestore collection we wish to add data to
     */
    async saveDocument(tweet, collection){
        console.log(tweet);
        this.database.collection(collection).add({
            /*
            author_name: tweet.author_name,
            author_url: tweet.author_url,
            html: tweet.html,
            url: tweet.url
            */
           data: tweet
        })
    }
}
module.exports = {TwitterDatabaseAgent};