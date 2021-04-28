import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{

  trendingTweetsName: string = "Top trending tweets";
  regionTweetsName: string = "Activity by region";
  timeTweetsName: string = "Activity by time";

  regionSpotifyName: string = "Top trending tracks by region";
  timeSpotifyName: string = "Streams over time";

  trendingTweets: boolean = true;
  regionTweets: boolean = false;
  timeTweets: boolean = false;

  regionSpotify: boolean = false;
  timeSpotify: boolean = false;

  constructor(public auth: AngularFireAuth) { }

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
    if(name == this.timeSpotifyName){
      this.timeSpotify = isChecked;
    };
  }

  saveThis(){
    
  }

}
