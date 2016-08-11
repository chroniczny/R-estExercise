$(document).ready(function () {

//zadanie.1.testowe

    function ex1test() {
        var newDivEl = $('<div class="panel">Some test for ex1.test</div>');
        var peoplelSec = $('.people');
        peoplelSec.after(newDivEl);
    }

    ex1test();

// zad. 1
    function ex1() {
        var peoplelSec = $('.people');
        var addBtn = peoplelSec.children().eq(2);
        //console.log(addBtn.val()); // just checkin
        var userWhat = peoplelSec.find('#addUser');
        var userAge = peoplelSec.find('#age');
        var userList = peoplelSec.find('.main'); // lista ul

        addBtn.on('click', function (event) {
            console.log('dodaj is clicked');
            var $this = $(this);

            var newUserLiEl = $("<li>", {'data-age': userAge.val()}); // atrybuty nowego Li to zapis w formie obiektu - też pobrane z inputa
            newUserLiEl.text(userWhat.val()); // wrucamy mu text pobrany z inputa 'user...
            userList.append(newUserLiEl).children().each(function () {// dodaję element i wykonuję na nim (-nich) koleją funkcję
                // 'each' bo zakładam, że kolor będzie zmieniany nie tylko nowym elementom lecz wszystkim na liście
                var $this = $(this);
                if ($this.data('age') < 15) { // w zależności od wieku przypisuję kolor w css
                    $this.css({color: "green"});
                } else if ((15 <= $this.data('age')) && (($this.data('age') < 41))) {
                    $this.css({color: "blue"});
                } else {
                    $this.css({color: "brown"});
                }
            })


        })
    }

    ex1();

// zad 2.
    function ex2() {

        var whereIam = $('.where-i-am');
        var newSpanEl1 = $("<span>Jestem tutaj: </span>");
        var newSpanEl2 = $("<span>Jestem tutaj: </span>");
        var newSpanEl3 = $("<span>Jestem tutaj: </span>");
        var newSpanEl4 = $("<span>Jestem tutaj: </span>");

        newSpanEl1.appendTo(whereIam).text(newSpanEl1.text()+'append');
        newSpanEl2.prependTo(whereIam).text(newSpanEl2.text()+'prepend');
        newSpanEl3.insertBefore(whereIam).text(newSpanEl3.text()+'insertBefore');
        newSpanEl4.insertAfter(whereIam).text(newSpanEl4.text()+'insertAfter');
// Czy słusznie zauważam, że stworzywszy element mogę go dodać tylko jeden raz do DOM?
        // dlatego muszę stworzyć a 4 spany żeby je dodać w różnych miejscach DOM

    }

    ex2();


});









