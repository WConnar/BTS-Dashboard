import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  trendingTweets: boolean = true;
  twitterRetweets: boolean = true;
  twitterLikes: boolean = true;

  regionTweets: boolean = true;
  timeTweets: boolean = true;
  regionSpotify: boolean = true;

  constructor() { }

}
