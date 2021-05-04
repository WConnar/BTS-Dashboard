import { Component, OnInit } from '@angular/core';
declare const ChartCreator:any;
declare const TwitterDataPipeline:any;

@Component({
  selector: 'app-time-tweets',
  templateUrl: './time-tweets.component.html',
  styleUrls: ['./time-tweets.component.css']
})
export class TimeTweetsComponent implements OnInit {

  constructor() { }

  async ngOnInit(){
    let chartHandler = new ChartCreator();
    let dataPipeline = new TwitterDataPipeline();
    var options = {
      title: 'BTS Fan Twitter Activity',
      vAxis: {title: 'Activity'},
      hAxis: {title: 'Date'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };
    let data = await dataPipeline.getComboChartData("favorite_count", "retweet_count", ["Date", "Likes", "Retweets"]);
    console.log(data);
    chartHandler.createComboChart(data, "activityChart", options);
  }

}
