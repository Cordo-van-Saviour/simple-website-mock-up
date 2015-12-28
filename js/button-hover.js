/**
 * Created by Radovanovic on 28.12.2015.
 */
$( document ).ready(function() {
    $('.product-buttons').hide();
    $('.product-line').on('mouseenter', function() {
        $(this).find('div').stop().fadeIn(250);
    });
    $('.product-line').on('mouseleave', function () {
        $('.product-buttons').stop().fadeOut(250);
    })
});