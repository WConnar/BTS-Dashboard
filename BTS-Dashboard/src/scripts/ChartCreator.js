google.charts.load('current', {'packages':['corechart']});
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
}