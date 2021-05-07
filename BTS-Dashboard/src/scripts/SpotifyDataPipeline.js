class SpotifyDataPipeline{
    constructor(){
        this.getData = firebase.functions().httpsCallable("getDataFromSpotifyDB");
    }

    async getBarChartData(name, popularity, axisVariables){
        let chartData = [];
        
        chartData.push(axisVariables);
        
        
            
            await this.getData("tracks").then(result => {
                let graphVariable1 = "";
                let graphVariable2 = "";
                result.data.map(data => {
                    graphVariable1 = data.data[name];
                    graphVariable2 = data.data[popularity];
                    console.log(data);
                    chartData.push([graphVariable1, graphVariable2]);
                });
                
                
            })
        
        return chartData;
    }
}