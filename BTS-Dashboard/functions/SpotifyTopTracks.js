

/**
 * This example retrieves the top tracks for an artist.
 * https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/
 */


//const { database } = require("firebase-admin");

/**
 * This endpoint doesn't require an access token, but it's beneficial to use one as it
 * gives the application a higher rate limit.
 *
 * Since it's not necessary to get an access token connected to a specific user, this example
 * uses the Client Credentials flow. This flow uses only the client ID and the client secret.
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */



// Retrieve an access token
class SpotifyTopTracks{
    constructor(spotifyApi, database){
        this.spotifyApi = spotifyApi;
        this.database = database;
        console.log(this.spotifyApi);
    }

  async getTracks(region){
     this.database.deleteDocuments("tracks" + region);
    this.spotifyApi
      .clientCredentialsGrant()
      .then(async (data) => {
        // Set the access token on the API object so that it's used in all future requests
        //console.log(data);
        this.spotifyApi.setAccessToken(data.body.access_token);

        // Get the most popular tracks by David Bowie in Great Britain
        //return 
        let test = await this.spotifyApi.getArtistTopTracks('3Nrfpe0tUJi4K4DXYWgMUX', region);
        return test;
      })
      .then((data) =>{
        console.log('The most popular tracks for BTS..');
        console.log('Drum roll..');
        console.log('...');
        console.log(data.body);
        
        data.body.tracks.forEach((track, index) =>{
          this.database.saveDocument(track, "tracks" + region);
        });
      })
      .catch(function(err) {
        console.log('Unfortunately, something has gone wrong.', err.message, err);
      });}
}
  module.exports={SpotifyTopTracks};