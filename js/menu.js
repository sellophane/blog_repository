jQuery.noConflict();
jQuery(function(){ 
	jQuery('ul.menu-primary').superfish({ 
		animation: {opacity:'show'},
		autoArrows:  true,
        dropShadows: false, 
        speed: 200,
        delay: 800
    });
});
jQuery(function(){ 
	jQuery('ul.menu-secondary').superfish({ 
		animation: {opacity:'show'},
		autoArrows:  true,
        dropShadows: false, 
        speed: 200,
        delay: 800
    });
});
jQuery(function(){
      jQuery('.menu-secondary-wrap').load('https://googledrive.com/host/0B9L97ZLuYaXnaWRmSWxKOXRWTEk/second-header.html'); 
});