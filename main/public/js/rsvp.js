$(function() {
    var height = $(".navbar").height();
    var fields = $(".form-group").length;
    $(".container").css("margin-top", height);

    $("#rsvp_submit").submit(function(e) {
        e.preventDefault();
        //d = {
            //"name": $("#name").val()
        //}

        //$.ajax({
            //url: "/api/rsvp",
            //type: "post",
            //data: JSON.stringify(d),
            //processData: false,
            //contentType: "application/json"
        //}).then(function() {
            //$("#name").val("");
            //$("input").blur();
        //});
    });

    $("#submit").on("click", function(e) {
        var active = $(".active");
        var i = active.index() + 1;
        active.removeClass("active");
        var selector = ".form-group:nth-child(" + (i + 1) + ")";
        var nxt = $(selector);
        nxt.addClass("active");
        $(window).scrollTop(Math.max(0, nxt.offset().top - height - height));
    });
})
