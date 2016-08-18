/**
 * Created by jakub_000 on 2016-08-16.
 */
$(document).ready(function () {
    console.log('działa');
    var navEl = $('nav');
    var menuUl = navEl.find('ul.menu');
    var topPosition = menuUl.position().top; // mierzę odległość menu od górnej belki

    console.log(topPosition);
    //console.log(navEl.html(), menuUl.text())

    $(window).on('scroll', function(event) {
        console.log('scrolling');

        var distanceMenu = $(document).scrollTop(); // odległość o którą został przewinięty cały element

        console.log(distanceMenu);
        if(distanceMenu > topPosition) { //jeśli więcej przewinęliśmy niż odległosć menu od górnej belki
            menuUl.addClass('sticky'); // menu będzie zafixowane na górze
        } else {
            menuUl.removeClass('sticky');
        }
    });
    $(window).on('resize', function(event) { // gdy zmienia się odległości w miarę zmiany okna przeglądarki:
       //console.log($(window).width()); // sprawdzam wielkosc
        var distanceMenu = $(document).scrollTop(); // odległość o którą został przewinięty cały element

        // UWAGA poniższy warunek działa dobrze jeśli jest zastosowany odwrotnie ni w opisie zadania:

        if (menuUl.hasClass('sticky')) { // gdy menu jest  odczepione 'sticky' (fixed)

            //var topPosition = menuUl.position().top; // mierzę odległość menu od górnej belki
            var topPosition = navEl.position().top; // pobieram odległość od górnej belki dla elem. 'nav'

        } else {                            // gdy menu nie jest fixed
            //var topPosition = navEl.position().top; // pobieram odległość od górnej belki dla elem. 'nav'
            var topPosition = menuUl.position().top; // mierzę odległość menu od górnej belki
        }
        if(distanceMenu > topPosition) { // nadaję klasę zgodnie z warunkiem jak wcześniej...
            menuUl.addClass('sticky');
        } else {
            menuUl.removeClass('sticky');
        }

    });

});