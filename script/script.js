$(document).ready(function() {
    $('.project-info').css({'display': 'none'});
    $('img').on('mouseenter', function() {
        $('.project-info').slideToggle();
    });
});