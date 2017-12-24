var ourLineChart = document.getElementById('Chart-Bubble').getContext('2d');
var myChart = new Chart(ourLineChart, {
    type: 'bubble',  // 
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [50, 10, 30, 15, 25, 24],
            label: 'our datasheet',
            fill:true,
            backgroundColor: [
                "red", "brown", "pink", "green", "cyan", "blue","black"
              ],
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