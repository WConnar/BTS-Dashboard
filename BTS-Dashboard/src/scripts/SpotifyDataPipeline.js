//This class is for arranging the features from the Spotify top tracks and audio data for the charts to use. 
//@VT_VACKINTOSH
class SpotifyDataPipeline{
    constructor(){
        this.getData = firebase.functions().httpsCallable("getDataFromSpotifyDB");
    }
    async getTableData(name, region){
       
        var tableData = new google.visualization.DataTable();
        tableData.addColumn('string', 'Top Tracks in ' + region);
        
        
            
            await this.getData("tracks" + region).then(result => {
                let graphVariable1 = "";
                
               
                result.data.map(data => {
                    graphVariable1 = data.data[name];
                    
                    
                    tableData.addRows([[graphVariable1]]);
                
                });
                
                
            })
            
        return tableData;
    }
    async getBarChartData(axisVariables){
        let chartData = [];
        //let names = [];
        //let pops = [];
        chartData.push(axisVariables);
        
            
            await this.getData("AudioFeatures").then(result => {
                let graphVariable1 = "";
                let graphVariable2 = "";
               
                result.data.map(data => {
                    graphVariable1 = 'acousticness';
                    graphVariable2 = data.data.body['acousticness'];
                    
                    chartData.push([graphVariable1, graphVariable2]);
                    graphVariable1 = 'danceability';
                    graphVariable2 = data.data.body['danceability'];
                    
                    chartData.push([graphVariable1, graphVariable2]);
                    graphVariable1 = 'energy';
                    graphVariable2 = data.data.body['energy'];
                    
                    chartData.push([graphVariable1, graphVariable2]);
                    graphVariable1 = 'liveness';
                    graphVariable2 = data.data.body['liveness'];
                    
                    chartData.push([graphVariable1, graphVariable2]);
                    graphVariable1 = 'speechiness';
                    graphVariable2 = data.data['speechiness'];
                    
                    chartData.push([graphVariable1, graphVariable2]);
                    graphVariable1 = 'valence';
                    graphVariable2 = data.data.body['valence'];
                    
                    chartData.push([graphVariable1, graphVariable2]);
                
                });
                
                
            })
            //chartData[0] = ['Country', names[0], names[1], names[2], names[3], names[4], names[5], names[6], names[7], names[8], names[9]];
            //chartData[1] = [region, pops[0], pops[1], pops[2], pops[3], pops[4], pops[5], pops[6], pops[7], pops[8], pops[9]];
        return chartData;
    }
}