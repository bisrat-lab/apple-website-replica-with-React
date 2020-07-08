import $ from 'jquery';

if ($(window).width() <= 768){	
    $('.footer-links-wrapper').addClass("someClass");
}else{
    $('.footer-links-wrapper').removeClass("someClass");
}
$(window).on('resize', function(event){
    if ($(window).width() <= 768){	
          $('.footer-links-wrapper').addClass("someClass");
    }else{
          $('.footer-links-wrapper').removeClass("someClass");
          $('.footer-links-wrapper ul').show();
    }	
});

// Footer collapse functionality 
$(document).on("click", ".someClass h3", function(){
    $(this).next('ul').slideToggle();
    $(this).toggleClass("expanded");
    
});

