/**
 * Created by jakub_000 on 2016-08-18.
 */
$(document).ready(function () {
    console.log('działa');

    function sliderA() {
        var btnNext = $('#nextPicture');
        var btnPrev = $('#prevPicture');

        var liEl = $('li');
        var elements = [];
        for (var i = 0; i < liEl.length; i++) {
            var img = $(liEl[i]);
            elements.push(img);
        }
        console.log(elements);
        var indxOfVisibleImg = 0;
        //var whichVisible = elements[indxOfVisibleImg]; // który obrazek widimy? - niepotrzebne mi to?
        var imgWidth = 400; // szerokość obrazka
        console.log(imgWidth);
        var ulContener = $('.slider').find('ul');
        console.log(ulContener);
        var sliderWidth = liEl.length * imgWidth + "px"; // slider to pasek z obrazków 6 x szerokosc ale
        //console.log(sliderWidth);
        ulContener.outerWidth(sliderWidth); // biorę szerzej, zeby nie dodawać pikseli do 6xszerokosc obrazka


        function buttonSlide(button) { // utworzona funkcja będzie uzależniała swoje działanie od guzika (rozpoznanego po atrybucie)
            if (button == 'nextPicture') {
                if (indxOfVisibleImg < liEl.length - 1) {
                    var positionNew = imgWidth * (1 + indxOfVisibleImg);
                    ulContener.animate({left: -positionNew});
                    indxOfVisibleImg = indxOfVisibleImg + 1; // zmienia się index obrazka widzialnego teraz
                } else {
                    indxOfVisibleImg = 0;
                    ulContener.animate({left: 0});
                }

            } else if (button == 'prevPicture') {

                if (indxOfVisibleImg == 0) {
                    indxOfVisibleImg = liEl.length;
                    positionNew = imgWidth * (1 - indxOfVisibleImg);
                    ulContener.animate({left: positionNew});
                    indxOfVisibleImg = indxOfVisibleImg - 1; //zmienia się index obrazka widzialnego teraz
                } else {
                    var positionNew = imgWidth * (1 - indxOfVisibleImg);
                    ulContener.animate({left: positionNew});
                    indxOfVisibleImg = indxOfVisibleImg - 1; // nowy index dla img
                }
            }
        }


        $('button').on('click', function (event) {
            var whichButton = $(this).attr('id');
            console.log('clicked: ' + whichButton);
            buttonSlide(whichButton); // do funkcji przekazuję informację jaki guzik został wciśnięty
        });
    }
    sliderA();
});