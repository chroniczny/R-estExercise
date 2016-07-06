# jQuery - Ćwiczenia - ProgressBar

Zadanie będzie polegało na animacji elementu ```span```, w taki sposób, aby zasymulować działanie elementu progress bar, po kliknięciu w odpowiedni przycisk.

Po skończeniu zadania pamiętaj o zrobieniu commit-a.

## Punkt 1
Zapoznaj się dokładnie z kodem HTML i CSS dodanym do zadania. Pierwszy krok to dokładne przejrzenie html-a i zmodyfikowanie go.
Każdy div o klasie ```progress-bar``` ma przypisane do niego 3 przyciski.
Napis na przycisku sugeruje Ci, jakie należy ustawić atrybuty elementu button. Użyj atrybutu data z odpowiednimi
prefiksami, np. zauważ, że animacja progress bar-a pierwszego ma przebiegać do 50% jego szerokości, w związku z tym jeden z atrybutów może mieć prefix dla data ```-width```. Potrzebujesz jeszcze dwóch atrybutów: jednego - przechowującego numer progress-bar-a oraz drugiego na kolor.

Plik css masz już przygotowany, przyjrzyj się mu również dokładnie.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać używając jQuery) i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za animowanie progres bar-ami. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

Znajdź następujące elementy i zapisz je do zmiennych:

1. wszystkie przyciski,
2. wszystkie elementy div, symulujące progress bar-y.

Sprawdź czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się, że zawierają poprawne dane.

## Punkt 3
Dodaj do wszystkich przycisków event, który zareaguje na kliknięcie (nie używaj pętli - pamiętaj że działamy w jQuery).
Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 4
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. pobrać do zmiennych wszystkie atrybuty data,
2. ustalić, który progress bar (div) dotyczy tego przycisku, w który kliknął użytkownik,
3. wiesz już w co kliknął użytkownik i który progress-bar chcesz animować, podstaw pod zmienną element ```span``` (wewnątrz diva progress bar)
4. znalezionemu progres bar-owi ustaw odpowiednią klasę z kolorem, a także zaanimuj zmianę jego szerokości, na podstawie danych pobranych z data.

## Punkt 5
Sprawdź jak działa twoja strona. Czy widzisz jakieś problemy?
