$(function() {
    var imgUrl = "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg";
    //var carousel = $(".carousel-inner");
    var carousel = $("#myCarousel");
    //var indicatorDiv = $(".carousel-indicators");
    for (var i = 0; i < 7; i++) {
        var itemDiv = $('<div class="item"></div>');
        var img = $('<img />');
        img.attr("src", imgUrl);
        itemDiv.append(img);
        carousel.append(itemDiv)

        //var indicator = $('<li data-target="#myCarousel"></li>');
        //indicator.attr("data-slide-to", i);
        //indicatorDiv.append(indicator);

        //if (i === 0){
            //itemDiv.addClass("active");
            //indicator.addClass("active");
        //}
    }
    $('#myCarousel').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        arrows: true,
        cssEase: "ease-in-out",
        variableWidth: true,
        prevArrow:
            '<a class="carousel-control left" href="#myCarousel">' +
                '<span class="glyphicon glyphicon-chevron-left"></span>' +
            '</a>',
        nextArrow:
            '<a class="carousel-control right" href="#myCarousel">' +
                '<span class="glyphicon glyphicon-chevron-right"></span>' +
            '</a>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    updateClasses();

    $("#myCarousel").on("beforeChange", function() {
        updateClasses();
    });
});

function updateClasses() {
    $("div[tabindex]").each(function() {
        var currIndex = $(".slick-current").attr("data-slick-index");
        $(this).removeClass("item-left");
        $(this).removeClass("item-right");
        if ($(this).attr('data-slick-index') === currIndex) {
            $(this).addClass('item-left');
        } else if ($(this).attr('data-slick-index') > currIndex) {
            $(this).addClass('item-right');
        } else {
            $(this).addClass('item-left');
        }
    });
}
