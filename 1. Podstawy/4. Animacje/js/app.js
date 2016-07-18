$(document).ready(function () {
// zad testowe 1. odpsczamy sobie zgodnie z sugestią
// zad testowe.2.

    var elContent = $('.content');

    elContent.on('click', function(event){
        var $this = $(this);

        $this.animate({opacity: '0.5'}, 2000, function(){ // callback zastosowny...
            $this.animate({opacity: '1'}, 700);
        })
// ... choć można było to zrobić chainingiem: ...animate().animate();
    })

// zad 1.
    function ex1() {

        var buttOns = $('.buttons').children();
        var btn1 = buttOns.eq(0); //guziki są dzićmi elementu o klasie buttons
        var btn2 = buttOns.eq(1);
        var btn3 = buttOns.eq(2);
        var elContent = $('.content');

        btn1.on('click', function (event) {
            elContent.show();
        })

        btn2.on('click', function (event) {
            elContent.hide();
        })
        btn3.on('click', function (event) {
            elContent.toggle(); // toggle domyślnie przełącza display: block/none
        })
    }
    ex1();



// zadanie 2.


//function ex2() { // robi jednorazowo: po naciśnięciu img1 zmienia na img2 i KONIEC
//    var image = $('.images');
//    var image1 = image.find('.img1');
//    var image2 = image.find('.img2');
//
//    image2.css("display", "none");
//    console.log("now U see: " + image1.attr('class'));
//    image1.on('click', function (event) {
//        var $this = $(this);
//        console.log($this.attr('class') + " is clicked and is fading out");
//
//        $this.fadeOut('slow', function () {
//            image2.fadeIn('slow');
//            console.log(image2.attr('class') + " is appeared");
//        });
//    })
//}
    //ex2();

    function ex2prim() { // mam dwa obrazki więc moge w nieskończoność
                        // używać przeskakiwania na rodzeńswo, więc : wciskany znika pojawia się brat itd.
        var image = $('.images');
        var imgTheOnes = image.find('img'); //obrazki - wiem, że są 2

        var image2 = imgTheOnes.eq(1);

        image2.css("display", "none"); // początkowo mamy mieć img2 niewidoczny

        imgTheOnes.on('click', function(event) {
            var $this = $(this);

            $this.fadeOut('slow', function(){
                console.log($this.attr('class') + " is clicked and is fading out");// sprawdzam jaki to element nie mając dostępu do Internetu ;)
                $this.siblings().fadeIn('slow', function() { // zagniździłem funkcję żeby się wykonywały po sobie
                    console.log($this.siblings().attr('class') + " is fading in");
                });
            });
        })
    }
    ex2prim();


//zadanie 3.
function ex3() {
    var select = $('.select');

    var arrow = select.find('.arrow-down');
    var listA = select.find('.select-body');
    var status = false; // domyślny status po otwarciu strony

    arrow.on('click', function (event) {
        var $this = $(this);

        if (status == false) {
            $this.css({transform: "rotate(180deg)"}); // strzałka się obróci
            // alternatywnie mozna to zrobić z pomocą zmiany w klasie css border-top na border-bottom

            listA.slideDown(); //lista się rozwinie
            status = true; // zmieni się status
        } else {
            $this.css({transform: "rotate(360deg)"}); // może być wartość '0deg' oczywiście
            listA.slideUp(); // lista się zwinie
            status = false; // zmiana statusu
        }
        // jest takie coś: status != status;
        // hehe status sięzmieni odpowiednio po każdym kliku, nie potrzebuję tego zmieniać w if'ach
    });
}
    ex3();


// zadanie 4.

    function ex4() {
        var elRunning = $('.runnig-element');
        var positionNew = 0; // zmienna służąca do zmiany wartości przyszłej pozycji elementu
        elRunning.on('click', function (event) {
            var $this = $(this);
            var divChild = $this.children().first(); //pierwsze dziecko elementu wskazanego
            positionNew += 20; // każde kliknięcie zmienia pozycję o dodatkowe 20px

            divChild.animate({left: positionNew}, 2000, function () { //animacja zmienia pozycję, trwa 2s,...
                console.log('przesuwanie zakończone'); // po zakończeniu raportuje do konsoli wykonanie pojedynczego eventu
            })
        })
    };
    ex4();

});








