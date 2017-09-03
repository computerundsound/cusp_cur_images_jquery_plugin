/*
 * Copyright by Jörg Wrase - www.Computer-Und-Sound.de
 * Hire me! coder@cusp.de
 *
 * LastModified: 2017.07.23 at 00:38 MESZ
 */

(function ($) {

    let markup = '<div id="curImageBoxViewer"> \
                    <div class="curImageBoxViewer_imageWrapper">\
                    <div class="curImageBoxViewer_close">[x]</div>\
                        <img id="curImageBoxViewer_img" src="">\
                    </div>\
                  </div>';

    function getImagesFromSameGallery(attr) {

        let $foundImages = $("a[data-curImageBox=" + attr + "]");

        let foundImages = [];

        $foundImages.each(function () {
            let imageUrl = $(this).attr("href");

            foundImages.push(imageUrl);

        });

        return foundImages;
    }

    function getCurrentImageIndex($currentImage, foundImages) {

        let index = foundImages.indexOf($currentImage.attr("href"));

        return index;

    }

    function loadImage($image, foundImages, currentImageIndex) {

        $image.src = foundImages[currentImageIndex];
    }

    function getSize(imageWidth, imageHeight, $wrapper): { newWidth: number; newHeight: number } {

        $wrapper.css('width', '80%');
        $wrapper.css('height', '80%');

        let wrapperWidth  = $wrapper.width();
        let wrapperHeight = $wrapper.height();
        let ratio         = imageWidth / imageHeight;

        let newWidth  = wrapperWidth;
        let newHeight = newWidth / ratio;

        if (newHeight > wrapperHeight) {
            newHeight = wrapperHeight;
            newWidth  = ratio * newHeight;
        }

        let cuSizeObject = {
            newWidth:  newWidth,
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

    ($.fn as any).curImageBox = function (options = {}) {

        let optionsDefault = {
            fadeInTimeMS:    400,
            backgroundColor: "rgba(80,80,80,0.75)"
        };
        let optionsReal    = $.extend(optionsDefault, options);

        return this.each(function () {

            $(this).on("click", function (event) {

                event.preventDefault();

                let $body   = $("body");
                let galName = $(this).attr("data-curImageBox");

                let foundImages       = getImagesFromSameGallery(galName);
                let currentImageIndex = getCurrentImageIndex($(this), foundImages);

                // noinspection JSJQueryEfficiency
                let $curImageBoxViewer = $("#curImageBoxViewer");

                if ($curImageBoxViewer.length === 0) {
                    $body.append(markup);
                    $curImageBoxViewer = $("#curImageBoxViewer");
                    bindCloseBtn($curImageBoxViewer, $body);
                }

                let $curImageBoxViewerWrapper = $curImageBoxViewer.find(".curImageBoxViewer_imageWrapper");

                let $img = $("#curImageBoxViewer_img");

                let image = new Image();

                image.onload = function () {

                    $img.attr("src", image.src);

                    $curImageBoxViewer.css("display", "block");
                    $curImageBoxViewer.css("background-color", optionsReal.backgroundColor);

                    let cuSize = getSize(image.width, image.height, $curImageBoxViewerWrapper);

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
    }

})(jQuery);
