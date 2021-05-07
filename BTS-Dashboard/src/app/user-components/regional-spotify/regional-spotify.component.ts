import { Component, OnInit } from '@angular/core';
declare const ChartCreator:any;
declare const SpotifyDataPipeline:any;
@Component({
  selector: 'app-regional-spotify',
  templateUrl: './regional-spotify.component.html',
  styleUrls: ['./regional-spotify.component.css']
})
export class RegionalSpotifyComponent implements OnInit {

  constructor() { }

  async ngOnInit(){
    let chartHandler = new ChartCreator();
    let dataPipeline = new SpotifyDataPipeline();
    var options = {
      title: 'BTS Top Popular Tracks in GB',
      vAxis: {title: 'Popularity'},
      hAxis: {title: 'Track'}
    }
    let data = await dataPipeline.getBarChartData("name", "popularity", ["Tack", "Popularity"]);
    console.log(data);
    chartHandler.createBarChart(data, "topTracksByRegion", options);
  }

}
