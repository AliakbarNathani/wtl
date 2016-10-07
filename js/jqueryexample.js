$(document).ready(function(){
   
    $('#one').on('click',function(){
      
        $(this).html("<b>You Just Clicked Me</b>");
    });
    
    
    $('#two').on('click',function(){
      
        $('#four').slideToggle();
    });
    
    $('#three').on('click',function(){
      
        $(this).hide(600);
        $(this).show(500);
    });
    
    $('#f1').on('click',function(){
      
        $(this).fadeOut(600);
        $(this).fadeIn(600);
    });
    
    
    $('#f2').on('click',function(){
      
        $(this).fadeTo(1000,0.2);
    });
    
    
});