//@VT_VACKINTOSH
//A class for saving Spotify track data in correct collections
const {DatabaseAgent} = require('./DatabaseAgent.js');


class SpotifyDatabaseAgent extends DatabaseAgent{
    constructor(database){
        super(database);
    }
    
    async saveDocument(track, collection){
        this.database.collection(collection).add({
            
           data: track
        })
    }
}
module.exports = {SpotifyDatabaseAgent};