import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const displayTweets:any;

@Component({
  selector: 'app-twitter-card',
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.css']
})
export class TwitterCardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    displayTweets("tweets", "tweets");
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
