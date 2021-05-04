import { Component, OnInit } from '@angular/core';
declare const ChartCreator:any;
declare const TwitterDataPipeline:any;

@Component({
  selector: 'app-twitter-likes',
  templateUrl: './twitter-likes.component.html',
  styleUrls: ['./twitter-likes.component.css']
})
export class TwitterLikesComponent implements OnInit {

  constructor() { }

  async ngOnInit(){
    //displayChart("activityChart");
    let chartHandler = new ChartCreator();
    let dataPipeline = new TwitterDataPipeline();
    var options = {
      title: 'BTS Fan Like Count'
    }
    let data = await dataPipeline.getBarChartData("favorite_count", ["Date", "Likes"]);
    console.log(data);
    chartHandler.createBarChart(data, "favoriteCountChart", options);
  }

}
