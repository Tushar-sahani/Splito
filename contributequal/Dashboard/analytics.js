var xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var yValues = [30,90,60,48,100,130,110,75,155];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 30, max:200}}],
    }
  }
});


var xValues2 = ["Tushar", "Avinash", "Andril"];
var yValues2 = [150, 210, 160, 24];
var barColors = ["red", "green","blue"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors,
      data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true
    }
  }
});