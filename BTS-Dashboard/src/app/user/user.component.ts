import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { UserPreferencesService } from '../user-preferences.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  showTrending: boolean = this.prefs.trendingTweets;
  showTwitterRegion: boolean = this.prefs.regionTweets;
  showSpotifyRegion: boolean = this.prefs.regionSpotify;
  showTwitterTime: boolean = this.prefs.timeTweets;
  showTwitterLikes: boolean = this.prefs.twitterLikes;
  showTwitterRetweets: boolean = this.prefs.twitterRetweets;

  empty: boolean = false;

  constructor(
    public auth: AngularFireAuth,
    private prefs: UserPreferencesService
  ) { }

  ngOnInit(): void {
    if(!this.showTwitterLikes && !this.showTwitterRetweets && !this.showTrending && !this.showTwitterRegion && !this.showSpotifyRegion && !this.showTwitterTime){
      this.empty = true;
    }
  }

}


