$(document).ready(function () {

    // zad. 1
    function ex1() {
        var peoplelSec = $('.people');
        var addBtn = peoplelSec.children().eq(2);
        var userWhat = peoplelSec.find('#addUser');
        var userAge = peoplelSec.find('#age');
        var userList = peoplelSec.find('.main');

        addBtn.on('click', function (event) {
            console.log('dodaj is clicked');
            var $this = $(this);

            var newUserLiEl = $("<li>", {'data-age': userAge.val()}); // atrybuty nowego to zapis w formie obiektu
            newUserLiEl.text(userWhat.val());
            userList.append(newUserLiEl).children().each(function () {// dodaję element i wykonujękoleją funkcję
                // 'each' bo zakładam, że kolor będzie zmieniany nie tylko nowym elementom lecz wszystkim na liście
                var $this = $(this);
                if ($this.data('age') < 15) {
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

//7. EVENTY ZAAWANSOWANE zadanie.  1.

function extra7() {
    var peopleEl = $('.people');

    var main = peopleEl.find('.main');

    main.on('click', 'li', function (event) { // aby dodać guzik 'Usuń' muszę kliknąć na element listy
        var newBtn = $('<button>Usuń</button>'); // tworzę guik
        var $this = $(this);
        if ($this.children().length == 0) { // żeby mi się guziki przy każdym kliku nie dodawały ;))
                                            // dodają się, jeśli Li nie ma dzieci (czyli guzików)
        newBtn.appendTo($this); // guzik dodaj do Li
        }
    });

    main.on('click', 'button', function(event) {// do przypisania eventu używam "trzeci parametr": 'button'
                                                                // klikniecie na 'Usuń' usuwa rodzica guzika z listy
        var $this = $(this);
        $this.parent().remove(); // rodzic guzika jest usuwany
    })
}
    extra7();

});









