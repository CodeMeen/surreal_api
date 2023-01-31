$(document).ready(function(){

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header_pack").addClass("header_scrolled");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header_pack").removeClass("header_scrolled");
        }
    });






    $('#menu_btn').on('click', function(){

    $('.sidenav').removeClass('closednav');
    $('.sidenav').addClass('openednav');
   
    });
   // close modal on clicking close button
   $('.sidenav .each_menupack').find('.close').on('click',function(){

    $('.sidenav').removeClass('openednav');
    $('.sidenav').addClass('closednav');
  
   });
   
   // close modal on click outside at anywhere
   $(document).on('click',function(e){
     if(!(($(e.target).closest(".sidenav").length > 0 ) || ($(e.target).closest("#menu_btn").length > 0))){
        $('.sidenav').removeClass('openednav');
        $('.sidenav').addClass('closednav');
    }
   });






 });

 let countDownDate=new Date('Feb 13 2023 00:00:00 GMT+0100').getTime();
 let days
 let hours
 let minutes
 let seconds

 let countdown


 myfunc = setInterval(async ()=> {

    var now = new Date().getTime();
    var timeleft =countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
 days= days + " d "
 hours= hours + " h "
 minutes = minutes + " m "
 seconds = seconds + " s "

 $('#days').html(days)
 $('#hours').html(hours)
 $('#mins').html(minutes)
 $('#secs').html(seconds)

  countdown = true;
 

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);

       countdown = !countdown;

    }
}, 1000);

