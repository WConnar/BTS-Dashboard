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
    let ngJs: any;
    const ngFjs = document.getElementsByTagName('script')[0];
    console.log("No element");
    ngJs = document.createElement('script');
    ngJs.id = 'twitter-wjs';
    ngJs.src = 'https://platform.twitter.com/widgets.js';
    ngFjs.parentNode!.insertBefore(ngJs, ngFjs);
  }
}
