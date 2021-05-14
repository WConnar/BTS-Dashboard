class SpotifyDataPipeline{
    constructor(){
        this.getData = firebase.functions().httpsCallable("getDataFromSpotifyDB");
    }

    async getBarChartData(name, popularity, axisVariables, region){
        let chartData = [];
        //let names = [];
        //let pops = [];
        chartData.push(axisVariables);
        
            
            await this.getData("tracks" + region).then(result => {
                let graphVariable1 = "";
                let graphVariable2 = "";
               
                result.data.map(data => {
                    graphVariable1 = data.data[name];
                    graphVariable2 = data.data[popularity];
                    //console.log('GB', graphVariable1, graphVariable2);
                    //names.push(graphVariable1);
                    //pops.push(graphVariable2);
                    chartData.push([graphVariable1, graphVariable2]);
                
                });
                
                
            })
            //chartData[0] = ['Country', names[0], names[1], names[2], names[3], names[4], names[5], names[6], names[7], names[8], names[9]];
            //chartData[1] = [region, pops[0], pops[1], pops[2], pops[3], pops[4], pops[5], pops[6], pops[7], pops[8], pops[9]];
        return chartData;
    }
}