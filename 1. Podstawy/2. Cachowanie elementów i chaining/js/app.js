
$(document).ready(function () { // jest gotowy dom to jedziesz dalej
//test. 1. i zad1.

    var naV = $('nav');
naV.css('border', 'solid 1px red').fadeOut('slow').slideDown('slow');

    //zad 2.

     var myMenu = $('.menu').find('li'); // zmiennej przypisuję znalezione elementy menu

    var elemFirst = myMenu.first(); // wskazuje pierwszy element
    console.log(elemFirst.text()); // text: do wyświetlenia tekstu w szukanym elemencie

    var elemThird = myMenu.eq(2); // trzeci elemet
    console.log(elemThird.text());

    var elemLast = myMenu.last(); //ostatni element
    console.log(elemLast.text());

    //elemFirst.addClass('menuLinks'); // nadaję klasę danemu elementowi
    //elemThird.addClass('menuLinks');
    //elemLast.addClass('menuLinks');
    // ale gdyby to nadanie klas chcieć zrobić krócej:

    var tableOfSpecLi = [elemFirst,elemThird,elemLast]; //robię tablicę z tych specyficznych elementów
    tableOfSpecLi.forEach(function(el){
        el.addClass('menuLinks');
    })





});








