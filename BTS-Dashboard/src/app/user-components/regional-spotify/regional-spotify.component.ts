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
    var optionsGB = {
      title: 'BTS Top Popular Tracks in UK'
    }
    var optionsUS = {
      title: 'BTS Top Popular Tracks in United States'
    }
    var optionsMX = {
      title: 'BTS Top Popular Tracks in Mexico'
    }
    var optionsCA = {
      title: 'BTS Top Popular Tracks in Canada'
    }
    var optionsDE = {
      title: 'BTS Top Popular Tracks in Germany'
    }
    var optionsFR = {
      title: 'BTS Top Popular Tracks in France'
    }
    var optionsZA = {
      title: 'BTS Top Popular Tracks in South Africa'
    }
    var optionsAU = {
      title: 'BTS Top Popular Tracks in Australia'
    }
    
    var optionsKR = {
      title: 'BTS Top Popular Tracks in Korea'
    }
    var optionsJP = {
      title: 'BTS Top Popular Tracks in Japan'
    }
    
    let dataUS = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'US');
    chartHandler.createBarChart(dataUS, "topTracksUS", optionsUS);

    let dataMX = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'MX');
    chartHandler.createBarChart(dataMX, "topTracksMX", optionsMX);

    let dataDE = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'DE');
    chartHandler.createBarChart(dataDE, "topTracksDE", optionsDE);

    let dataGB = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'GB');
    chartHandler.createBarChart(dataGB, "topTracksGB", optionsGB);

    let dataFR = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'FR');
    chartHandler.createBarChart(dataFR, "topTracksFR", optionsFR);

    let dataKR = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'KR');
    chartHandler.createBarChart(dataKR, "topTracksKR", optionsKR);


    let dataJP = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'JP');
    chartHandler.createBarChart(dataJP, "topTracksJP", optionsJP);

    let dataAU = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'AU');
    chartHandler.createBarChart(dataAU, "topTracksAU", optionsAU);

    let dataZA = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity"], 'ZA');
    chartHandler.createBarChart(dataZA, "topTracksZA", optionsZA);
  }

}
