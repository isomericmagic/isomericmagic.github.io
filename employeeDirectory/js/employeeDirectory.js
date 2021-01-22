$(document).ready(function () {
  function toTitleCase(str)
  {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  //$.getJSON("https://randomuser.me/api/?results=12", function getEmployees (data) {
  //use fetch instead of jquery for the API request
  fetch("https://randomuser.me/api/?results=12")
    .then(response => response.json())
    .then( data => {
    var employeeNumber = 0;
    $.each( data.results, function (i, employee) {
      //var employeeAddress = employee.location.street + " " + employee.location.city + ", " + employee.location.state + ' ' + employee.location.postcode;
      var employeeAddress = employee.location.city + ", " + employee.location.state + ' ' + employee.location.postcode;
      employeeAddress = toTitleCase(employeeAddress);
      employeeCity = toTitleCase(employee.location.city);
      employeeName = toTitleCase(employee.name.first + ' ' + employee.name.last);
      employeeBirthday = employee.dob.date.slice(0,10);
      var employeeHTML = '<div class="box" data-featherlight="#mylightbox' + employeeNumber.toString() + '">';
      employeeHTML += '<div class="photo" style="background-image: url(\'' + employee.picture.large + '\');"></div>';
      employeeHTML += '<div class="student-info">';
      employeeHTML += '<p class="name">'+ employeeName + '</p>';
      employeeHTML += '<p class="email">'+ employee.email +'</p>';
      employeeHTML += '<p class="city">'+ employeeCity +'</p>';
      employeeHTML += '</div></div>';
      employeeHTML += '<div hidden class="pop-up-box" id="mylightbox' + employeeNumber.toString() + '">';
      employeeHTML += '<div class="pop-up-photo" style="background-image: url(\'' + employee.picture.large + '\');"></div>';
      employeeHTML += '<div class="pop-up-student-info">';
      employeeHTML += '<br>';
      employeeHTML += '<p class="pop-up-name">'+ employeeName + '</p>';
      employeeHTML += '<p class="pop-up-email">'+ employee.email +'</p>';
      employeeHTML += '<p class="pop-up-city">'+ employeeCity +'</p>';
      employeeHTML += '<p class="pop-up-line">_________________________________</p>';
      employeeHTML += '<p class="pop-up-details">'+ employee.cell +'</p>';
      employeeHTML += '<p class="pop-up-details">'+ employeeAddress +'</p>';
      employeeHTML += '<p class="pop-up-details">Birthday: '+ employeeBirthday +'</p>';
      employeeHTML += '</div></div>';
      $('#primary-container').append(employeeHTML);
      employeeNumber ++;
    });
  });
});