//KD
/**
 * This function will display tweets stored in a firebase collection to an HTML element
 * @param htmlElement The element the tweets will be added to
 * @param collectionName The firebase collection the data will be pulled from
 */
async function displayTweets(htmlElement, collectionName){
    let getTweets = await firebase.functions().httpsCallable("getDataFromDB");
    const section = document.getElementById(htmlElement);
    getTweets(collectionName).then(result => {
        section.innerHTML += '<style> ' +
      'div.tweet{ width: 100%; border: 3px solid #3BB9FF; text-align: left;  padding-left: 15px; padding-top: 10px; border-radius: 5px; height: 100%;}' +
      'img.profile {border: 1px solid #3BB9FF; border-radius: 50%;}' +
      'p.text, div.text {color:black;}' +
      'p.text:hover{text-decoration: underline}'+
      'div.text:hover{text-decoration: underline}'+
      'div.time-stamp{color:black; padding-top:10px;}'+
      '</style>'
        result.data.map(async (data) => {
            //await translateTweetText(data.data).then((translatedTweet) => {
                //formatTweet(translatedTweet, section);
            //});
            formatTweet(data.data, section);
        })
    })
}
/**
 * This function will translate and change the text of a tweet if it is not already in english
 * @param tweetData The JSON data of a twitter tweet
 * @returns The tweet JSON Object
 */
async function translateTweetText(tweetData){
    let retTweet = tweetData;
    let translateText = await firebase.functions().httpsCallable("translateText");
    if(tweetData.retweeted_status != null){
        if(tweetData.retweeted_status.lang != "en"){
            data = {"text":tweetData.retweeted_status.text, "from":tweetData.retweeted_status.lang, "to":"en"};
            await translateText(data).then((result) => {
                tweetData.retweeted_status.text = result.data;
                retTweet = tweetData;
            });
        }
    } 
    else{
        if(tweetData.lang != "en"){
            data = {"text":tweetData.text, "from":tweetData.lang, "to":"en"};
            await translateText(data).then((result) => {
                tweetData.text = result.data;
                retTweet = tweetData;
            });
        }
    }
    return retTweet;
}
/**
 * Given a tweet JSON object this function will format the tweet in a blue container, including the user's profile image, their
 * username, their twitter handle, the text contained in the tweet, and the tweet's time stamp
 * @param data The tweet JSON object
 * @param tagRef A reference to the HTML element the tweet will be formatted in
 */
function formatTweet(data, tagRef){
    let tweetRef;
    if(data.retweeted_status != undefined){
        if(data.retweeted_status.entities.media != undefined){
            tweetRef = data.retweeted_status.entities.media[0].expanded_url;
            tagRef.innerHTML += '<div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<a href="' + tweetRef + '">' +
            '<p class="text">' + '<img src=' + data.retweeted_status.user.profile_image_url_https + ' class="profile">  ' + data.retweeted_status.user.name + '  @' + data.retweeted_status.user.screen_name + ' </p>' +
            //Adds text from tweet
            '</a>'+
            '<a href="' + tweetRef + '">' + 
            '<div class="text">' + data.retweeted_status.text + '</div>' +
            '</a>'+
            '<div class="time-stamp">' + "Created at: " + data.created_at + '<div>'+
            '</div>';
        }
        else if(data.retweeted_status.entities.urls[0] != undefined){
            tweetRef = data.retweeted_status.entities.urls[0].expanded_url;
            tagRef.innerHTML += '<div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<a href="' + tweetRef + '">' +
            '<p class="text">' + '<img src=' + data.retweeted_status.user.profile_image_url_https + ' class="profile">  ' + data.retweeted_status.user.name + '  @' + data.retweeted_status.user.screen_name + ' </p>' +
            //Adds text from tweet
            '</a>'+
            '<a href="' + tweetRef + '">' + 
            '<div class="text">' + data.retweeted_status.text + '</div>' +
            '</a>'+
            '<div class="time-stamp">' + "Created at: " + data.created_at + '<div>'+
            '</div></a>';
        }
    }
    else{
        if(data.entities.media != undefined){
            tweetRef = data.entities.media[0].expanded_url;
            tagRef.innerHTML += '<div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<a href="' + tweetRef + '">' +
            '<p class="text">' + '<img src=' + data.user.profile_image_url_https + ' class="profile">  ' + data.user.name + '  @' + data.user.screen_name + ' </p>' +
            '</a>'+
            //Adds text from tweet
            '<a href="' + tweetRef + '">' + 
            '<div class="text">' + data.text + '</div>' +
            '</a>'+
            '<div class="time-stamp">' + "Created at: " + data.created_at + '<div>'+
            '</div>';
        }
        else if(data.entities.urls[0] != undefined){
            tweetRef = data.entities.urls[0].expanded_url;
            tagRef.innerHTML += '<div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<a href="' + tweetRef + '">' +
            '<p class="text">' + '<img src=' + data.user.profile_image_url_https + ' class="profile">  ' + data.user.name + '  @' + data.user.screen_name + ' </p>' +
            '</a>'+
            //Adds text from tweet
            '<a href="' + tweetRef + '">' + 
            '<div class="text">' + data.text + '</div>' +
            '</a>'+
            '<div class="time-stamp">' + "Created at: " + data.created_at + '<div>'+
            '</div>';
        }
    }
}