import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UserPreferencesService } from '../user-preferences.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{

  trendingTweetsName: string = "Top trending tweets";
  twitterRetweetsName: string = "Twitter Retweet Activity";
  twitterLikesName: string = "Twitter Like Activity";

  regionTweetsName: string = "Activity by region";
  timeTweetsName: string = "Activity by time";
  regionSpotifyName: string = "Top trending tracks by region";
  

  trendingTweets: boolean = this.prefs.trendingTweets;
  twitterRetweets: boolean = this.prefs.twitterRetweets;
  twitterLikes: boolean = this.prefs.twitterLikes;

  regionTweets: boolean = this.prefs.regionTweets;
  timeTweets: boolean = this.prefs.timeTweets;
  regionSpotify: boolean = this.prefs.regionSpotify;
  

  constructor(
    public auth: AngularFireAuth,
    private prefs: UserPreferencesService,
    ) { }

  onChanged(name: string, isChecked: boolean){
    if(name == this.trendingTweetsName){
      this.trendingTweets = isChecked;
    };
    if(name == this.regionTweetsName){
      this.regionTweets = isChecked;
    };
    if(name == this.timeTweetsName){
      this.timeTweets = isChecked;
    };
    if(name == this.regionSpotifyName){
      this.regionSpotify = isChecked;
    };
    if(name == this.twitterLikesName){
      this.twitterLikes = isChecked;
    }
    if(name == this.twitterRetweetsName){
      this.twitterRetweets = isChecked;
    }
  }

  saveThis(){
    
  }

}
