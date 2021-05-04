import { Component, OnInit } from '@angular/core';
declare const ChartCreator:any;
declare const TwitterDataPipeline:any;

@Component({
  selector: 'app-twitter-retweets',
  templateUrl: './twitter-retweets.component.html',
  styleUrls: ['./twitter-retweets.component.css']
})
export class TwitterRetweetsComponent implements OnInit {

  constructor() { }

  async ngOnInit(){
    let chartHandler = new ChartCreator();
    let dataPipeline = new TwitterDataPipeline();
    var options = {
      title: 'BTS Fan Retweet Count',
      colors: ['red']
    }
    let data = await dataPipeline.getBarChartData("retweet_count", ["Date", "Retweets"]);
    console.log(data);
    chartHandler.createBarChart(data, "retweetsCountChart", options);
  }

}
