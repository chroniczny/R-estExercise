$(function () {

    //variables for main ul list
    var movieLists = $('.repertuar');

    var movieUrl = 'http://api.coderslab.pl/movies';

    var inptScreenings = $('<label>Seanse: <textarea type="text" class="screen" placeholder="dd.mm.yyyy godz. hh:mm"></textarea></label>');
    var btnAddScreen = $('<button id="addScreen">Dodaj kolejny seans</button>');
    var btnDelScreen = $('<button id="removeScreen">Usuń ten seans</button>');
    inptScreenings.append(btnAddScreen);
    inptScreenings.append(btnDelScreen);
    var form = $('form');
    var inputTitle = $('.get_title'); // znajdujemy input dla tytułu
    var inputDescription = $('.get_description'); // ... opis dla filmu
    $('#addMovie').before(inptScreenings); // muszęmieć input do wpisania seansów dodawanych filmów

    form.on('click', function (event) { // blokuję przeładowanie trony
        event.preventDefault();
    });

    form.on('click', '#addScreen', function (event) {
        var newinptScreenings = $(this).parent().clone();
        $(this).parent().after(newinptScreenings);


    });
    form.on('click', '#removeScreen', function (event) {
        $(this).parent().remove();

    });


    /* Insert Movies to DOM  */
    function insertContent(movies, descriptions, movId, movScreenings) {
        var editedEl = $('[data-id="' + movId + '"]');
        if (searchinEl.length > 0) { // jeżeli znalazłem element spełniajacy.. czyli element o data-id=...
            var li = editedEl;
        } else {

            var li = $('<li>', {class: "movie"});
            var desc = $('<div>', {class: "movie_description"});
            var titleH = $('<h3>');
            var deleteBtn = $('<button class="removeMovie" value="Usuń film">Usuń film</button>');
            var ulScreenings = $('<ul>', {class: 'movScreenings'});
            var updateBtn = $('<button class="editMovie" value="Zmodyfikuj">Zmodyfikuj</button>');


            li.attr('data-id', movId);
            titleH.html(movies);
            desc.html(descriptions);
            ulScreenings.text('Seanse dla tego filmu: ');


            if (movScreenings.length !== 0) { // jeśli istnieją jakieś textareas (seanse) w ul

                for (var i = 0; i < movScreenings.length; i++) { //dla każdego wpisanego seansu
                    var newScrLi = $('<li>', {class: "screeningOne"}); // utwórz wiersz z seansem
                    console.log(movScreenings[i].screening_date); //
                    var seans = movScreenings[i].screening_date; // seans będzie elementem z screening_date wziętym z
                    newScrLi.text(seans);
                    ulScreenings.append(newScrLi);
                }
            }
            movieLists.append(li);
            li.append(titleH); // tytył filmu to h3
            li.append(desc); // opis filmu będzie div'em w liście

            li.append(deleteBtn); // wrzucam guzik do usuwania
            li.append(updateBtn); // wrzucam guzik do edytowania
            li.append(ulScreenings);
        }
    }

    /* Load movies and insert them into the DOM */
    function loadMovies() {
        $.ajax({
            url: movieUrl
        }).done(function (ans) {
            //console.log(ans); //ładuje jsona do konsoli
            ans.forEach(function (el) {
                var tytlE = el.title;
                //console.log(tytlE); // wypisuje w kons. tytuł
                var desctiptioN = el.description;
                //console.log(desctiptioN); // wypisuje w kons. opis
                var idMovie = el.id; // pobieram id filmu - żeby go zapisać jako atrybut data-id>> do wskazywania np. w usuwaniu
                var screenings = el.screenings;
                console.log(screenings);


                insertContent(tytlE, desctiptioN, idMovie, screenings);


            })
        }).fail(function (error) {
            console.log(error)
        })
    }

    loadMovies();

    function addMovies() {
        var addMovBtn = $('#addMovie');
        addMovBtn.on('click', function () {

            //>>>> **** TU CZĘSC KODU, KTÓRA SIĘPRZYDAŁA W PIERWSZEJ CZĘSCI ZADANIA...
            // potem juz komunikacja z bazą dodaje mi sama po władowaniu elementy... więc tego nie potrzebuję *****
            //var inputTitle = $('.get_title'); // znajdujemy input dla tytułu
            //var inputDescription = $('.get_description'); // ... opis dla filmu

            //var liToClone = $('.movie').last(); // wybieramy cały istniejący element do sklonowania (np. ostatni);
            //console.log(liToClone);  //
            //var newLiMovie = liToClone.clone();  // nowy element bedzie klonem powyższego
            //var newTitle = newLiMovie.find('h3'); // tytuł w nowym elemenvie filmu
            //var newDescription = newLiMovie.find('.movie_description'); // opis ...
            //var newScrMovUl = newLiMovie.find('.movScreenings'); // lista ul seansów
            //newTitle.text(inputTitle.val()); // wrzucam z inputa tytuł do nowego elementu
            //newDescription.text(inputDescription.val()); // wrzucam też pis
            //movieLists.append(newLiMovie); // utworzony element dodaję do DOM

            //tablica z seansami:
            var screeningsToPost = [];

            function makeScreenArray() {

                var screenToPost = form.find('.screen');

                for (var i = 0; i < screenToPost.length; i++) {
                    screeningsToPost.push({screening_date: $(screenToPost[i]).val()});
                }
                console.log(screeningsToPost);
                return screeningsToPost;
            }

            makeScreenArray();

            $.ajax({
                url: movieUrl,
                dataType: 'json',
                type: 'POST',
                data: JSON.stringify(
                    {
                        title: inputTitle.val(), // treść inputu wysyłam ...
                        description: inputDescription.val(), // analogicznie jw.
                        screenings: screeningsToPost
                    })
            }).done(function (ans) {
                insertContent(ans.title, ans.description, ans.id, ans.screenings);// ***** odwołanie się do tej funkcji
                // załatwia mi sprawę dodawania całego elementu dot. filmu - przeładowuje się i doda sam z bazy,
                // muszę tylko wskzać odpowidnie zmienne w funkcji ans.title itd.

                console.log("Movie added"); // jeśli się udało chcę wiedzieć
                alert("Movie added"); // denerwujące, ale komunikatywne
            }).fail(function () {
                console.log("sorry, I can't POST THAT");
                alert("sorry, I can't POST THAT"); // denerwujące, ale komunikatywne
            });
            inputTitle.val(''); // czyścimy inputy po dodaniu filmu
            inputDescription.val('');
        });
    }

    addMovies();


    function editMovies() {

        movieLists.on('click', '.editMovie', function (event) { // event na liście eby brał zawsze aktualne elementy wewnąrz
            // ale klikanie na guzik "editMovie"
            //var $this = $(this);
            var btnEdit = $(event.currentTarget); // uzywam currentTarget zeby wskazać dokłądnie, ze to guzik został kliknięty
            console.log('edit kliknięty');

            var editTile = $(event.currentTarget).prev().prev().prev().text(); //dostaję się po drzewie do tytułu. działam na elemencie jquery: $(...)!!!
            var editDscrptn = btnEdit.prev().prev().text(); // skaczę o drzewie zeby wyciągnąć opis filmu
            var Li = btnEdit.parent(); // wiersz listy-dane filmu to rodzic guzika
            var idData = Li.attr('data-id'); // wartosć atrybutu data-id ważne dla wskazzania który film edytujemy...

// **** SEANSE MUSZĘ UAKTUALNIĆ:
            var screeningsToPut = [];
            function takeScreenArray() {
                var screenToPut = $(Li).find('.screeningOne'); // z rodzica guzikamodyfikacji (czyli w filmie z danymi) znajduję seanse pojedyncze
                for (var i = 0; i < screenToPut.length; i++) {
                    screeningsToPut.push({screening_date: $(screenToPut[i]).val()}); // każdy seans wrzucam do tablicy
                }
                console.log(screeningsToPut);
                return screeningsToPut; // wyciągam tę tablicę do uzycia w ajax 'PUT'...
            }
            takeScreenArray();

            // WŁĄCZAM EDYTOWALNOŚĆ CAŁEGO ELEMENTU Li-movie
            var isEditable = Li.is('.editable');
            Li.prop('contenteditable', !isEditable).toggleClass('editable'); // sprawdza własnosć elementu - przełącza je jeśli są 'nieedytowalne'
            console.log(Li.attr('class'));


            // CO SIĘ DZIEJE Z GUZIKIEM: Zatwierdź/Zmodyfikuj
            if (Li.hasClass('editable')) { // uzależniam od posiadania klasy Li napis na guziku
                btnEdit.text('Zatwierdź'); // element będący w trybie edycji (klasa editable) - guzik będziem iał napis Zatwierdź
            } else {
                btnEdit.text('Zmodyfikuj'); // gdy pole przestaje być edytowalne (bez klasy editable) tzn. że Zatwierdzamy zmiany


                $.ajax({ // ajax daję dopiero po wyjścu z edycji elementu, żeby na wejściu nie robił tego niepotrzebnie
                    // jak zmieniamy (lub nie) edyowalny element, to Zatwierdzamy i dopiero wówczas zachodzi update ajaxem PUT...
                    url: 'http://api.coderslab.pl/movies/' + idData, // /{id} musze dodać aby wskazać w bazie o ktory film chodzi
                    dataType: 'json',
                    type: 'PUT',
                    data: JSON.stringify({
                        title: editTile, // tytuł jest id obiektu wyrzucanego?
                        description: editDscrptn,
                        screenings: screeningsToPut // ******* WRZUCAM seanse POBRANE ZE ZMODYFIKOWANEGO ELEMENTU
                    })
                }).done(function () {
                    insertContent(ans.title, ans.description, ans.id, ans.screenings); // do podmiany sprawdzam bazę...


                    console.log('The movie-base is updated');
                    alert('The movie-base is updated'); // komunikuję się z użytkownikiem
                }).fail(function () {
                    console.log("sorry, I can't UPDATE IT");
                    alert("sorry, I can't UPDATE IT"); // komunikuję się z użytkownikiem
                });
            }

        })
    }

    editMovies();

    function removeMovie() {

        movieLists.on('click', '.removeMovie', function (event) { // event wywoływany na ul ale po kliknięciu na guzik!

            var btnDel = $(event.currentTarget); // znajduję kliknięty guzik
            var delTitle = $(event.currentTarget).prev().prev().text();// żeby .parent() zadziałało, muszę zmienić element na element jquery
            // poprzez $(...)
            var delDescription = btnDel.prev().text();
            console.log(delTitle);
            console.log(delDescription);

            var parOfBtn = $(event.currentTarget).parent(); // znajduję jego rodzica
            var idData = parOfBtn.attr('data-id'); // tu moje Li to parOBtn
            parOfBtn.remove();

            $.ajax({
                url: 'http://api.coderslab.pl/movies/' + idData,
                dataType: 'json',
                type: 'DELETE'
                //,
                //data: JSON.stringify({
                //    "title": delTitle, // tytuł jest id obiektu wyrzucanego?
                //    "description": delDescription
                //    //,
                //    //"screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"},{"screening_date":"Foo sccrening 3"},{"screening_date":"Foo sccrening 4"}]
                //})
            }).done(function () {
                console.log('Movie ' + delTitle + ' is deleted');
                alert('Movie ' + delTitle + ' is deleted');

            }).fail(function () {
                console.log("sorry, I can't REMOVE IT");
                alert("sorry, I can't REMOVE IT");
            });
        })

    }

    removeMovie();

});
  

