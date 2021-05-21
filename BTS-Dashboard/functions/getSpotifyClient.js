//@VT_VACKINTOSH
//A class that returns needed Spotify API keys
const SpotifyWebApi = require('spotify-web-api-node');
const getSpotifyClient = () =>{
    return new SpotifyWebApi({
        clientId: '26045288d9bc429c9517290636e7b4af',
        clientSecret: 'a8b4300bc8164b88b745c7cbe2e19b75'
    });
}
module.exports = {getSpotifyClient};