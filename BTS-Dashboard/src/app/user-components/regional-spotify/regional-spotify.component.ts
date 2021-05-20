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
//@VT_VACKINTOSH
  async ngOnInit(){
    let chartHandler = new ChartCreator();
    let dataPipeline = new SpotifyDataPipeline();
    var optionsID = {
      title: 'BTS Top Popular Tracks in Indonesia'
    }
    var optionsUS = {
      title: 'BTS Top Popular Tracks in United States'
    }
    var optionsMX = {
      title: 'BTS Top Popular Tracks in Mexico'
    }
    var optionsPH = {
      title: 'BTS Top Popular Tracks in Philippines'
    }
    var optionsIN = {
      title: 'BTS Top Popular Tracks in India'
    }
    var optionsKR = {
      title: 'BTS Top Popular Tracks in Korea'
    }
    var optionsBR = {
      title: 'BTS Top Popular Tracks in Brazil'
    }
    var optionsTH = {
      title: 'BTS Top Popular Tracks in Thailand'
    }
    
    var optionsMY = {
      title: 'BTS Top Popular Tracks in Malaysia'
    }
    var optionsJP = {
      title: 'BTS Top Popular Tracks in Japan'
    }
    
    let dataUS = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'US');
    chartHandler.createBarChart(dataUS, "topTracksUS", optionsUS);

    let dataID = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'ID');
    chartHandler.createBarChart(dataID, "topTracksID", optionsID);

    let dataMY = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'MY');
    chartHandler.createBarChart(dataMY, "topTracksMY", optionsMY);

    let dataMX = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'MX');
    chartHandler.createBarChart(dataMX, "topTracksMX", optionsMX);

    let dataIN = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'IN');
    chartHandler.createBarChart(dataIN, "topTracksIN", optionsIN);

    let dataKR = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'KR');
    chartHandler.createBarChart(dataKR, "topTracksKR", optionsKR);


    let dataJP = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'JP');
    chartHandler.createBarChart(dataJP, "topTracksJP", optionsJP);

    let dataBR = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'BR');
    chartHandler.createBarChart(dataBR, "topTracksBR", optionsBR);

    let dataTH = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'TH');
    chartHandler.createBarChart(dataTH, "topTracksTH", optionsTH);

    let dataPH = await dataPipeline.getBarChartData("name", "popularity", ["Track", "Popularity on Spotify"], 'PH');
    chartHandler.createBarChart(dataPH, "topTracksPH", optionsPH);
  }

}
