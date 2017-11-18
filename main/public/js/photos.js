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

    $("#myCarousel").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        updateClasses(nextSlide);
    });
});

function updateClasses(newCurr) {
    var currIndex = $(".slick-current").attr("data-slick-index");
    var total = 7;
    $(".slick-slide").each(function(index) {
        $(this).removeClass("item-left");
        $(this).removeClass("item-right");
        $(this).removeClass("fake-center");
        var i = parseInt($(this).attr('data-slick-index'));

        if (circularDistance(newCurr, i, total, -1) <= 3) {
            $(this).addClass('item-left');
        } else {
            $(this).addClass('item-right');
        }
    });
}

function circularDistance(a, b, total, direction) {
    var d = 0;
    // if left
    if (direction < 0) {
        if (b < a)
            d = a - b;
        else
            d = a + (total - b);
    } else {
        if (b > a)
            d = b - a;
        else
            d = (total - a) + b;
    }
    return d;
}
