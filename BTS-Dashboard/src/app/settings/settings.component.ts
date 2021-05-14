/* @AH_VACKintosh
  Uses firebase auth to check for authenticated user, also uses
  user-preferences to check to see what is being displayed and allow 
  users to control that
*/
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
      this.prefs.setTrending(isChecked);
    };
    if(name == this.regionTweetsName){
      this.regionTweets = isChecked;
      this.prefs.setRegionTweets(isChecked);
    };
    if(name == this.timeTweetsName){
      this.timeTweets = isChecked;
      this.prefs.setTimeTweets(isChecked);
    };
    if(name == this.regionSpotifyName){
      this.regionSpotify = isChecked;
      this.prefs.setRegionSpotify(isChecked);
    };
    if(name == this.twitterLikesName){
      this.twitterLikes = isChecked;
      this.prefs.setLikes(isChecked);
    }
    if(name == this.twitterRetweetsName){
      this.twitterRetweets = isChecked;
      this.prefs.setRetweets(isChecked);
    }
  }

  saveThis(){
    //call back to the user-prefs service and save the new values to the user data
  }

}
