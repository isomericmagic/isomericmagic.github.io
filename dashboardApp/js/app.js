//main js file
document.getElementById('closebtn').onclick = function () {
	let notificationBtn = document.getElementById('green-dot');
  this.parentElement.style.visibility='hidden';
  notificationBtn.style.visibility='hidden';
};

//setup line chart
var ctx = document.getElementById('line-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
    datasets: [{
      label: '',
      data: [0,750,1250,1000,1500,2000,1500,1750,1250,1750,2250,1750,2250],
      backgroundColor: "rgba(182, 149, 192, .5)",
      pointRadius: 7,
      pointBackgroundColor: "white",
      pointBorderColor: "#7F7FBB",
      pointBorderWidth: 2
    }]
  },
  options: {
	    legend: {
	        display: false
	    },
	    tooltips: {
	        callbacks: {
	           label: function(tooltipItem) {
	                  return tooltipItem.yLabel;
	           }
	        }
	    },
	    elements: {
        line: {
          tension: 0, // disables bezier curves
        }
      },
      responsive: true,
      maintainAspectRatio: false,
	}
});

//setup bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["S","M","T","W","T","F","S"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#7b72b6","#7b72b6","#7b72b6","#7b72b6","#7b72b6","#7b72b6","#7b72b6"],
          data: [75,100,175,125,225,200,100]
        }
      ]
    },
    options: {
      legend: { display: false },
      responsive: true,
      maintainAspectRatio: false
    }
});

//setup doughnut chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Phones","Tablet","Desktop"],
      datasets: [
        {
          backgroundColor: ["#77b8c9", "#8aca93","#7b72b6"],
          data: [2477,1851,5298]
        }
      ]
    },
    options: {
    	legend: { display: true, position: "right" },
    	responsive: true,
      maintainAspectRatio: false
    }
});

//setup submit click / prevent default / add messaging
document.getElementById('send-button').addEventListener("click", function(event){
    event.preventDefault()
    let userField = document.getElementById('search-user-field');
    let messageField = document.getElementById('message-user-field');
    if (userField.value === '' || messageField.value === '') {
      alert("ERROR: User and Message Field Can't Be Empty!");
    } else {
      alert('Message Sent!');
    }
  userField.value = ''
  messageField.value = ''
});

