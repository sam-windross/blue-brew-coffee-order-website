var height = 0;
var haveScrolled = false;
/*$( document ).ready(function() {
    height = $('#screen1').outerHeight();
    if ($("body").width() < 800) {
$('.waypoint').css({"padding-left":"0vw"});
        alert("triggered");
}
});*/

$( window ).scroll(function() {
    if (haveScrolled == false) {
        $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
        });
        $("#screen1").animate({height: "1vh"}, 2000);
        setTimeout(function() {
            $("#screen1").hide();
            $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});
        }, 2000);
        
    }
    haveScrolled = true;
});