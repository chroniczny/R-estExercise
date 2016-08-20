/**
 * Created by jakub_000 on 2016-08-18.
 */
$(document).ready(function () {
    console.log('działa');

    function parallax() {

// 2.
        var scene = $('.scene');
        var elem = scene.find('.element');
        // 4.
        var oldMousePositionX = 0;
        var oldMousePositionY = 0;

// 3.
        elem.each(function (el) {
            console.log($(this).attr('data-y'));
            var x = $(this).attr('data-x');
            console.log(x);
            var y = $(this).attr('data-y');
            console.log(y);

            var z = $(this).attr('data-z');
            console.log(z);

            $(this).css('left', x + "px");
            $(this).css('top', y + "px");
            $(this).css('z-index', z);
        });

// 4.
        scene.on('mousemove', elem, function (event) {
            // 5.
            var currentMousePositionX = event.offsetX;
            var currentMousePositionY = event.offsetY;
            console.log("mousemove :" + currentMousePositionX, currentMousePositionY);

            // 6.
            $(event.target).on('mouseenter', function () {
                var changePosX = $(this).attr('data-x');
                var changePosY = $(this).attr('data-y');

                currentMousePositionX = currentMousePositionX + changePosX;
                currentMousePositionY = currentMousePositionY + changePosY;
// 7.
                var mouseMoveX = currentMousePositionX - oldMousePositionX;
                var mouseMoveY = currentMousePositionY - oldMousePositionY;
                console.log('różnicaX :' + mouseMoveX, 'różnicaY :' + mouseMoveY);

                // 8.
                elem.each(function (el) {
                    var speed = $(this).attr('data-speed');
                    console.log(speed);
                    var movLeftPos = $(this).offset().left + mouseMoveX * speed;
                    var movTopPos = $(this).offset().top + mouseMoveY * speed;
                    $(this).css('left', movLeftPos);
                    $(this).css('top', movTopPos);


   // 9. gdzie???????????????????????
                    oldMousePositionX = currentMousePositionX;
                    oldMousePositionY = currentMousePositionY;
                })
            });
        });

// 4. cd.
        scene.mouseenter(function (event) {
            var oldMousePositionX = event.offsetX;
            var oldMousePositionY = event.offsetY;
            console.log("mouseENTER :" + oldMousePositionX, oldMousePositionY);
        });
    }

    parallax();

});