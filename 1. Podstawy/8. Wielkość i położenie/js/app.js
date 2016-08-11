$(document).ready(function () {

    //8. Wielkość i położenie zad. 1
    function ex1() {
        var boxEl = $('.box');
        var boxWidth = boxEl.outerWidth(); // pobranie zewnetrznej szerokosci
        var boxHeight = boxEl.outerHeight(); // pobranie zewn. wysokosci
        var newBox = $('<div>Box</div>'); // utw. div-box nowy
        newBox.insertAfter(boxEl).outerWidth(boxWidth).outerHeight(boxHeight).css({  //wrzucam nowy div po istniejacym
                                                                                    // nadaję mu pobraną wys. i szer. i styl css (obiekt)
            "background-color": "purple",
            "margin": "20px"
        });
    }

    ex1();

    //8. Wielkość i położenie zad. 2
    function ex2() {
        var menuEl = $('.menu');
        var aElement = menuEl.find('a');

        aElement.on('click', function (event) {
            var $this = $(this);
            var hrefFromA = $this.attr('href'); // pobieram nazwę nagłówka docelowego z linka (np. href='#cośtam' - pobieram: #cośtam)
                                                // otrzymana wartość to gotowy selektor $('#cośtam') do znalezienia po 'id'
            var destinationName = $(hrefFromA); // nazwa jest selectorem do dla jQ
            var aPosition = destinationName.position(); // wrzucam pozycję nagłówka (względem rodzica - tu paragraf o id=cośtam) do zmiennej
            // position zwraca obiekt {top:  ...px, left: ...px) mnie interesuje TOP, więc go wskazuję:
            $("html, body").animate({scrollTop: aPosition.top}, 2000); // dokument zmieni swą top-pozycję
            //na zadaną=pobraną z pozycji nagłówka docelowego. Do zwolnienia scrolowania mozna użyć "slow" :

            //$('html, body').animate({scrollTop: destinationName.offset().top}, 2000); // taka opcja jeszcze...

            return false; // aby linki nie działały jak linki ... przerywam ich 'wrodzony' event
            //event.preventDefault(); // zamiast return false; mogę użyć event.preventDefault();


        });

//dodatkowo wrócę do menu po naciśnięciu nagłówka - choć to bez sensu:
        $('h2').on('click', function (event) {
            console.log('pressed ' + $(this));
            $('html, body').animate({scrollTop: 0}, 2000); // scrollujemy do samej góry...
        })
    }

    ex2();

});









