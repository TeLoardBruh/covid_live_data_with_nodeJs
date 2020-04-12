const data_confirmed = document.querySelector('#case_confirmed');
const data_recovered = document.querySelector('#case_recovered');
const data_death = document.querySelector('#case_death');
const ctx = document.getElementById('myChart').getContext('2d');


// data1.textContent = 'agag' ;

fetch('https://covid19.mathdro.id/api/countries/cambodia').then(res => {
    (res.json().then((data) => {
        if (data.err) {
            para_1.textContent = data.err;
            console.log(data.err);
        } else {

            // console.log(data);
            data_confirmed.textContent = "Confirmed : " + data.confirmed.value;
            data_recovered.textContent = "Recovered : " + data.recovered.value;
            data_death.textContent = "Death : " + data.deaths.value;
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [data_confirmed.textContent, data_recovered.textContent, data_death.textContent],
                    datasets: [{
                        label: '# of Cases',
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
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
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    }));
});