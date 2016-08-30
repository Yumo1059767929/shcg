$(function () {
    /*文字点击事件*/

    $(".z-tab a:first").on("click", function () {

        if ($(".z-select").css("display") == "none") {
            $(".z-select").css("display", "block");
            $(".z-lc").css("border", "none");

            $(".z-tab a:first").css({
                "background": "#105d7d",
                "color": "#fff"
            });
            $(".z-tab a:last").css({
                "background": "#d7d7d7",
                "color": "#105d7d"
            });
            $(".z-hx").css("display", "none");

        } else {

        };

    });

    /*图形点击事件*/
    $(".z-tab a:last").on("click", function () {

        if ($(".z-hx").css("display") == "none") {
            $(".z-hx").css("display", "block");
            $(".z-tab a:last").css({
                "background": "#105d7d",
                "color": "#fff"
            });
            $(".z-tab a:first").css({
                "background": "#d7d7d7",
                "color": "#105d7d"
            });
            $(".z-select").css("display", "none");

        } else {

        };
        $(".z-clearfix").eq(0).css("display", "block");
        $(".z-lc").css("border", "");

    });


    /*上传图片*/
    $(".file_upload").change(function () {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $contain = $(this).next();
        console.log($contain);
        var $img = $contain.find("img");
        console.log($img);
        if (fileObj && fileObj.files && fileObj.files[0]) {
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src', dataURL);
        } else {
            dataURL = $file.val();
            var imgObj = document.getElementById("preview");
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

        }
    });

    /*客用品补充点击事件*/
    $(".z-bc").on("click", function () {

        $(".z-cbl").animate({
            right: 0
        }, "fast");

        $(".z-tab").animate({
            marginLeft: 0
        }, "fast");

    });
    $(document).on("click", function () {

        $(".z-cbl").on("click", function () {
            $(".z-cbl").animate({
                right: -127
            }, "fast");

            $(".z-tab").animate({
                marginLeft: 235
            }, "fast");
        });

    });


});
