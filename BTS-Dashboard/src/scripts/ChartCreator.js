google.charts.load('current', {'packages':['corechart', 'geochart'], mapsApiKey:'AIzaSyDrHYlzfwsY3rznx9e6UA6CB4WpqrK1ELY'});
//google.charts.setOnLoadCallback(function(){drawChart});

class ChartCreator{
    async createComboChart(chartData, htmlElement, options){
        var processedData = google.visualization.arrayToDataTable(chartData);
        var comboChart = new google.visualization.ComboChart(document.getElementById(htmlElement));
        comboChart.draw(processedData, options);
    }

    async createBarChart(chartData, htmlElement, options){
        var processedData = google.visualization.arrayToDataTable(chartData);
        var barChart = new google.visualization.BarChart(document.getElementById(htmlElement));
        barChart.draw(processedData, options);
    }
    async createGeoChart(chartData, htmlElement, options){
        var processedData = google.visualization.arrayToDataTable(chartData);
        var geoChart = new google.visualization.GeoChart(document.getElementById(htmlElement));
        geoChart.draw(processedData, options);
    }
}