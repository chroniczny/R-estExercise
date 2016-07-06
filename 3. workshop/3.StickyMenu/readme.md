# jQuery - Ćwiczenia - Sticky menu

Zadanie będzie polegało na napisaniu sticky menu, czyli menu, które "zahacza" się o górną krawędź przeglądarki i towarzyszy użytkownikowi podczas skrolowania.

Po skończeniu zadania pamiętaj o zrobieniu commit-a.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Menu jest trzymane w liście.

## Punkt 2
Przygotuj do pracy plik JavaScript.  Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać używając jQuery) i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. element ```nav```, który będzie nam potrzebny do tego, aby po wyciągnięciu menu nie podskakiwał nam cały content do góry, ma ustawioną wysokość w css,
2. element ```ul``` o klasie ```menu```,
3. zmienna przechowująca pozycję (top) elementu o klasie ```menu```.

Sprawdź czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Ustaw na elemencie window, event reagujący na skrolowanie, sprawdź czy działa.

## Punkt 4
Podczas scrolowania musisz sprawdzić kiedy przyczepić menu do górnej belki. Stwórz zmienną i pobierz do niej liczbę pikseli, o którą został przewinięty cały element ```document```  (```scrollTop```).
Następnie porównaj otrzymaną wartość z pozycją menu. Jeżeli dystans dokumentu jest większy od dystansu menu, dodaj do menu klasę sticky, w przeciwnym przypadku usuń tą klasę.

## Punkt 5
Ustaw na elemencie ```window``` kolejny event reagujący na zmianę szerokości okna, sprawdź czy działa.

## Punkt 6
Podczas zmiany szerokości okna dystans menu od górnej belki będzie się zmieniał. W tym celu utworzyliśmy event - resize.
Musimy tutaj sprawdzać ponownie dystans dla menu (Zrób warunek, który będzie sprawdzał tą odległość, tylko wtedy jeżeli element menu posiada klasę ```sticky```) i podstaw pod tą samą zmienną co wcześniej, w przeciwnym przypadku, pobierz odległość od górnej belki dla elementu nav.

## Punkt 7
Sprawdź jak działa twoja strona. Widzisz jakieś problemy?
