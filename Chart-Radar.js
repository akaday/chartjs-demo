var ourLineChart = document.getElementById('Chart-Radar').getContext('2d');
var myChart = new Chart(ourLineChart, {
    type: 'radar',  // 
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [50, 10, 30, 15, 25, 24],
            label: 'our datasheet',
            fill:true,
            backgroundColor: "cyan",
            borderWidth:1,
            borderColor:"yellow"
        }, {
            data: [25, 35, 40, 25,30, 50],
            label: 'our second datasheet ',
            fill:true,
            backgroundColor: "pink",
            borderWidth:1,
            borderColor:"yellow"
        }
    ]
    },
    options: {
            responsive:false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
    }
});