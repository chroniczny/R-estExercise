$(function () {

    //variables for main ul list
    var movieLists = $('.repertuar');
    //variables for url
    var movieUrl = 'http://api.coderslab.pl/movies';

    $('form').on('click', function (event) { // blokuję przeładowanie trony
        event.preventDefault();
    });

    /* Insert Movies to DOM  */
    function insertContent(movies, descriptions) {

        var li = $('<li>', {class: "movie"});
        var desc = $('<div>', {class: "movie_description"});
        var titleH = $('<h3>');
        var deleteBtn = $('<button class="removeMovie" value="Usuń film">Usuń film</button>');
        var updateBtn = $('<button class="editMovie" value="Zmodyfikuj">Zmodyfikuj</button>');

        titleH.html(movies);
        desc.html(descriptions);

        movieLists.append(li);
        li.append(titleH); // tytył filmu to h3
        li.append(desc); // opis filmu będzie div'em w liście
        li.append(deleteBtn); // wrzucam guzik do usuwania
        li.append(updateBtn); // wrzucam guzik do edytowania
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
                insertContent(tytlE, desctiptioN);
            })
        }).fail(function (error) {
            console.log(error)
        })
    }

    loadMovies();

    function addMovies() {
        var addMovBtn = $('#addMovie');
        addMovBtn.on('click', function () {

            var inputTitle = $('.get_title'); // znajdujemy input dla tytułu
            var inputDescription = $('.get_description'); // ... opis dla filmu

            var liToClone = $('.movie').last(); // wybieramy cały istniejący element do sklonowania (np. ostatni);
            console.log(liToClone);  //
            var newLiMovie = liToClone.clone();  // nowy element bedzie klonem powyższego
            var newTitle = newLiMovie.find('h3'); // tytuł w nowym elemenvie filmu
            var newDescription = newLiMovie.find('.movie_description'); // opis ...
            newTitle.text(inputTitle.val()); // wrzucam z inputa tytuł do nowego elementu
            newDescription.text(inputDescription.val()); // wrzucam też pis
            movieLists.append(newLiMovie); // utworzony element dodaję do DOM

            $.ajax({
                url: movieUrl,
                dataType: 'json',
                type: 'POST',
                data: {
                    title: inputTitle.val(), // treść inputu wysyłam ...
                    description: inputDescription.val() // analogicznie jw.
                    //,
                    //"screenings": [{"screening_date": "07.08.2016 godz. 18:00"}, {"screening_date": "07.08.2016 godz. 21:00"}]
                }
            }).done(function () {
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
            var btnEdit = $(event.currentTarget); // uzywam currentTarget zeby wskazać dokłądnie, ze to guzik został kliknięty
            console.log('edit kliknięty');

            var editTile = $(event.currentTarget).prev().prev().prev().text(); //dostaję się po drzewie do tytułu. działam na elemencie jquery: $(...)!!!
            var editDscrptn = btnEdit.prev().prev().text(); // skaczę o drzewie zeby wyciągnąć opis filmu

            var Li = btnEdit.parent(); // wiersz listy-dane filmu to rodzic guzika
            var isEditable = Li.is('.editable');
            Li.prop('contenteditable', !isEditable).toggleClass('editable'); // sprawdza własnosć elementu - przełącza je
            console.log(Li.attr('class'));
            if (Li.hasClass('editable')) { // uzależniam od posiadania klasy Li napis na guziku
                btnEdit.text('Zatwierdź'); // element będący w trybie edycji (klasa editable) - guzik będziem iał napis Zatwierdź
            } else {
                btnEdit.text('Zmodyfikuj'); // gdy pole przestaje być edytowalne (bez klasy editable) tzn. że Zatwierdzamy zmiany

                $.ajax({ // ajax daję dopiero po wyjścu z edycji elementu, żeby na wejściu nie robił tego niepotrzebnie
                    // jak zmieniamy (lub nie) edyowalny element, to Zatwierdzamy i dopiero wówczas zachodzi update ajaxem PUT...
                    url: 'http://api.coderslab.pl/movies/{id}',
                    type: 'PUT',
                    dataType: 'json',
                    data: {
                        "title": editTile, // tytuł jest id obiektu wyrzucanego?
                        "description": editDscrptn
                        //,
                        //"screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"},{"screening_date":"Foo sccrening 3"},{"screening_date":"Foo sccrening 4"}]
                    }
                }).done(function () {
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
            parOfBtn.remove();

            $.ajax({
                url: 'http://api.coderslab.pl/movies/{id}',
                type: 'DELETE',
                dataType: 'json',
                data: {
                    "title": delTitle, // tytuł jest id obiektu wyrzucanego?
                    "description": delDescription
                    //,
                    //"screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"},{"screening_date":"Foo sccrening 3"},{"screening_date":"Foo sccrening 4"}]
                }
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
  

