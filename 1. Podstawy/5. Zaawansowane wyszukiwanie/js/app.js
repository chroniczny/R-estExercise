$(document).ready(function () {

//zadanie.1.

    function ex1() {
        var shopping = $('.shopping');
        var addBtn = shopping.find('button');
        addBtn.on('click', function (event) {
            var $this = $(this);
            if ($this.attr('class') != "added") {// uzależniam efekt/funkcję od istnienia klasy added: gdy jej brak
                $this.addClass('added').parent().parent().addClass("cart-updated"); //nadaję ją a dziadkowi dodaję cart-updated
            } else {                                // gdy ją ma odbieram a dziadkowi odbieram jego klasę
                $this.removeClass('added').parent().parent().removeClass("cart-updated");
            }
        });
    }

    ex1();

    //zadanie.2.

    function ex2() {
        var films = $('.films');
        var expandedEl = films.find('.expand'); // link wciskany
        //var closer = expandedEl.parent().next().find('.close');
        var container = $('.container');
        expandedEl.on('click', function (event) {
                var $this = $(this);
                event.preventDefault(); // muszę zatrzymać przeładowanie strony po wciśnieciu linka!!!
                $this.parent().next().slideDown('slow');
        })
        container.on('click', '.close', function(event) { // eventprzypisuję na containerze, dając drugi parametr (a.close)
                                // wewnątrz containera aby był currentTargetem tego eventa
            var $this = $(this);
            event.preventDefault(); // muszę zatrzymać przeładowanie strony po wciśnieciu linka!!!
            $this.parent().slideUp('slow'); // this jest currentTargetem eventa więc zwijam jego rodzica
        })
    }
    ex2();

    //zad. 3.

    function ex3() {
        var allA = $('a'); // wszystkie elementy a

        allA.each(function(){ // każdemu z nich
            var $this = $(this);
            $this.attr("href", "http://www.coderslab.pl"); // przypisuję atrybut href="http://www.coderslab.pl"
        })
    }
    ex3();


});









