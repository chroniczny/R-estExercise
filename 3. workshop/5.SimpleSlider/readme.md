# jQuery - Ćwiczenia - SimpleSlider

Zadanie będzie polegało na napisaniu prostego slider-a. Ćwiczenie podzielone jest na punkty. Pamiętaj, żeby trzymać się dokładnie treści punktów i robić je po kolei.

Po skończeniu zadania pamiętaj o zrobieniu commit-a.

## Punkt 1
Zapoznaj się z kodem HTML dodanym do zadania. Do zrobienia slider-a zazwyczaj musimy odpowiednio dostosować style dla listy, w której znajdują się obrazki.
Dlatego po dodaniu  klasy ```slider``` do odpowiedniego elementu wykonaj następujące kroki w css:

1. ustaw elementy listy obok siebie, (jak widzisz obrazki nie mieszczą się wszystkie obok siebie, trzeba będzie ustawić kontenerowi zewnętrznemu (```ul```) taką szerokość, aby zmieściły się wszystkie obok siebie. Zrobimy to za pomocą jQuery, ale spróbuj na razie ustawić taką szerokość kontenera, aby wszystkie obrazki się zmieściły),
2. wyzeruj margines i padding dla elementu ```ul``` (pamiętasz, że przeglądarka nadaje domyślne style niektórym elementom?)
3. ustaw szerokość kontenera nad elementem ```ul``` na szerokość jednego obrazka i nadaj mu styl ```overflow: hidden```.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać używając jQuery) i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za całą animację galerii. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

W stworzonej funkcji znajdź następujące elementy i zapisz je do zmiennych:

1. przycisk `Next`,
2. przycisk `Prev`,
3. wszystkie elementy listy (zapisz do tablicy),
4. dodaj zmienną liczbową, która będzie określała index obrazka, który jest aktualnie widoczny (na początku będzie to pierwszy obrazek - czyli zmienna będzie wskazywała na index 0).
5. ustaw też kolejną zmienną, która będzie przetrzymywać szerokość jednego obrazka, ( przyda nam się za chwilę, aby ustawić szerokość kontenera ```ul``` z wszystkimi obrazkami za pomocą jQuery, a nie css-a).

Sprawdź czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.
Wypisz zmienne w konsoli, aby upewnić się, że zawierają poprawne dane.

## Punkt 3
Ustaw w funkcji szerokość kontenera ```ul``` na podstawie danych, które przetrzymują Twoje zmienne, tak aby wszystkie obrazki mieściły się obok siebie (pamiętaj, aby usunąć szerokość kontenera z css).

## Punkt 4
Dodaj do przycisku `Next`, event, który zareaguje na kliknięcie (nie używaj pętli - pamiętaj, że działamy w jQuery).
Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 5
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. zwiększyć zmienną przetrzymującą index obrazka,
2. sprawdzić, czy przypadkiem zmienna nie przekracza liczby wszystkich obrazków,
3. jeśli wszystko jest w porządku, zaanimuj przesuwanie slajdu, (wykorzystaj własność ```left```), pamiętaj, że element, który przesuwasz (ul) musi mieć ustawione w css ```position: relative```. Zastanów się również, w którą stronę chcesz się przesuwać.

## Punkt 6
Dodaj drugi event, dla przycisku `Prev`. Wykonaj takie same kroki jak dla eventu `Next`. Pamiętaj tylko o warunku, którego nie może przekroczyć zmienna określająca index obrazka w drugą stronę oraz o kierunku przesuwania. Wciąż używamy własności ```left```.

## Punkt 7*
Spróbuj stworzyć jeszcze jedną funkcję, która będzie odpowiedzialna za przesuwanie slajdu po kliknięciu w dowolny przycisk.
Zastanów się jakie parametry należy do niej przekazać. Ustaw jej odpowiednią nazwę i komentarz.

## Punkt 8
Sprawdź jak działa twoja strona. Czy widzisz jakieś problemy?
