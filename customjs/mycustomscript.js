//Creates an alert on button click 
$(document).ready(function() {
    $('#buttonevent').on('click', function () {
        alert('Unfortunately this feature is currently down for maintenance and will return better than ever shortly. We apologize for any inconvenience this may cause and wish you a wonderful day!')
    });
});

//for the email
$(function () {
    $('.btnSendEmail').click(function (event) {
      var email = 'info@metrodefender.org';
      var subject = 'Information';
      var emailBody = 'Hello, ';
      window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    });
  });