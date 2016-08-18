/**
 * Created by jakub_000 on 2016-08-18.
 */
$(document).ready(function () {
    console.log('działa');

    var button = $('button');
    var progBar = $('.progress-bar');
    //console.log(button.text()); // guziki
    //progBar.each(function(){console.log($(this).attr('id'));}); // dobre divy

    button.on('click', function (event) {

        console.log($(this).data('number') + " is clicked"); // sprawdzam w co klikam
        var width = $(this).data('width'); // zczytuję atrybuty 'data' do zmiennych
        var number = $(this).data('number');
        var color = $(this).data('color');

        var hisProgressBar = $('#bar' + number); // ustalam przynależność do jakiego diva odnosi się ten guzik
        //console.log(hisProgressBar);
        var span = hisProgressBar.find('span'); // w divie span który jest progresbarem właściwym do animacji
        //console.log(span, span.parent().attr('id')); // sprawdzone, własciwy span
        span.removeAttr('class', color).addClass(color).animate({width: width}, 2000); // aby nie otrzymał klas wsystkich ...
                                                // najpierw odbieram dotychczasową klasę (atrybut) a potem nadaję nową
        // nie działało właściwie gdy odbierłem klasę za pomocą removeClass(color).addClass(color) - bo nie chce odbierac...
    })

});