$(document).ready(function () {
////zad 1. TESTOWE
    var hero = $('dt');

//dzięki jQuerry nie muszę używać forEach'a mimo iż znalezionych mam grupę elementów
    hero.on('mouseover', function (event) { // jeśli są dzieci to będą kolejne eventy
        var textInEl = $(this).text(); // ten konkretny jQuerowy element na którym jest event, żeby móc zastosować metodę text!!!!
        console.log(textInEl); //
    })

    //hero.on('mousemove', function (event){ //daje eventy na każdym elemence
    //var textInEl = $(this).text();
    //console.log(textInEl); // ten konkretny jQuerowy element na którym jest event!!!!
    //    })

    //hero.on('mouseenter', function (event){ // obojętnie ile dzieci w srodku on odpali się 1 raz
    ////tak jakby miał stopPropagation na 'dzieciach'
    //var textInEl = $(this).text();
    //console.log(textInEl); // ten konkretny jQuerowy element na którym jest event, żeby móc zastosować metodę text!!!!
    //})

//zad 1.
    function ex1() {
        var heroBtns = $('.hero-buttons').children();

        var hero1 = heroBtns.eq(0);
        var hero2 = heroBtns.eq(1);
        var hero3 = heroBtns.eq(2);


        hero1.on('click', function (event) {
            var nameOfBtn = $(this).text(); // obiekt jq co ma w środku? przyda mi się
            console.log("kliknięto mnie - " + nameOfBtn);
        })

        hero2.one('click', function (event) {
            var nameOfBtn = $(this).text(); // obiekt jq co ma w środku? przyda mi się
            console.log("kliknięto mnie - " + nameOfBtn + "ale się już drugi raz nie dam!");
        })
        hero3.on('click', function (event) {
            var nameOfBtn = $(this).text(); // obiekt jq co ma w środku? przyda mi się
            heroBtns.off('click'); // blokuję wciskanie wszystk. guzików po pierwszym kliku tutaj
            console.log("kliknięto mnie - " + nameOfBtn);
        })
    }

    ex1();


// zadanie 2.
    function ex2() {
        var description = $('.superhero-description');

        var dtElements = description.find('dt'); // znajduje wszystkie elementy dt
        console.log(dtElements);
        var ddElements = description.find('dd'); // znajd. elementy dd
        ddElements.hide(200); // ukrywa elementy dd

        dtElements.on('click', function (event) { // po wcisnięciu elementu dt
            var nextMeanDd = $(this).next(); // tekst nast. elementu po wciśnietym zostanie pobrany do zmiennej

            // pierwotny sposób dłuższy:
            //if(nextMeanDd.css('display')=='none') { // jeśli ten next-element jest niewidoczny
            //    nextMeanDd.css('display', 'block'); // ma się pokazać
            //} else {
            //    nextMeanDd.css('display', 'none'); // jeśli był widoczny - ma się ukryć
            //}

            //kócej-optymalniej:
            nextMeanDd.toggle(); // toggle nie opisany inaczej działa domyślnie na widoczność - włacza/wyłacza
        })
    }

//ex2();

    //zadanie 3.

    function ex3() {


        var formBtn = $('form.Login').find('button.show-hide-btn'); // znajduję guziki wszystkie (!!!)
        //var inpuT = formBtn.parent().find('input.user-pass');


        formBtn.on('click', function (event) { // po naciśnięciu (działa na każdy taki guzik)
            var $this = $(this);
            var inpuT = $this.parent().find('input.user-pass'); // element będący dzieckiem tego samego rodzica co guzik
                                                                // o klasie user-pas
            event.preventDefault(); // blokuję: żeby guzik nie przeładowywał strony (bo to w formularzu);

            if (inpuT.attr("type") === "password") { // jeśli guzik jest typu 'hasło'
                inpuT.attr("type", "text"); // ustawiam mu typ 'text'
                console.log('zmieniłem na: text'); // oznajmiam to w konsoli
            } else {
                inpuT.attr("type", "password"); // w przeciwnym razie zmieniam typ: text na hasło
                console.log('zmieniłem na: password'); // oznajmiam to w konsoli
            }
        })


    }

    ex3();

// zad. 4.
    function ex4() {
        var elMenu = $('.menu').find('a');

        elMenu.on('mouseenter', function (event) {
                //var $this = $(this);
                console.log('Hura');
            }
        )
    }

    ex4();


// zadanie 5.

    function ex5() {
        //var form = $('form.login');
        var inputs = $('form.Login').find('input');

        inputs.on('click', function (event) { // na każdym inpucie po jego kliknieciu
            //console.log(inputs); // sprawdzam cy wszystkie
            $(this).css('boxShadow', 'inset 0px 2px 26px -6px rgba(0,0,0,0.5)');// input dostaej wewnętrzny cień
        }).on('blur', function (event) { // po opuszczeniu
            var $this = $(this);
            $this.css('backgroundColor', 'rgba(0,0,0,0.2)'); // dostaje tło szare...
        });
    }
    ex5();

});








