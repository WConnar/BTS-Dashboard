let tweets = firebase.firestore().collection("tweets");

function displayTweets(){
    const section = document.getElementById("tweets");
    var uList = document.createElement("ul");
    section.appendChild(uList);
    tweets.listDocuments().then(val => {
        val.map((val) => {
        var f = document.createElement("li");
        f.appendChild(document.createTextNode(val));
        uList.appendChild(f);
        })
    })
}
console.log(tweets);
window.addEventListener("load", displayTweets(), false);