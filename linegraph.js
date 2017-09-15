
let options = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Change in High School Education over time'
    },

    yAxis: {
        title: {
            text: 'Number of Graduates'
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y:,.0f} %</b> {series.name} graduated year 12 in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 2006,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'male',
        data: [41.8, 40.8, 13.5, 9.8, 16.7, 31.3, 53.4, 56.3, 26.6],
        color: '#00493e'
    }, {
        name: 'female',
        data: [66.2, 25.2, 6.2, 9.8, 18.0, 27.9, 43.6, 29.8, 7.4],
        color: '#FFB6C1'
    }]
};



//Line Chart
let Chart = Highcharts.chart('line', options);

let button = document.getElementById('chart-load');
button.addEventListener('click', () => {
    Chart = Highcharts.chart('line', options);
    Chart.redraw();
})
