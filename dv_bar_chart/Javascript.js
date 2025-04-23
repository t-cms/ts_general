  var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
                datasets: [{
                    label: 'GDP per Capita',
                    data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
                    backgroundColor: [
                        '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'GDP per Capita by Region',
                        font: {
                            size: 18
                        }
                    },
                    subtitle: {
                        display: true,
                        text: 'Average GDP per Capita for various regions'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
            },
        });