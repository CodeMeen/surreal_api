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