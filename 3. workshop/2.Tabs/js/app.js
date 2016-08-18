/**
 * Created by jakub_000 on 2016-08-16.
 */
$(document).ready(function () {
    console.log('działa');

    var tabsLi = $('.tabs li');
    var tabDivs = $('.tabs div');
    //console.log(tabsLi.text(), tabDivs.text());
    tabsLi.each(function(idx){
        $(this).on('click', function (event) {

            //console.log($(this).text());
           var divShow = $(this).parent().parent().children().eq(idx+1);
               //.children()[idx+1];
            //console.log(divShow.text());
//opcja. nr 1:
            tabDivs.fadeOut(100);
            divShow.delay(100).fadeIn(1000); // opóźniam wywołanie funkcji, eby powyższa sie
            // zdążyła wykonać - unikam efektu przeskoku...
//opcja nr 2.
//            tabDivs.slideUp(100);
//            divShow.delay(100).slideDown(1000);
        })
    })




});