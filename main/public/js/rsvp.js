$(function() {
    var height = $(".navbar").height();
    var fields = $(".form-group").length;
    $(".container").css("margin-top", height);

    $("#add-guest").on("click", function(e) {
        $("#guest-container").append(
            '<div>' +
                '<input class="guest-row form-control"></input>' +
                '<i class="fa fa-times-circle fa-2x" aria-hidden="true"></i>' +
            '</div>'
        );

        $(".fa-times-circle").on("click", function(e) {
            var i = $(this).parent().index();
            $(this).parent().remove();
        });
    });

    var submit_data = function() {
        var going_selected = $('input[name=optradio]:checked', '#rsvp_submit').val();
        var guests = [];
        $(".guest-row").each(function(i) {
            guests.push($(this).val());
        });

        var d = {
            "name": $("#name").val(),
            "attending": going_selected == "true",
            "guests": guests
        }

        console.log(d);

        $.ajax({
            url: "/api/rsvp",
            type: "post",
            data: JSON.stringify(d),
            processData: false,
            contentType: "application/json"
        }).then(function() {
            $("#name").val("");
            $("input").blur();
            $("#guest-container").empty();
        });

    }

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
        } else {
            submit_data();
        }
    });
})
