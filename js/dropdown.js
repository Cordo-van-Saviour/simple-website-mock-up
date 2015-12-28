$( document ).ready(function() {
    //$('.toggled-options').hide();
	$('img.dropdown-arr').on('click', function() {
	    $(this).toggleClass('dropdown-arr-active');
	    $(this).closest('li').next().slideDown(500);
		$('img.dropdown-arr:not(".dropdown-arr-active")').closest('li').next().slideUp(500);
	    })
});

$(document).ready(function() {
	$('.hamburger').on('click', function() {
	$('.mobile-links').slideDown(600)
	});

	$('.close').on('click', function() {
		$('.mobile-links').slideUp(600);
	});
});