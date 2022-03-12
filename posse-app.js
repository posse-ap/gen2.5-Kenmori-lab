'use strict';
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(
    function () {
        var data = google.visualization.arrayToDataTable([
            ['', ''],
            ['1', 1],
            ['2', 11],
            ['3', 6],
            ['4', 4],
            ['5', 3],
            ['6', 1],
            ['7', 10],
            ['8', 10],
            ['9', 5],
            ['10', 3],
            ['11', 3],
            ['12', 3],
            ['13', 5],
            ['14', 6],
            ['15', 10],
            ['16', 13],
            ['17', 1],
            ['18', 10],
            ['19', 10],
            ['20', 10],
            ['21', 13],
            ['22', 10],
            ['23', 10],
            ['24', 8],
            ['25', 9],
            ['26', 7],
            ['27', 5],
            ['28', 8],
            ['29', 9],
            ['30', 1],
            ['31', 10],
        ]);

        var options = {
            'width': 600,
            'height': 350,
            legend: 'none',
            // backgroundColor: 'linear-gradient(#0f71bc',
            // backgroundColor: 'linear-gradient(#0f71bc, #3ccfff)',
            //  colors: ['#a52714', '#0000ff', '#ff0000', '#00ff00']
            hAxis: {
                showTextEvery: 2
            },
            vAxis: {
                minValue: 0,
                maxValue: 10,
                ticks: [0, 2, 4, 6, 8, 10]
                // gridlined:{count:0}
            },
            vAxis: {
                gridlines: {
                    color: 'transparent'
                }
            }
            // vAxis:{gridlined:{count:0}}
        
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('gct_sample_column'));
        chart.draw(data, options);
    }
);
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['学習言語', 'Hours per week'],
        ['HTML', 13], ['CSS', 83], ['PHP', 1.4],
        ['JavaScript', 2.3], ['Laravel', 46], ['SQL', 300],
        ['Shell', 38], ['情報処理システム', 5.5]
    ]);


    var options = {
        title: '学習言語',
        pieHole: 0.4,
        legend: 'bottom',
        'width': 250,
        'height': 600,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
        // colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6', '#f6c7b6', '#f6c7b6'],
        // backgroundColor: {
        //     stroke: '#4322c0',
        //     strokeWidth: 3
        // }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
    chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['学習コンテンツ', 'Hours per week'],
        ['N予備校', 8],
        ['ドットインストール', 2],
        ['POSSE課題', 2]
    ]);

    var options = {
        title: '学習コンテンツ',
        pieHole: 0.4,
        legend: 'bottom',
        'width': 250,
        'height': 600,
        'chartArea': { 'width': '100%', 'height': '80%' },
        'legend': { 'position': 'bottom' }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
    chart.draw(data, options);
}