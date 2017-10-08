$(function() {
    $("#rsvp_submit").submit(function(e) {
        e.preventDefault();
        d = {
            "name": $("#name").val()
        }
        $.ajax({
            url: "/api/rsvp",
            type: "post",
            data: JSON.stringify(d),
            processData: false,
            contentType: "application/json"
        }).then(function() {
            $("#name").val("");
            $("input").blur();
        });
    })
})
