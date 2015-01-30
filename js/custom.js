$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 2000
    })

    $('#googleNav').click(function(url){
    	var userLocation = $('#userLocation').val();
    	if (userLocation == "" || userLocation == null){
    		toastr.error("please enter a location")
    		$('#userLocation').css("background-color","#FF4747");
    		$('#userLocation').css("color","white");
    	}else{
    		$('#userLocation').css("background-color","white");
    		$('#userLocation').css("color","grey");
	    	var win = window.open("http://maps.google.com/maps?saddr=52.071637, -2.696374&daddr='"+userLocation, '_blank');
	  		win.focus();
  		}
  	})

    $(".menuOption1").click(function(){ 
    	var divcount =  $('.menuItems').size(); 
    	alert (divcount); 
    	$(".menuItems").fadeIn().animate({'margin-top':'4%'});
    });
    
});