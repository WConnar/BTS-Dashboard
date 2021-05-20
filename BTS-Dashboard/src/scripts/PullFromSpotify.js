//@VT_VACKINTOSH
//A script function to pull tracks from spotify
async function PullFromSpotify(){
    let trackList = await firebase.functions().httpsCallable("getTopTracks");
    trackList();
}