// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require_tree .


$("#carousel").carousel();


$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: true,
		slideshowSpeed: 6000,
		animationSpeed: 700,
		controlNav: true,
		directionNav: false,
	});
});

$(document).ready(function() {
    fixFlexsliderHeight();
});

$(window).load(function() {
    fixFlexsliderHeight();
});

$(window).resize(function() {
    fixFlexsliderHeight();
});

function fixFlexsliderHeight() {
    // Set fixed height based on the tallest slide
    var sliderHeight = $(window).height() - 170;
    $('.flexslider').each(function(){
        $(this).find('li').css({'max-height' : sliderHeight});
        $(this).find('img').css({'max-height' : sliderHeight});
    });
}