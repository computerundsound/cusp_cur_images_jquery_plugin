/*
 * Copyright by Jörg Wrase - www.Computer-Und-Sound.de
 * Hire me! coder@cusp.de
 *
 * LastModified: 2017.07.23 at 00:38 MESZ
 */
(function ($) {
    var markup = '<div id="curImageBoxViewer"> \
                    <div class="curImageBoxViewer_imageWrapper">\
                    <div class="curImageBoxViewer_close">[x]</div>\
                        <img id="curImageBoxViewer_img" src="">\
                    </div>\
                  </div>';
    function getImagesFromSameGallery(attr) {
        var $foundImages = $("a[data-curImageBox=" + attr + "]");
        var foundImages = [];
        $foundImages.each(function () {
            var imageUrl = $(this).attr("href");
            foundImages.push(imageUrl);
        });
        return foundImages;
    }
    function getCurrentImageIndex($currentImage, foundImages) {
        var index = foundImages.indexOf($currentImage.attr("href"));
        return index;
    }
    function loadImage($image, foundImages, currentImageIndex) {
        $image.src = foundImages[currentImageIndex];
    }
    function getSize(imageWidth, imageHeight, $wrapper) {
        $wrapper.css('width', '80%');
        $wrapper.css('height', '80%');
        var wrapperWidth = $wrapper.width();
        var wrapperHeight = $wrapper.height();
        var ratio = imageWidth / imageHeight;
        var newWidth = wrapperWidth;
        var newHeight = newWidth / ratio;
        if (newHeight > wrapperHeight) {
            newHeight = wrapperHeight;
            newWidth = ratio * newHeight;
        }
        var cuSizeObject = {
            newWidth: newWidth,
            newHeight: newHeight
        };
        return cuSizeObject;
    }
    function bindCloseBtn($curImageBoxViewer, $body) {
        $(".curImageBoxViewer_close").on("click", function () {
            closeImageBox($curImageBoxViewer, $body);
        });
    }
    function closeImageBox($curImageBoxViewer, $body) {
        $curImageBoxViewer.css("display", "none");
        $curImageBoxViewer.css("opacity", 0);
        $body.off("keyup");
    }
    $.fn.curImageBox = function (options) {
        if (options === void 0) { options = {}; }
        var optionsDefault = {
            fadeInTimeMS: 400,
            backgroundColor: "rgba(80,80,80,0.75)"
        };
        var optionsReal = $.extend(optionsDefault, options);
        return this.each(function () {
            $(this).on("click", function (event) {
                event.preventDefault();
                var $body = $("body");
                var galName = $(this).attr("data-curImageBox");
                var foundImages = getImagesFromSameGallery(galName);
                var currentImageIndex = getCurrentImageIndex($(this), foundImages);
                // noinspection JSJQueryEfficiency
                var $curImageBoxViewer = $("#curImageBoxViewer");
                if ($curImageBoxViewer.length === 0) {
                    $body.append(markup);
                    $curImageBoxViewer = $("#curImageBoxViewer");
                    bindCloseBtn($curImageBoxViewer, $body);
                }
                var $curImageBoxViewerWrapper = $curImageBoxViewer.find(".curImageBoxViewer_imageWrapper");
                var $img = $("#curImageBoxViewer_img");
                var image = new Image();
                image.onload = function () {
                    $img.attr("src", image.src);
                    $curImageBoxViewer.css("display", "block");
                    $curImageBoxViewer.css("background-color", optionsReal.backgroundColor);
                    var cuSize = getSize(image.width, image.height, $curImageBoxViewerWrapper);
                    $img.width(cuSize.newWidth);
                    $img.height(cuSize.newHeight);
                    $curImageBoxViewer.animate({
                        opacity: 1
                    }, optionsReal.fadeInTimeMS);
                    $body.keyup(function (event) {
                        // noinspection SwitchStatementWithNoDefaultBranchJS
                        switch (event.keyCode) {
                            case 27:
                                closeImageBox($curImageBoxViewer, $body);
                                break;
                            case 37:
                                currentImageIndex = (currentImageIndex - 1 < 0) ?
                                    foundImages.length - 1 :
                                    currentImageIndex - 1;
                                loadImage(image, foundImages, currentImageIndex);
                                $body.off("keyup");
                                break;
                            case 39:
                                currentImageIndex = (currentImageIndex + 1 >= foundImages.length) ?
                                    0 :
                                    currentImageIndex + 1;
                                loadImage(image, foundImages, currentImageIndex);
                                $body.off("keyup");
                                break;
                        }
                    });
                };
                loadImage(image, foundImages, currentImageIndex);
            });
        });
    };
})(jQuery);
