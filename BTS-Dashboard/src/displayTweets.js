const getTweets = firebase.functions().httpsCallable("getTweets");

function displayTweets(){
    var tweets = getTweets();
    var tweetGrid = document.getElementById("tweets");
    var uList = document.createElement("ul");
    tweetGrid.appendChild(uList);
    tweets.forEach(function(tweet){
        console.log(tweet)
        var f = document.createElement("li");
        f.appendChild(document.createTextNode(tweet.text));
        uList.appendChild(f);
    })
}

window.addEventListener("load", displayTweets(), false);