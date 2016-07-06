# jQuery - Modyfikacja danych


# Zadanie 1
Pod adresem http://api.coderslab.pl/movies jest przechowywana baza filmów. Twoim zadaniem jest wczytanie ich do HTML-a, za pomocą metody $.ajax(), konkretnie do elementu ```ul``` o klasie ```repertuar```.
Przydatne wskazówki:
* zapoznaj się z plikiem HTML (czyli, gdzie dokładnie "wstrzyknąć" filmy),
* zapoznaj się z plikiem JavaScript, wstaw pod odpowiednie zmienne: adres URL oraz element ```ul```,
* wykorzystaj wiedzę (i kod) z poprzedniego zadania i wstaw tytuł filmu oraz opis do elementu ```ul```.

# Zadanie 2
Zadanie polega na tym, aby po wpisaniu tytułu i krótkiego opisu do pól formularza o klasie ```add_movie```,  filmy dodały się do bazy. W tym celu:
* stwórz odpowiednią funkcję w pliku JavaScript np. o nazwie addMovie(). Wewnątrz niej obsłuż formularz za pomocą odpowiedniego eventu. Po uruchomieniu eventu:
** pobierz dane z formularza i za pomocą metody $.ajax() wyślij je do bazy, ustawiając odpowiednią metodę HTTP. Pamiętaj o tym, aby odpowiednio skonstruować dane do wysłania. Przykład znajdziesz
w Opisie Api, poniżej.


# Zadanie 3
Zadanie polega na usunięciu film z serwera. W tym celu:
* stwórz odpowiednią funkcję np. removeMovie(),
* musisz teraz wrócić do funkcji z Zadania 1 i zmodyfikować ją tak, aby przy wczytywaniu filmów dodawała również przycisk ```Usuń``` (pamiętaj o ustawieniu mu odpowiedniej klasy),
* wewnątrz funkcji removeMovie() ustaw event, dla przycisku ```Usuń``` (sprawdź czy działa),
* po uruchomieniu eventu, wywołaj metodę $.ajax() z odpowiednimi ustawieniami do usunięcia określonego filmu,
* pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz usunąć film o id=2 wysyłasz żądanie pod adres http://api.coderslab.pl/movies/2 . Skąd wziąć id filmu? Musisz każdemu elementowi listy  dodać ```id``` (dodajesz ```id``` do tagu ```li```). Pobierzesz je z danych, zwróconych przy wczytywaniu filmów. Zmodyfikuj funkcję wczytującą filmy z zadania 1.

# Zadanie 4
Zadanie polega na zmodyfikowaniu filmu na serwerze. W tym celu:
* stwórz odpowiednią funkcję np. updateMovie(),
* musisz znowu wrócić do funkcji z Zadania 1 i zmodyfikować ją tak, aby przy wczytywaniu filmów dodawała również przycisk ```Zmodyfikuj``` (pamiętaj o ustawieniu mu odpowiedniej klasy),
* wewnątrz funkcji updateMovie() ustaw event, dla przycisku ```Zmodyfikuj``` (sprawdź czy działa),
* przy modyfikacji musisz także wysłać odpowiednie dane pobrane z treści strony. W tym celu wewnątrz eventu obsługującego przycisk ```Zmodyfikuj```, napisz kod dodający do elementu ```li``` atrybut ```contenteditable``` i ostyluj go odpowiednio (białe tło, obramowanie). W trakcie edycji zmień również napis na przycisku z ```Zmodyfikuj``` na ```Zatwierdź```  (pamiętaj o ustawieniu mu odpowiedniej klasy),
* pobierz zmienione dane, po kliknięciu w przycisk ```Zatwierdź``` i wyślij je za pomocą metody $.ajax do bazy.
Pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz usunąć film o id=2 wysyłasz żądanie pod adres http://api.coderslab.pl/movies/2 . Skąd wziąć id filmu? To już wiesz z poprzedniego zadania.


## Opis API - Zasoby
* GET: http://api.coderslab.pl/movies -> zwraca tablicę z obiektami filmów.

* GET: http://api.coderslab.pl/movies/{id} -> zwraca jeden film + jego seanse. Zwraca false jak nie ma takiego filmu.

* POST: http://api.coderslab.pl/movies -> dodaje nowy film do bazy. JSON powinien wyglądać tak:
{"title":"Foo","description":"bar","screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"}]}

* PUT: http://api.coderslab.pl/movies/{id} -> zmienia film. JSON powinien wyglądać tak:
{"title":"FOOBAR","description":"BARFOO","screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"},{"screening_date":"Foo sccrening 3"},{"screening_date":"Foo sccrening 4"}]}
Można dowolnie modyfikować ilość seansów w filmie (ale trzeba podać wszystkie - jak nic nie podamy to kasuje stare seanse). Zwraca seans jeżeli się udało, false jeżeli nie.

* DELETE: http://api.coderslab.pl/movies/{id} -> Kasuje film. Zwraca zawsze true.

#Zadanie 5 ```*```
Zadanie polega na tym, aby przejść wszystkie wcześniejsze zadania i wczytywać/dodawać/modyfikować również seanse dla każdego filmu. Sprawdź jak wygląda JSON przy wczytywaniu danych.
