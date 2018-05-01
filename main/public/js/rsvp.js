$(function() {
    // Get bounding box for header
    var nav_h = $(".navbar").height();
    console.log(nav_h);
    $("#rsvp-container").css("margin-top", nav_h);

    // Position loader in center of iframe
    var pos = $('iframe')[0].getBoundingClientRect();
    var w = $('iframe').width();
    var h = $('iframe').height();

    var sw = $(".loader").width();
    var sh = $(".loader").height();

    var spin_left = ((w - pos["left"]) / 2) + pos["left"] - (sw / 2);
    var spin_top = ((h - pos["top"]) / 2) + pos["top"] + (sh);

    $(".loader").css({top: spin_top, left: spin_left});

    $('iframe').on("load", function() {
        $('.loader').fadeTo(200, 0);
        $('#rsvp-container').fadeTo(500, 1.0);
        $('iframe').attr("scrolling", "yes");
    });
});
