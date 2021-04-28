async function displayTweets(htmlElement, collectionName){
    let getTweets = await firebase.functions().httpsCallable("getDataFromDB");
    const section = document.getElementById(htmlElement);
    getTweets(collectionName).then(result => {
        section.innerHTML += '<style> ' +
      'div.tweet{ width: 100%; border: 3px solid #3BB9FF; text-align: left;  padding-left: 15px; padding-top: 10px; border-radius: 5px; height: 100%;}' +
      'img.profile {border: 1px solid #3BB9FF; border-radius: 50%;}' +
      'p.text, div.text {color:black;}' +
      'div.image{ height:60%;}'+
      'img.content{height:100%; width:100%; padding-right:15px;}'
      '</style>'
        result.data.map(data => {
            formatTweet(data.data, section);
        })
    })
}

function formatTweet(data, tagRef){
    let tweetRef;
    if(data.retweeted_status != undefined){
        if(data.retweeted_status.entities.media != undefined){
            tweetRef = data.retweeted_status.entities.media[0].expanded_url;
            tagRef.innerHTML += '<a href="' + tweetRef + '"><div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<p class="text">' + '<img src=' + data.retweeted_status.user.profile_image_url_https + ' class="profile">  ' + data.retweeted_status.user.name + '  @' + data.retweeted_status.user.screen_name + ' </p>' +
            //Adds text from tweet
            '<div class="text">' + data.retweeted_status.text + '</div>' +
            '<div class="image">' + '<img scr=' + data.retweeted_status.entities.media[0].media_url_https + ' class="content"/>' + '</div>'
            '</div></a>';
        }
        else if(data.retweeted_status.entities.urls[0] != undefined){
            tweetRef = data.retweeted_status.entities.urls[0].expanded_url;
            tagRef.innerHTML += '<a href="' + tweetRef + '"><div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<p class="text">' + '<img src=' + data.retweeted_status.user.profile_image_url_https + ' class="profile">  ' + data.retweeted_status.user.name + '  @' + data.retweeted_status.user.screen_name + ' </p>' +
            //Adds text from tweet
            '<div class="text">' + data.retweeted_status.text + '</div>' +
    
            '</div></a>';
        }
    }
    else{
        if(data.entities.media != undefined){
            tweetRef = data.entities.media[0].expanded_url;
            tagRef.innerHTML += '<a href="' + tweetRef + '"><div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<p class="text">' + '<img src=' + data.user.profile_image_url_https + ' class="profile">  ' + data.user.name + '  @' + data.user.screen_name + ' </p>' +
            //Adds text from tweet
            '<div class="text">' + data.text + '</div>' +
            '<div class="image">' + '<img scr=' + data.entities.media[0].media_url_https + ' class="content"/>' + '</div>'
            '</div></a>';
        }
        else if(data.entities.urls[0] != undefined){
            tweetRef = data.entities.urls[0].expanded_url;
            tagRef.innerHTML += '<a href="' + tweetRef + '"><div class="tweet">' +
            //Adds profile pic, twitter name and handle
            '<p class="text">' + '<img src=' + data.user.profile_image_url_https + ' class="profile">  ' + data.user.name + '  @' + data.user.screen_name + ' </p>' +
            //Adds text from tweet
            '<div class="text">' + data.text + '</div>' +
    
            '</div></a>';
        }
    }
}