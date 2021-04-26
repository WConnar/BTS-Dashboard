import { Component } from '@angular/core';

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

  trendingTweets: boolean = false;
  regionTweets: boolean = false;
  timeTweets: boolean = false;

  regionSpotify: boolean = false;
  timeSpotify: boolean = false;

  constructor() { }

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
