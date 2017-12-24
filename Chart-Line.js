var ourLineChart = document.getElementById('Chart-Line').getContext('2d');
var myChart = new Chart(ourLineChart, {
    type: 'line',  // 
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [50, 10, 30, 15, 25, 24],
            label: 'our datasheet',
            fill:true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth:1,
            borderColor:"blue"
        }]
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