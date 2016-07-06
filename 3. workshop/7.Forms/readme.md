# jQuery - Ćwiczenia - Forms

Zadanie będzie polegało na stworzeniu skryptu walidującego pola formularza oraz przesłanie danych pod adres [http://www.htmlcodetutorial.com/cgi-bin/mycgi.pl](http://www.htmlcodetutorial.com/cgi-bin/mycgi.pl)

## Punkt 1
Zapoznaj się dokładnie z kodem HTML  dodanym do zadania.
Dopisz adres, pod który chcemy wysłać formularz, do elementu ```form``` w odpowiedni atrybut.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać używając jQuery) i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za obsługę formularza. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. formularz,
2. każde pole formularza (do oddzielnej zmiennej),
3. element div, w którym będziemy pokazywać błędy, jeśli użytkownik wpisze coś nie tak.

Sprawdź czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.

Wypisz zmienne w konsoli,  aby upewnić się, że zawierają poprawne dane.

## Punkt 3
Dodaj do formularza event submit, który zareaguje na kliknięcie. Przekaż do funkcji callback złapany event. Zablokuj domyślne zachowanie eventu submit (pamiętasz funkcję ```event.preventDefault()``` ?)

## Punkt 4
Niech po kliknięciu w przycisk submit zostaną wykonane następujące kroki:

1. Pobierz do zmiennych wartości wpisane przez użytkownika do pól formularza. (Pamiętasz jak pobrać dane z pola input?)
2. Następnie sprawdź każdą wprowadzoną wartość przez użytkownika w następujący sposób:
  * imię musi być dłuższe niż 5 znaków,
  * email powinien zawierać znak ```@``` oraz kropkę ```.```,
  * wiadomość powinna być dłuższa niż 10 znaków.

Jeśli, którakolwiek z tych wartości jest niepoprawna wypisz odpowiedni komunikat w div-ie o klasie ```error```.

## Punkt 5
Sprawdź jak działa twoja strona. Czy widzisz jakieś problemy?
