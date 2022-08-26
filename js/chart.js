const ctx = document.getElementById('day-chart');

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Солнечные', 'Облачные', 'Пасмурные'],
        datasets: [{
            label: 'Количество дней',
            data: [83, 87, 193],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'left'
            },
            title: {
                display: true,
                text: 'Количество дней',
                color: 'black',
                align: 'start',
                font: {
                    size: 20,
                    family: 'MS Light'
                }
            }
        },
        maintainAspectRatio: false
    }
});