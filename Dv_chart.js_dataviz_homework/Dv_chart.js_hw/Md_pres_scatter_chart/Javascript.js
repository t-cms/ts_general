var ctx = document.getElementById('myscatterchart').getContext('2d');
var myscatterChart = new Chart(ctx, {
    type: 'scatter', // Scatter chart type
    data: {
        datasets: [{
            label: 'County Voting Data',
            data: [
                { x: 9231, y: 22141, label: 'Allegany' },
                { x: 171945, y: 128892, label: 'Anne Arundel' },
                { x: 195109, y: 27984, label: 'Baltimore City' },
                { x: 249958, y: 149560, label: 'Baltimore County' },
                { x: 23438, y: 29361, label: 'Calvert' },
                { x: 4860, y: 11053, label: 'Caroline' },
                { x: 36867, y: 62273, label: 'Carroll' },
                { x: 17628, y: 33871, label: 'Cecil' },
                { x: 63454, y: 26145, label: 'Charles' },
                { x: 6954, y: 9390, label: 'Dorchester' },
                { x: 82409, y: 68753, label: 'Frederick' },
                { x: 3456, y: 11983, label: 'Garrett' },
                { x: 62453, y: 83050, label: 'Harford' },
                { x: 124764, y: 49425, label: 'Howard' },
                { x: 5251, y: 5561, label: 'Kent' },
                { x: 386581, y: 112637, label: 'Montgomery' },
                { x: 347038, y: 45008, label: 'Prince George\'s' },
                { x: 11273, y: 20200, label: 'Queen Anne\'s' },
                { x: 23531, y: 33582, label: 'Saint Mary\'s' },
                { x: 4054, y: 5805, label: 'Somerset' },
                { x: 11119, y: 11125, label: 'Talbot' },
                { x: 27260, y: 44054, label: 'Washington' },
                { x: 21513, y: 24065, label: 'Wicomico' },
                { x: 12431, y: 19632, label: 'Worcester' }
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1, 
            radius: 5
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Democratic Votes'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Republican Votes'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: '2020 MD Presidential Election Votes by County in Maryland',
                font: {
                    size: 24, // Increase the title font size
                    weight: 'bold'
                },
            },
            subtitle: {
                display: true,
                text: 'Comparing the Democratic vs. Republican Votes Across Maryland Counties',
                font: {
                    size: 16, // Subtitle font size remains smaller
                    weight: 'normal'
                },
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        // Display county name, Democratic votes, and Republican votes in the tooltip
                        var county = tooltipItem.raw.label;
                        var demVotes = tooltipItem.raw.x;
                        var repVotes = tooltipItem.raw.y;
                        return county + ': Dem = ' + demVotes + ', Rep = ' + repVotes;
                    }
                }
            },
            legend: {
                labels: {
                    usePointStyle: true // This makes the legend items appear as circles
                }
            }
        }
    }
});
