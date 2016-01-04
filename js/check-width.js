/**
 * Created by Radovanovic on 28.12.2015.
 */
$(document).ready(function(chkWdth) {
    var w_height = $(window).width();
    if (w_height < 860) {
        $('img.dropdown-arr').removeClass('dropdown-arr-active');
        $('img.dropdown-arr:not(".dropdown-arr-active")').closest('li').next().hide();
    }
});