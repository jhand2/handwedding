$(function() {
    var height = $(".navbar").height();
    var fields = $(".form-group").length;
    $(".container").css("margin-top", height);

    $("#rsvp_submit").submit(function(e) {
        e.preventDefault();
        console.log(submit);
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
        var nchildren = $("#rsvp_submit").children().length;
        var i = active.index() + 1;
        active.removeClass("active");
        var selector = ".form-group:nth-child(" + (i + 1) + ")";
        var nxt = $(selector);
        if (nxt.length > 0) {
            nxt.addClass("active");
            $(window).scrollTop(Math.max(0, nxt.offset().top - height - height));
            if ((i + 1) == nchildren) {
                $(this).text("Submit");
            } else {
                $(this).text("Next");
            }
        }
    });
})
