
        var ctx = document.getElementById('myPieChart').getContext('2d');
        var myPieChart = new Chart(ctx, {
            type: 'pie',  // Pie chart type
            data: {
                labels: ['Democratic Wins', 'Republican Wins'], // Labels for slices
                datasets: [{
                    data: [19, 6], // Data: number of counties won by each party (Democrats: 19, Republicans: 6)
                    backgroundColor: ['blue', 'red'], // Colors: blue for Democrats, red for Republicans
                    hoverBackgroundColor: ['#007bff', '#dc3545'] // Hover colors for interactivity
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: ' 2o20 MD Counties Presidential Election Results',
                        font: {
                            size: 18
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + ' counties';
                            }
                        }
                    }
                }
            }
        });
    