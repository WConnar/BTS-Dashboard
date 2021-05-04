import { Component, OnInit} from '@angular/core';
declare const displayTweets:any;

@Component({
  selector: 'app-trending-tweets',
  templateUrl: './trending-tweets.component.html',
  styleUrls: ['./trending-tweets.component.css']
})
export class TrendingTweetsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    displayTweets("trendingTweets", "#bts");
  }
}
