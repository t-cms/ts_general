
        var ctx = document.getElementById('myPieChart').getContext('2d');
        var myPieChart = new Chart(ctx, {
            type: 'pie',  // Pie chart type
            data: {
                labels: ['Democratic Wins', 'Republican Wins'], // Labels for slices
                datasets: [{
                    data: [10, 14], // Data: number of counties won by each party (Democrats: 19, Republicans: 6)
                    backgroundColor: ['blue', 'red'], // Colors: blue for Democrats, red for Republicans
                    hoverBackgroundColor: ['#007bff', '#dc3545'] // Hover colors for interactivity
                }]
            },
             options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '2020 MD Counties Presidential Election Breakdown',
                font: {
                    size: 18
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        if (tooltipItem.label === 'Democratic Wins') {
                            return 'Democratic Wins: 10 counties (won larger urban areas with higher population density)';
                        } else if (tooltipItem.label === 'Republican Wins') {
                            return 'Republican Wins: 14 counties (won more rural areas with fewer people)';
                        } else {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' counties';
                        }
                    }
                }
            }
        }
    }
});