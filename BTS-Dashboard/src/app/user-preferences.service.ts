import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  constructor() { }

  trendingTweets: boolean = true;
  twitterRetweets: boolean = true;
  twitterLikes: boolean = true;

  regionTweets: boolean = false;
  timeTweets: boolean = false;
  regionSpotify: boolean = false;
}
