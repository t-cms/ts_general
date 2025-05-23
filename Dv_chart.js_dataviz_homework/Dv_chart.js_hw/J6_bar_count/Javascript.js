    var ctx = document.getElementById('mybarChart').getContext('2d');
        var mybarChart = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: [
                    'Allegany', 'Anne Arundel', 'Baltimore City', 'Baltimore County', 'Calvert', 'Caroline', 'Carroll', 
                    'Cecil', 'Charles', 'Dorchester', 'Frederick', 'Garrett', 'Harford', 'Howard', 'Kent', 'Montgomery', 
                    'Prince George\'s', 'Queen Anne\'s', 'St. Mary\'s', 'Somerset', 'Talbot', 'Washington', 'Wicomico', 'Worcester'
                ],
                datasets: [{
                    label: 'Number of J6 Participants',
                    data: [
                        0, 4, 5, 5, 1, 0, 0, 0, 1, 0, 7, 1, 11, 4, 1, 6, 0, 0, 1, 0, 0, 0, 1, 0
                    ],
                    backgroundColor: [
                        '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00', '#ff0800', '#FFA500', '#228B22',
                        '#0000FF', '#800080', '#FFFF00', '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00',
                        '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00'
                    ],
                    borderColor: [
                        '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00', '#ff0800', '#FFA500', '#228B22',
                        '#0000FF', '#800080', '#FFFF00', '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00',
                        '#ff0800', '#FFA500', '#228B22', '#0000FF', '#800080', '#FFFF00'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Number of J6 Participants by MD County',
                        font: {
                            size: 18
                        }
                    },
                    subtitle: {
                        display: true,
                        text: 'A breakdown of J6 Participant Count across various MD counties'
                    },
                    legend: {
                        display: true, 
                        labels: {
                            boxWidth: 0, 
                            padding: 20,
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });