import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  showTrending: boolean = true;
  showTwitterRegion: boolean = true;
  showSpotifyRegion: boolean = true;
  showTwitterTime: boolean = true;
  showTwitterLikes: boolean = true;
  showTwitterRetweets: boolean = true;

  empty: boolean = false;

  constructor(
    public auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    if(!this.showTwitterLikes && !this.showTwitterRetweets && !this.showTrending && !this.showTwitterRegion && !this.showSpotifyRegion && !this.showTwitterTime){
      this.empty = true;
    }
  }

}


