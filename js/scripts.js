$(document).ready(function() {

  var userName = '';

  $('#username').on('keypress', function() {
    console.log('on function fired')
    userName = $('#username').val();
    console.log('The username is ' + userName);
    $('#username-displayed').text(userName);
  })

}); // End document.ready function
$(document).ready(function(){

    /* For parallaxing images */
    $('.parallax').parallax();

    /* To scroll to a section from navbar */
    $('.scrollspy').scrollSpy();
});