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
    var optionsAudio = {
      title: 'Dynamite Audio Features',
      width: 1500,
      height: 500,
    }
    var optionsID = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Indonesia'
    }
    var optionsUS = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in United States'
    }
    var optionsMX = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Mexico'
    }
    var optionsPH = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Philippines'
    }
    var optionsIN = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in India'
    }
    var optionsKR = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Korea'
    }
    var optionsBR = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Brazil'
    }
    var optionsTH = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Thailand'
    }
    
    var optionsMY = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Malaysia'
    }
    var optionsJP = {
      showRowNumber: true,
      title: 'BTS Top Popular Tracks in Japan'
    }

    let dataAudio = await dataPipeline.getBarChartData(["Feature", "Value"]);
    chartHandler.createBarChart(dataAudio, "AudioFeatures", optionsAudio);
    

    let dataUS = await dataPipeline.getTableData("name", 'US');
    chartHandler.createTable(dataUS, "topTracksUS", optionsUS);

    let dataID = await dataPipeline.getTableData("name", 'ID');
    chartHandler.createTable(dataID, "topTracksID", optionsID);

    let dataMY = await dataPipeline.getTableData("name", 'MY');
    chartHandler.createTable(dataMY, "topTracksMY", optionsMY);

    let dataMX = await dataPipeline.getTableData("name", 'MX');
    chartHandler.createTable(dataMX, "topTracksMX", optionsMX);

    let dataIN = await dataPipeline.getTableData("name", 'IN');
    chartHandler.createTable(dataIN, "topTracksIN", optionsIN);

    let dataKR = await dataPipeline.getTableData("name", 'KR');
    chartHandler.createTable(dataKR, "topTracksKR", optionsKR);


    let dataJP = await dataPipeline.getTableData("name", 'JP');
    chartHandler.createTable(dataJP, "topTracksJP", optionsJP);

    let dataBR = await dataPipeline.getTableData("name", 'BR');
    chartHandler.createTable(dataBR, "topTracksBR", optionsBR);

    let dataTH = await dataPipeline.getTableData("name", 'TH');
    chartHandler.createTable(dataTH, "topTracksTH", optionsTH);

    let dataPH = await dataPipeline.getTableData("name", 'PH');
    chartHandler.createTable(dataPH, "topTracksPH", optionsPH);
  }

}
