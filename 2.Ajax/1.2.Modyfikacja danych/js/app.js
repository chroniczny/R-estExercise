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

            var inputTitle = $('.get_title');
            var inputDescription = $('.get_description');

            var liToClone = $('.movie').last();
            console.log(liToClone);
            var newLiMovie = liToClone.clone();
            var newTitle = newLiMovie.find('h3');
            var newDescription = newLiMovie.find('.movie_description');
            newTitle.text(inputTitle.val());
            newDescription.text(inputDescription.val());
            movieLists.append(newLiMovie);

            $.ajax({
                url: movieUrl,
                dataType: 'json',
                type: 'POST',
                data: {
                    title: inputTitle.val(),
                    description: inputDescription.val()
                    //,
                    //"screenings": [{"screening_date": "07.08.2016 godz. 18:00"}, {"screening_date": "07.08.2016 godz. 21:00"}]
                }
            }).done(function () {
                console.log("Movie added");
            }).fail(function () {
                console.log("sorry, I can't POST THAT");
            });
            inputTitle.val();
            inputDescription.val('');
        });
    }

    addMovies();


    function editMovies() {
        movieLists.on('click', '.editMovie', function (event) {
            var btnEdit = $(event.currentTarget);
            console.log('edit kliknięty');

            var editTile = $(event.currentTarget).prev().prev().prev().text();
            var editDscrptn = btnEdit.prev().prev().text();

            var Li = btnEdit.parent(); // wiersz listy-dane filmu to rodzic guzika
            var isEditable = Li.is('.editable');
            Li.prop('contenteditable', !isEditable).toggleClass('editable'); // sprawdza własnosć elementu - przełącza je
            console.log(Li.attr('class'));
            if (Li.attr('class') == 'movie editable') { // uzależniam od klasy Li napis na guziku
                btnEdit.text('Zatwierdź');
            } else {
                btnEdit.text('Zmodyfikuj');
            }

            $.ajax({
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
                console.log('The movie-base is updated')
                //movieLists.empty();
                //loadMovies(); //czy już to usunąłem ze źródła i
            }).fail(function () {
                console.log("sorry, I can't UPDATE IT");
            });
        })
    }

    editMovies();

    function removeMovie() {
        console.log('remove is On...');
        //var buttonDel = movieLists.find('button');

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
                //movieLists.empty();
                //loadMovies(); //czy już to usunąłem ze źródła i
            }).fail(function () {
                console.log("sorry, I can't REMOVE IT");
            });
        })

    }

    removeMovie();

});
  

