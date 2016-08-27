/**
 * Created by jakub_000 on 2016-08-16.
 */
$(document).ready(function () {
    console.log('działa');

    var quaObject = $('.QA');
    var questH = quaObject.find('h1'), ansP = quaObject.find('p');
    //to samo: $('p', '.QA')

    ansP.slideUp();

    //console.log(questH.text());
    //console.log(ansP.text());
    //
    questH.on('click', function (event) {
        //console.log($(this).text()+" działa");
        ansP.slideUp();
        if (!$(this).next().is(':visible')) { // jesli element nie jest widoczny (negacja !)
            $(this).next().finish().slideToggle(); // wstrzymaj animację i wyświetl kolejkę
            // wielokrotny klik robi dziwactwo...
            // dlatego czyścimy animacje które sa w kolejce i wkonujemy tylko ostatni klik
        }
    });

});