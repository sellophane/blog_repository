document.registerElement('opis-notki');

function createImageAndContent(divId, imageUrl) {
	var imageWrapper, textWrapper, img, imgUrlString, noteDescription, reg;
	imageWrapper = jQuery('#post-image-wrapper-'+divId);
	textWrapper =  jQuery('#text-'+divId);
	img = jQuery('img',textWrapper)[0];
	if (imageUrl) {
		imgUrlString = imageUrl.replace(/\/s[0-9]{3}\//, '/s220/');
	} else {
		imgUrlString = 'https://googledrive.com/host/0B9L97ZLuYaXnaWRmSWxKOXRWTEk/images/pieczatka.png';
	}
	imageWrapper.html('<img class="post-image-img" src="' + imgUrlString + '" style=" max-width: 220px; max-height: 220px"/>');
	reg = /<opis-notki>[\w|\W]*<\/opis-notki>/;
	noteDescription = reg.test(textWrapper.html()) ? reg.exec(textWrapper.html()).toString() : textWrapper.html();
	textWrapper.html(noteDescription.split(/<[^<>]*>/).join(''));
	jQuery(textWrapper).dotdotdot();
}

$ = jQuery;

$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#menu-secondary-wrap'),
    	navHomeY = nav.offset().top,
    	isFixed = false,
    	$w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
        	nav.addClass('menu-outside-borders');
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed) {
        	nav.removeClass('menu-outside-borders');
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});