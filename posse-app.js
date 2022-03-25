'use strict';
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(columnChart)
    function columnChart() {
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
            width: '100%',
            height: '80%',
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

        var chart = new google.visualization.ColumnChart(document.getElementById('columnChart'));
        chart.draw(data, options);
    };
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
        title: { position: 'none'  } ,
        pieHole: 0.4,
        legend: {position: 'none'},
        width: '100%',
        height: '80%',
        chartArea: { 'width': '100%', 'height': '80%' },
        // 'legend': { 'position': 'bottom' }
        colors: ['#0142E5', '#2270B9', '#4EBEDC', '#5CDBF9', '#B29DEF', '#A5A1F2', '#4C43E8','#4B43E8'],
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
        title: { position: 'none'  } ,
        pieHole: 0.4,
        legend: { position: 'none'  } ,
        width: '100%',
        height: '80%',
        chartArea: { 'width': '100%', 'height': '80%' },
        colors: ['#0142E5', '#4EBEDC', '#93BDF1'],
        // 'legend': { 'position': 'bottom' }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
    chart.draw(data, options);
}

window.onresize = function(){
    
    columnChart();
    drawChart1();
    drawChart2();
    
}


let submitButton = document.getElementById('submitButton')
let modalContent = document.getElementById('modal-content')
let loading = document.getElementById('loading')
let complete = document.getElementById('complete')

submitButton.addEventListener('click',() => {
modalContent.classList.add("none")
loading.classList.remove("none")
// console.log("a")
setTimeout(() => {
    loading.classList.add("none")
    complete.classList.remove("none")
    console.log("Execution 5sec"); // Execution 5sec
}, 5000);
},false)

// let calender = document.getElementById('calender')
// calender.datepicker();

// $('#sandbox-container input').datepicker({
// });
flatpickr('.flatpickr');