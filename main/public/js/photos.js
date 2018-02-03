$(function() {
    var imgUrl = "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg";

    $("#photo-modal").hide();
    $("#photo-modal").on("click", function() {
        $("#photo-modal").css("opacity", 0);
        $("#photo-modal")
        .one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function(e){
            console.log("done")
            $(this).hide();
            $(this).unbind(
                'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
            );
        });
    });

    var carousel = $("#myCarousel");
    $.get("/api/photo_paths").then(function(paths) {
        var total = 7;
        paths = JSON.parse(paths);
        for (let p of paths) {
            var itemDiv = $('<div class="item"></div>');
            var img = $('<img class="item-img" />');
            img.attr("src", "/img/engagement/jpg/" + p);
            itemDiv.append(img);
            var w = Math.min(900, Math.round($(window).width() * 0.74));
            var h = Math.round(w * 0.72);
            itemDiv.width(w + 'px');
            itemDiv.height(h + 'px');

            itemDiv.on("click", function(e) {
                console.log($(e).offset())
                var img = $("#photo-modal-img");

                $("#photo-modal-img").attr("src", e.target.currentSrc);
                //$("#photo-modal-img").css("max-width", e.target.width);
                //$("#photo-modal-img").css("max-height", e.target.height);
                //$("#photo-modal-img").css("opacity", 0);
                $("#photo-modal").css("opacity", 0);
                $("#photo-modal").show();

                $("#photo-modal-img").css("max-height", "100vh");
                $("#photo-modal-img").css("max-width", "100%");
                $("#photo-modal").css("opacity", 1);
                //var portrait = img.height() > img.width();
                //if (portrait) {
                    //$("#photo-modal-img").attr("height", "100vh");
                //} else {
                    //$("#photo-modal-img").attr("width", "100%");
                //}
                //$("#photo-modal-img").attr("max-width", "100%");
                //$("#photo-modal-img").attr("max-height", "100vh");
            });

            carousel.append(itemDiv)
        }

        addCarousel(carousel);
        $(".slick-dots>li>button").text("&bull;")

        updateClasses(0, total);

        $("#myCarousel").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            updateClasses(nextSlide, total);
        });
    })
});

function addCarousel(container) {
    container.slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        arrows: true,
        cssEase: "ease-in-out",
        variableWidth: true,
        dots: true,
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
                    dots: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

function updateClasses(newCurr, total) {
    var currIndex = $(".slick-current").attr("data-slick-index");
    $(".slick-slide").each(function(index) {
        $(this).removeClass("item-left");
        $(this).removeClass("item-right");

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
