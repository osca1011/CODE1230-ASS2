
let opt=  {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Male VS Female Graduates'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Graduates',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 7995,
                color:'#00493e'
            }, {
                name: 'Female',
                y: 13148,
                color: '#FFB6C1'
            }]
        }]
    }


let Pie = Highcharts.chart('pie', opt);

let b2 = document.getElementById('pie-load');
b2.addEventListener('click', () => {
    console.log('pie click;)');
    Pie = Highcharts.chart('pie', opt);
    Pie.redraw();
})
