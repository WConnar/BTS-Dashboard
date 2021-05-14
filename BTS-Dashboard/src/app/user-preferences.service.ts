/* @AH_VACKintosh 
  This file helps to control what is seen on the user's individual
  page. Is used by the user and settings components
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  trendingTweets: boolean = true;
  twitterRetweets: boolean = true;
  twitterLikes: boolean = true;

  regionTweets: boolean = false;
  timeTweets: boolean = true;
  regionSpotify: boolean = true;

  constructor() { }

  //setter methods for the boolean values
  setTrending(newVal: boolean){
    this.trendingTweets = newVal;
  }
  setRetweets(newVal: boolean){
    this.twitterRetweets = newVal;
  }
  setLikes(newVal: boolean){
    this.twitterLikes = newVal;
  }
  setRegionTweets(newVal: boolean){
    this.regionTweets = newVal;
  }
  setTimeTweets(newVal: boolean){
    this.timeTweets = newVal;
  }
  setRegionSpotify(newVal: boolean){
    this.regionSpotify = newVal;
  }
}
