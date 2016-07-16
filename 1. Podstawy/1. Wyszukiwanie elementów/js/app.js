
$(document).ready(function () { // jest gotowy dom to jedziesz dalej


// TESTOWE zad. 1.
//    alert('załadowało się');
$('section').addClass('backgroundElement');

//TESTOWE zad.2.
$('.links').find('nav').addClass('hover-effect');

// zad. 1
$('.main').find('li').addClass('borderClass'); //nadanie klasy redLinks w tej postaci (color: red)
                                                // nie zmienia kolorów linku który jest dzieckiem li

    // zad.2.
    $('.main').find('li').addClass('colorText').addClass('backgroundElement').fadeOut('slow').fadeIn('slow');
// czerwony tekst, żółte tło, pojawianie się i znikanie powolne...


//zad.3.
//    $('a').css('color','red'); // punkt1. styluję linki za pomoca funkcji css

    //$('.menu').find('a').css('color','red'); //punkt 2. styluję tylko linki w menu
    $('.menu').find('a').addClass('redLinks');  // punkt3. do modyfikacji punktów 1. i 2. :

    $('.menu').find('a').first().addClass('biggerFont'); // punkt 4. pierwszy element dostanie
                                                        // klasę zdefiniowaną w css

//zad.4.
    var headerOne = $('h1');

    if(headerOne.hasClass('creepyHeader')) { // sprawdzaam czy ma klasę 'creepyHeader' jeśli ma to
        console.log("The H1 has got creepyHeader class already"); // oznajmiam ten fakt
    } else {
        headerOne.addClass('creepyHeader'); //nie ma? nadaję mu tę klasę
    }

});








