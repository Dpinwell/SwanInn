$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 2000
    })


    var tester = $('.borderStyle').height() * 0.70 + "px"

    $('#menuText').slimScroll({
        height: tester,
        color: '#000000'
    });


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

    $('.menuOption').on('click', function(){ 
        var menuType = $(this).attr('data-menuitemId');
        var subType = $(this).attr("class");
        if(subType == "menuOption sub"){
        }else{
          $(".menuItems").hide();
          $(".menusubList ul li").hide().css('margin-top','0%'); 
        }
        gettext(menuType);
    });

  function gettext(menuType){
    if (menuType == "Mains") {
      $(".menusubList ul li").css('display','inline-block').fadeIn().animate({'margin-top':'2%'}); 
    }else{
      $("#menuText").load("/files/"+menuType+".txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          $(".menuItems").show().fadeIn().animate({'margin-top':'3%'}); 
            $(".menuItems").on('mouseover', function() {
                var optionId = $(this).attr('id');
                $('#'+optionId).tooltipster({
                  content: $('<span><img src="/images/'+optionId+'.jpg"/></span>')
                });
              });
        if(statusTxt == "error")
            toastr.error("Error: Unable to load Menu Options " + xhr.status + ": " + xhr.statusText);
      });
    }
  
  }


});
$(window).resize(function() {
     changesize();    
});

function changesize(){
    var changeHeight = $('.borderStyle').height() * 0.5 + "px"
    $('#menuText').height(changeHeight)
}

$(window).resize(function() {
    var changeHeight = $('.borderStyle').height() * 0.25 + "px"
    //var changeWidth = $('.borderStyle').width() * 0.10 + "px"    
    $('.item').height(changeHeight)
    $('#maincarousel').height(changeHeight) 
    $('.maindisplay').height(changeHeight)
    //$('#maincarousel').height(changeWidth) 
    //$('.maindisplay').height(changeWidth)

});