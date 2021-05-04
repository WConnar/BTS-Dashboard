class TwitterDataPipeline{
    constructor(){
        this.getData = firebase.functions().httpsCallable("getDataFromDB");
    }

    async getComboChartData(key1, key2, axisVariables){
        let chartData = [];
        let dateRange = 7;
        chartData.push(axisVariables);
        let currDate = new Date();
        let presentDate;
        let dateData;
        for(let index = 0; index<dateRange; index++){
            presentDate = new Date(currDate.getTime() - (index * 24 * 60 * 60 * 1000));
            dateData = presentDate.getFullYear() + "-" + (presentDate.getMonth()+1) + "-" + presentDate.getDate();
            await this.getData(dateData).then(result => {
                let graphVariable1 = 0;
                let graphVariable2 = 0;
                result.data.map(data => {
                    graphVariable1 += data.data[key1];
                    graphVariable2 += data.data[key2];
                });
                //activity = Math.round(activity/result.data.length);
                chartData.push([dateData, graphVariable1, graphVariable2]);
            })
        }
        return chartData;
    }

    async getBarChartData(key, axisVariables){
        let chartData = [];
        let dateRange = 7;
        chartData.push(axisVariables);
        let currDate = new Date();
        let presentDate;
        let dateData;
        for(let index = 0; index<dateRange; index++){
            presentDate = new Date(currDate.getTime() - (index * 24 * 60 * 60 * 1000));
            dateData = presentDate.getFullYear() + "-" + (presentDate.getMonth()+1) + "-" + presentDate.getDate();
            await this.getData(dateData).then(result => {
                let graphVariable = 0;
                result.data.map(data => {
                    graphVariable += data.data[key];
                });
                //activity = Math.round(activity/result.data.length);
                chartData.push([dateData, graphVariable]);
            })
        }
        return chartData;
    }
}

