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
        elem.each(function (idx, el) {
            //console.log($(el).attr('data-y'));
            var x = $(el).attr('data-x');
            console.log(x, idx);
            var y = $(el).attr('data-y');
            console.log(y, idx);

            var z = $(el).attr('data-z');
            console.log(z, idx);

            $(el).css('left', x + "px");
            $(el).css('top', y + "px");
            $(el).css('z-index', z);
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
            })
// 7.
                var mouseMoveX = currentMousePositionX - oldMousePositionX;
                var mouseMoveY = currentMousePositionY - oldMousePositionY;
                console.log('różnicaX :' + mouseMoveX, 'różnicaY :' + mouseMoveY);

                // 8.
                elem.each(function (idx,el) {
                    var speed = $(el).attr('data-speed');
                    console.log(speed);
                    var movLeftPos = $(el).offset().left + mouseMoveX * speed;
                    var movTopPos = $(el).offset().top + mouseMoveY * speed;
                    $(el).animate({'left': movLeftPos}); // zmieniłem na animację, zeby zaobserwować co się dzieje
                    $(el).animate({'top': movTopPos});


   // 9. gdzie???????????????????????
                    oldMousePositionX = currentMousePositionX;
                    oldMousePositionY = currentMousePositionY;
                });
            //});
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