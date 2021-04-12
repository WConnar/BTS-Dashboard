async function displayTweets(){
    let twitter = getTwitterClient();
    let getTweets = await firebase.functions().httpsCallable("getDataFromDB");
    const section = document.getElementById("tweets");
    getTweets("tweets").then(result => {
        result.data.map(data => {
            section.innerHTML += data.html;
        })
    })
}
window.addEventListener("load", displayTweets(), false);