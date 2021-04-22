class TwitterAPIAgent{
    constructor(client){
        this.client = client;
    }

    async get(url, q){
        let data = await this.client.get(url, q);
        if(url.includes("search")){
            return data.statuses;
        }
        else{
            return data;
        }
    }

    async embedTweets(tweets){
        let embedTweets = [];
        for(let index = 0; index < tweets.length; index++){
            let embedTweetData = await this.client.get('statuses/oembed', {id: tweets[index].id_str});
            embedTweets.push(embedTweetData);
        }
        return embedTweets;
    }
}

module.exports = {TwitterAPIAgent};