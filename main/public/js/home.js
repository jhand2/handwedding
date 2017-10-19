$(function() {
    var bannerSvg = $("#banner-svg");
    var bannerText = $("#banner-text");
    var bannerContainer = $("#banner-container");
    var info = $(".info");

    var height = bannerSvg.outerHeight();
    var infoHeight = info.outerHeight();

    bannerText.height(height);
    bannerContainer.height(height);

    bannerText.height(height);
    bannerContainer.height(height);
    //info.height(height + infoHeight);
    var h = 0;
    info.each(function(ele) {
        h += $(ele).height();
    });
    info.height(h);

    $(window).resize(function() {

        bannerText.height(height);
        bannerContainer.height(height);
        var h = 0;
        info.each(function(ele) {
            h += $(ele).height();
        });

        info.height(h);
    });
});
