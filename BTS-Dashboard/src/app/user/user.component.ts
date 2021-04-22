import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const displayTweets:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    displayTweets("trendingTweets", "#bts");
  }

  ngAfterViewInit() {
    // Tweets
    let ngJs: any;
    const ngFjs = document.getElementsByTagName('script')[0];
    const ngP = 'https';

    if (!document.getElementById('twitter-wjs')) {
      ngJs = document.createElement('script');
      ngJs.id = 'twitter-wjs';
      ngJs.src = ngP + '://platform.twitter.com/widgets.js';
      ngFjs.parentNode!.insertBefore(ngJs, ngFjs);

    }
  }

}
