var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            { 
                data: [
                    {x: 71.5, y: 3678}, // China
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.7)",  // Unique color for China
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 61.1, y: 2548}, // India
                ],
                label: "India",
                borderColor: "#3c3cba",
                backgroundColor: "rgb(60,186,159,0.7)",  // Unique color for India
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 77.1, y: 45986}, // United States
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor: "rgb(255,165,0,0.7)",  // Unique color for US
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 68.3, y: 5878}, // Indonesia
                ],
                label: "Indonesia",
                borderColor: "#ff4500",
                backgroundColor: "rgb(255,69,0,0.7)",  // Unique color for Indonesia
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 71.9, y: 11461}, // Brazil
                ],
                label: "Brazil",
                borderColor: "#09a746",
                backgroundColor: "rgb(9,167,70,0.7)",  // Unique color for Brazil
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 65.4, y: 13173}, // Russia
                ],
                label: "Russia",
                borderColor: "#e74c3c",
                backgroundColor: "rgb(231,76,60,0.7)",  // Unique color for Russia
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 62.6, y: 3366}, // Pakistan
                ],
                label: "Pakistan",
                borderColor: "#2ecc71",
                backgroundColor: "rgb(46,204,113,0.7)",  // Unique color for Pakistan
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 65.8, y: 1632}, // Bangladesh
                ],
                label: "Bangladesh",
                borderColor: "#3498db",
                backgroundColor: "rgb(52,152,219,0.7)",  // Unique color for Bangladesh
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            },
            { 
                data: [
                    {x: 81.1, y: 32193}, // Japan
                ],
                label: "Japan",
                borderColor: "#9b59b6",
                backgroundColor: "rgb(155,89,182,0.7)",  // Unique color for Japan
                borderWidth: 2,
                pointRadius: 10 // Increased point size
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0, // Minimum value for the Y-axis
                title: {
                    display: true,
                    text: 'GDP per Capita'
                },
                ticks: {
                    suggestedMin: 1000, // Adjust the minimum value for better scaling
                    beginAtZero: true
                }
            },
            x: {
                min: 0, // Minimum value for the X-axis
                title: {
                    display: true,
                    text: 'Life Expectancy'
                },
                ticks: {
                    suggestedMin: 10, // Adjust the minimum value for better scaling
                    beginAtZero: true
                }
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Life Expectancy vs. GDP per Capita for Different Countries',  // Chart title
                font: {
                    size: 20
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
            subtitle: {
                display: true,
                font: {
                    size: 14
                },
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        }
    }
});
