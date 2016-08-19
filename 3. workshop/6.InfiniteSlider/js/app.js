/**
 * Created by jakub_000 on 2016-08-18.
 */
$(document).ready(function () {
    console.log('działa');

    function sliderA() {
        var btnNext = $('#nextPicture');
        var btnPrev = $('#prevPicture');
        var liEl = $('li'); // element listy


        var firstImg = liEl.eq(0);
        console.log(firstImg.children().attr('src'));
        var lastImg = liEl.eq(liEl.length - 1);
        console.log(lastImg.children(0).attr('src'));


        var indxOfVisibleImg = 0;
        var imgWidth = 400; // szerokość obrazka
        var ulContener = $('.slider').find('ul');

        var firstGoLast = firstImg.clone(true).appendTo(ulContener); // klonuję el. pierwszy i dodaję na końcu
        var lastGoFirst = lastImg.clone(true).prependTo(ulContener); // klonuję el. ostatni i dodaję na początku
        console.log($('ul').children().length); // mam 8 elementów

        var sliderWidth = $('li').length * imgWidth + "px"; // slider to pasek z obrazków 6 x szerokosc ale
        ulContener.outerWidth(sliderWidth); // biorę szerzej, zeby nie dodawać pikseli do 6xszerokosc obrazka
        //var newPos = -400;

        btnNext.on('click', function (event) {
            console.log('next_clicked');
            var newPos = imgWidth * (1 + indxOfVisibleImg);
            ulContener.animate({left: -newPos}, function () {
                if (indxOfVisibleImg < liEl.length - 1) {
                    indxOfVisibleImg = indxOfVisibleImg + 1; // zmienia się index obrazka widzialnego teraz
                } else {
                    ulContener.css({left: 0}); // bez animacji natychmiast niepostrzeżenie przestaw pozycję
                    indxOfVisibleImg = 0;
                }
            });
        });

        btnPrev.on('click', function (event) {
            var newPos = imgWidth * (1 - indxOfVisibleImg);
            ulContener.animate({left: newPos}, function () {
                if (indxOfVisibleImg > 1) {
                    indxOfVisibleImg = indxOfVisibleImg - 1; //zmienia się index obrazka widzialnego teraz

                } else {
                    newPos = imgWidth*(liEl.length);
                    ulContener.css({left: -newPos});
                    indxOfVisibleImg = liEl.length;
                }

            });

        })

    }

    sliderA();


});