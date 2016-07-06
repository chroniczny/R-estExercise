# jQuery - Ćwiczenia - InfiniteSlider

Zadanie będzie polegało na napisaniu slider-a, który przerzuca slajdy w nieskończoność, tzn. po skończeniu obrazków wraca na sam początek w przypadku klikania w przycisk next. Ćwiczenie podzielone jest na punkty. Pamiętaj żeby trzymać się dokładnie treści punktów i robić je po kolei.

Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML dodanym do zadania. Do zrobienia slider-a zazwyczaj musimy odpowiednio dostosować style dla listy, w której znajdują się obrazki. Jeśli zrobiłeś poprzednie zadanie wystarczy, że je przekopiujesz. Dodaj również klasę ```slider``` to odpowiedniego elementu w HTML.


## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać używając jQuery) i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za cała animację slider-a. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

W stworzonej funkcji znajdź następujące elementy i zapisz je do zmiennych (takie same jak w poprzednim ćwiczeniu):

1. guzik `Next`,
2. guzik `Prev`,
3. wszystkie elementy listy (zapisz do tablicy),
4. dodaj  zmienną liczbową, która będzie określała index obrazka, który jest aktualnie widoczny (na początku będzie to pierwszy obrazek - czyli zmienna będzie wskazywała na index 0),
5. ustaw też kolejną zmienną, która będzie przetrzymywać szerokość jednego obrazka.

Sprawdź czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.
Wypisz zmienne w konsoli, aby upewnić się, że zawierają poprawne dane.

## Punkt 3
Stwórz zmienne, do których sklonujesz pierwszy i ostatni element listy i od razu wstaw je w następujący sposób:
- pierwszy element sklonuj i wstaw na sam koniec listy,
- sklonuj też ostatni element i wstaw go na początek listy.

### W jakim celu klonujemy te elementy?

Wyobraź sobie, że mamy slider składający się z 4 obrazków. Przyjrzyj się dokładnie poniższym rysunkom.

1. Pozycja wyjściowa:

  ![slider1](workshop-img/1.jpg)

2. Po kliknięciu w przycisk ```Next```, następuje przesunięcie całego kontenera o szerokość obrazka:

  ![slider1](workshop-img/2.jpg)

3. Po kliknięciu w przycisk ```Next```, następuje przesunięcie całego kontenera o szerokość obrazka:

  ![slider1](workshop-img/3.jpg)

4. Po kliknięciu w przycisk ```Next```, następuje przesunięcie całego kontenera o szerokość obrazka.

  ![slider1](workshop-img/4.jpg)

4. Po kliknięciu w przycisk ```Next```, następuje przesunięcie na sklonowany element pierwszy i od razu niezauważalny powrót na element pierwszy.

  ![slider1](workshop-img/5.jpg)
  ![slider1](workshop-img/1.jpg)

## Punkt 4
Wracamy do naszego kodu.

Ustaw w funkcji szerokość kontenera ```ul```, na podstawie danych, które przetrzymują Twoje zmienne, tak aby wszystkie obrazki mieściły się obok siebie (pamiętaj, aby usunąć szerokość kontenera z css)

## Punkt 5
Dodaj do przycisku ```Next``` event, który zareaguje na kliknięcie (nie używaj pętli – pamiętaj, że działamy w jQuery).
Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 6
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. zwiększyć zmienną przetrzymującą index obrazka,
2. wykorzystaj funkcję animate do przesunięcia kontenera ul, w taki sposób, aby przesunąć kontener i w przypadku jeżeli jesteśmy ustawieni na ostatnim obrazku automatycznie przesunąć slider na obrazek pierwszy (warunek - if)
Żeby to zrobić wykorzystaj funkcję complete w animate. Czyli po skończeniu animacji przesuń slider na pierwszy element.

## Punkt 6
Dodaj drugi event, dla przycisku ```Prev```. Wykonaj takie same kroki jak dla eventu ```Next```. Pamiętaj tylko o warunku, którego nie może przekroczyć zmienna określająca index obrazka w drugą stronę oraz o kierunku przesuwania. Wciąż używamy własności left. Tak samo wykorzystaj funkcję complete.

## Punkt 7
Spróbuj przenieś kod z eventu do funkcji.
Zastanów się jakie parametry należy do niej przekazać. Ustaw jej odpowiednią nazwę i komentarz.

## Punkt 8
Sprawdź jak działa twoja strona. Czy widzisz jakieś problemy?
