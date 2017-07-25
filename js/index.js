//SCROLL 
jQuery(document).ready(function($) { 
             $(".scroll").click(function(event){        
                 event.preventDefault();
                 $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
            });
         });
                 $(".nav-button").click(function() {
             $("#nav-links").toggle('slow');
         });
//

$('#slideInDown').addClass('animated slideInDown');
$('#fadeIn').addClass('animated fadeIn');