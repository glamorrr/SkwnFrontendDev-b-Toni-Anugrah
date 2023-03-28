const xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

new Chart('myChart', {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [
      {
        data: [2200000, 4800000, 3000000, 4000000, 5000000],
        borderColor: '#3b82f6',
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            // Abbreviate the millions
            callback: function (value, index, values) {
              return value / 1e6 + 'M';
            },
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});
