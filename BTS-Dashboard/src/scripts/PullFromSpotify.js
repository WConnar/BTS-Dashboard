async function PullFromSpotify(){
    let trackList = await firebase.functions().httpsCallable("getTopTracks");
    trackList();
}