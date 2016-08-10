$(function () {
    function insertPerson(name, points) { // wrzucanie danych do DOM: dwa parametry pozyskane przez ajax
        var ul = $('ul'); // lista
        if (points <= 3) {  // w zależności od pozyskanej ilosci punktów różnicujemy kolor zmiennej...
            var classCol = 'red';

        } else if (points <= 7) {
            var classCol = 'yellow';
        } else {
            var classCol = 'green';
        }

        var newLi = $('<li>' + name + ' - ' + points + '/10</li>'); // wiersz otrzyma imię i ilość punktów...
        newLi.css('color', classCol); // oraz odpowieni do zmiennej - kolor (rowiązanie zaproponowane żeby bez arkusza css...)
        newLi.hide(); // ukrywamy wiersz

        ul.append(newLi); // po dodaniu do DOM...
        newLi.fadeIn(); // pojawi się wiers
    }

    function loadPerson() {
        $('ul').empty(); // empty: kasuje wszystkie dzieci danego elementu...
                         // tu: czyści listę żeby móc dopisywać - odnawiać

        $.ajax({
            url: 'http://showcase.itdotfocus.com/api_simple.php',
            dataType: 'json'
        }).done(function (ans) {
            console.log(ans); // wczytujemy do konsoli pobrane dane, żeby zobaczyć ich strukturę:
                                // okazuje się, że to OBIEKT a w nim sa properties-osoby, i ich wartości w postaci punktów
            for (var prop in ans) { // iterując po obiekcie ans
                var person = prop;// properties - nazwa właściwości - tu person
                var pointsOfPer = ans[prop]; // wartość tej właściwości - tu ilosć punktów
                console.log(person, pointsOfPer);
                insertPerson(person, pointsOfPer); // tą funkcją wrzucam dane do DOM podając: osobę i ilość punktów
                                                    // funkcja ma 2 paramety
            }

        }).always(function () {
            $('button').prop('disabled', false).text('Pobierz ponownie'); // tu znowu gdy guzik wraca do aktywnosci
                                                                        // zmienia się napis na "pobierz ponownie..."
        });
    }

    $('button').on('click', function () {
        $('button').prop('disabled', true).text('Trwa wczytywanie...'); // gdy guzik nieaktywny: Trwa wczytywanie...
        loadPerson();
    });
});