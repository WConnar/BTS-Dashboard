//KD
/**
 * The purpose of this class is to pull data from twitter, which can then be used to create graphs
 */
class TwitterDataPipeline{
    constructor(){
        this.getData = firebase.functions().httpsCallable("getDataFromDB");
    }

    /**
     * Pulls data from firebase for the past 7 days and returns that data in a 2d array.
     * @param key1 The first key/json field data will be pulled from
     * @param key2 The second key/json field data will be pulled from
     * @param axisVariables The names that will be given to the axes of the graph the data will be used on
     * @returns Returns a 2d array that is compatible for use when creating a combo chart from google's google charts package
     */
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

    /**
     * Pulls data from firebase for the past 7 days and returns that data in an array.
     * @param key The \key/json field data will be pulled from
     * @param axisVariables The names that will be given to the axes of the graph the data will be used on
     * @returns Returns a 2d array that is compatible for use when creating a bar chart from google's google charts package
     */
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

