# jQuery - Ćwiczenia - Tabs

Zadanie będzie polegało na napisaniu prostego schematu tabów. Założenie, które musi być spełnione: tab-ów i przypisanych do nich tekstów musi być tyle samo.

Po skończeniu zadania pamiętaj o zrobieniu commit-a.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Wszystkie nagłówki tabów są trzymane w liście. Odpowiednio pasujące do nich teksty znajdują się w div-ach.
Zajrzyj do pliku style.css i odpowiednio ustaw klasę rodzicowi ```ul```.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać używając jQuery) i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. wszystkie elementy listy odpowiadające tabom,
2. wszystkie divy odpowiadające tekstom.

Sprawdź czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Dodaj do wszystkich tabów event, który zareaguje na kliknięcie (nie używaj pętli - pamiętaj że działamy w jQuery).
Przetestuj (np. poprzez wyświetlenie w konsoli napisu "Działa").

## Punkt 4
Zmodyfikuj event tak, żeby po kliknięciu w element ```li``` przypisany do niego tekst ```div``` pokazał się na stronie (dla ładnego efektu możesz zastosować jakąś animację).
Wykorzystaj zmienną wskazującą na kliknięty tab, aby odnaleźć przypisany do niej div z tekstem. Pamiętaj, że nie kliknięte taby, nie powinny się wyświetlać.

## Punkt 5
Sprawdź jak działa twoja strona. Widzisz jakieś problemy?
