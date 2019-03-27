//Creates an alert on button click 
$(document).ready(function() {
    $('#buttonevent').on('click', function () {
        alert('Unfortunately this feature is currently down for maintenance and will return better than ever shortly. We apologize for any inconvenience this may cause and wish you a wonderful day!')
    });
});

//for the email
$(document).ready(function(){
    $('.buttonemail').on('click',function(){
       window.location.href = "mailto:address@dmail.com"; 
    });
});
