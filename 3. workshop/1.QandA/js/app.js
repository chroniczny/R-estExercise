/**
 * Created by jakub_000 on 2016-08-16.
 */
$(document).ready(function () {
    console.log('działa');

    var questH = $('.QA h1');
    var ansP = $('.QA p');

    ansP.slideUp();

    console.log(questH.text());
    console.log(ansP.text());
    questH.on('click', function(event){
        console.log($(this).text()+" działa");
        ansP.slideUp();
        $(this).next().slideToggle(); // element się będzie pokazywał (wysuwał i zsuwał) na zmianę
    })

});