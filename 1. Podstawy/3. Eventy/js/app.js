$(document).ready(function () {
////zad 1. TESTOWE
    var hero = $('dt');

// dzięki jQuerry nie muszę używać forEach'a mimo iż znalezionych mam grupę elementów
    hero.on('mouseover', function (event) { // jeśli są dzieci to będą kolejne eventy
        var textInEl = $(this).text(); // ten konkretny jQuerowy element na którym jest event, żeby móc zastosować metodę text!!!!
        console.log(textInEl); //
    })

    //hero.on('mousemove', function (event){ //daje eventy na każdym elemence
    // var textInEl = $(this).text();
    // console.log(textInEl); // ten konkretny jQuerowy element na którym jest event!!!!
    //    })

    //hero.on('mouseenter', function (event){ // obojętnie ile dzieci w srodku on odpali się 1 raz
    // tak jakby miał stopPropagation na 'dzieciach'
    // var textInEl = $(this).text();
    // console.log(textInEl); // ten konkretny jQuerowy element na którym jest event, żeby móc zastosować metodę text!!!!
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
            heroBtns.off('click');
            console.log("kliknięto mnie - " + nameOfBtn);
        })
    }

    ex1();


// zadanie 2.
    function ex2() {
        var description = $('.superhero-description');

        var dtElements = description.find('dt');
        console.log(dtElements);
        var ddElements = description.find('dd');
        ddElements.hide(200);

        dtElements.on('click', function (event) {
            var nextMeanDd = $(this).next();

            // pierwotny sposób:
            //if(nextMeanDd.css('display')=='none') {
            //    nextMeanDd.css('display', 'block');
            //} else {
            //    nextMeanDd.css('display', 'none');
            //}

            //kócej-optymalniej:
            nextMeanDd.toggle();
        })
    }

//ex2();

    //zadanie 3.

    function ex3() {


        var formBtn = $('form.Login').find('button.show-hide-btn');
        //var inpuT = formBtn.parent().find('input.user-pass');


        formBtn.on('click', function (event) {
            var $this = $(this);
            var inpuT = $this.parent().find('input.user-pass');
            event.preventDefault(); // żeby nie przeładowywał strony (bo to w formularzu);

            if (inpuT.attr("type")=== "password") {
                inpuT.attr("type", "text");
                console.log('zmieniłem na: text');
            } else {
                inpuT.attr("type", "password");
                console.log('zmieniłem na: password');
            }
        })


    }

    ex3();

// zad. 4.
    function ex3() {
        var elMenu = $('.menu').find('a');

        elMenu.on('mouseenter', function (event) {
                //var $this = $(this);
                console.log('Hura');
                }
            )
        }
// zadanie 5.





});








