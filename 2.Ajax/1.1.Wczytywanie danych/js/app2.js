$(function(){
    function insertPerson(name){ // wrzucanie danych pobranych ajax'em do DOM
        var ul = $('ul');

        var newLi = $('<li>' + name + '</li>');
        newLi.hide(); // ukrywam wiersz nowy, zeby nie wskoczył za szybko

        ul.append(newLi); // po dodaniu
        newLi.fadeIn(); // wiersz siępojawia
    }

    function loadPerson(){
        $.ajax({
            url:'http://showcase.itdotfocus.com/api_simple.php',  // źródło
            dataType:'json' // typ/forma przekazywanych danych to json
        }).done(function(ans){
            ans.forEach(function(el) { // dla kazdego el.
                var person = el.title + ' ' + el.name +' '+ el.surname; // person to trzy dane z ans.
                insertPerson(person); // tą funkcją wrzucam pobrane dane do DOM
            });
        }).always(function(){
            $('button').prop('disabled', false).text('Pobierz ponownie'); //gdy guzik jest już aktywny ma napis Pobierz..
        });
    }

    $('button').on('click', function(){
        $('button').prop('disabled', true).text('Trwa wczytywanie...'); // gdy guzik jest nieaktywny: Trwa wczytywanie
        loadPerson(); // uruchamiamy funkcję łądowania osoby ze źródła...
    });
});