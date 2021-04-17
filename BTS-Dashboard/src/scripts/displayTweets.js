async function displayTweets(){
    let getTweets = await firebase.functions().httpsCallable("getDataFromDB");
    const section = document.getElementById("tweets");
    getTweets("tweets").then(result => {
        result.data.map(data => {
            section.innerHTML += data.html;
        })
    })
}