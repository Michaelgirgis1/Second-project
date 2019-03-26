/*global $, window*/

$(function () {
	
	'use strict';
	
	// Trigger nice scroll
	
	$("html").niceScroll({
		
		cursorcolor: '#f7600e',
		cursorwidth: '10px',
		cursorborder: '1px solid #f7600e',
		cursorborderradius: 0
	});
	
	// adjust header height 
	
	$('.header').height($(window).height());
	
	$('.header .intro').css('paddingTop', ($(window).height() - $('.header .intro').height()) / 2);
	
	//scroll to features 
	
	$('.header .arrow i').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('.features').offset().top
			
		}, 1000);
	});
	
	// scroll to our team
	
	$('.header .hire').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('.our-team').offset().top
			
		}, 1500);
	});
	
	// scroll to our work
	
	$('.header .work').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('.our-work').offset().top
			
		}, 1000);
	});

	//show the items hidden inour work
	
	$('.our-work .show').click(function () {

		$('.our-work .hidden').fadeIn(1000);
		$('body').css("height", "5400px");
	});
	
	// make silder 
	
	var leftArrow = $('.testim .fa-chevron-left'),
		rightArrow = $('.testim .fa-chevron-right');
	
	function checkClients() {
		if ($('.test-info:first').hasClass('active')) {
			
			leftArrow.fadeOut();
			
		} else {
			
			leftArrow.fadeIn();
		}
		if ($('.test-info:last').hasClass('active')) {
			
			rightArrow.fadeOut();
			
		} else {
			
			rightArrow.fadeIn();
		}
	}
	
	checkClients();
	
	$('.testim i').click(function () {
		if ($(this).hasClass('fa-chevron-right')) {
			$('.testim .active').fadeOut(500, function () {
				
				$(this).removeClass('active').next('.test-info').addClass('active').fadeIn(500);
				
				checkClients();
			});
			
		} else {
			$('.testim .active').fadeOut(500, function () {
				
				$(this).removeClass('active').prev('.test-info').addClass('active').fadeIn(500);
				
				checkClients();
			});
		}
	});		  
});