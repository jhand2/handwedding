//$(function() {
    //var height = $(".navbar").height();
    //var fields = $(".form-group").length;
    //$(".container").css("margin-top", height);

    //$("#add-guest").on("click", function(e) {
        //$("#guest-container").append(
            //'<div>' +
                //'<input class="guest-row form-control"></input>' +
                //'<i class="fa fa-times-circle fa-2x" aria-hidden="true"></i>' +
            //'</div>'
        //);

        //$(".fa-times-circle").on("click", function(e) {
            //var i = $(this).parent().index();
            //$(this).parent().remove();
        //});
    //});

    //var submit_data = function() {
        //var going_selected = $('input[name=optradio]:checked', '#rsvp_submit').val();
        //var guests = [];
        //$(".guest-row").each(function(i) {
            //guests.push($(this).val());
        //});

        //var d = {
            //"name": $("#name").val(),
            //"attending": going_selected == "true",
            //"guests": guests
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
            //$("#guest-container").empty();
            //$('#rsvp input[type="radio":checked]').each(function(){
                //$(this).checked = false;  
            //});
        //});
    //}

    //$("#submit").on("click", function(e) {
        //submit_data();
    //});
//})
