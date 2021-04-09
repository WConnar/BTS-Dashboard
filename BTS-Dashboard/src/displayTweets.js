async function displayTweets(){
    const section = document.getElementById("tweets");
    let getTweets = await firebase.functions().httpsCallable("getDataFromDB");
    getTweets("tweets").then(result => {
        result.data.map(data => {
            section.innerHTML += data.html;
        })
    })
}
window.addEventListener("load", displayTweets(), false);