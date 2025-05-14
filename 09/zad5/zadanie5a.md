Zadanie 5

Zapoznaj się z informacjami o tzw. domknięciach (ang. clousures) w JavaScript.

a) Opisz mechanizm własnymi słowami.

Mechanizm domknięcia to taki "plecak" funkcji, w którym ma spakowane wszystko, co było dookoła niej, gdy ta funkcja była tworzona.
Mamy sytuację, gdzie tworzymy funkcję w funkcji i można powiedzieć, że funkcja wewnętrzna "zapamiętuje swoje środowisko". Dzięki domknięciom mamy cały czas dostęp do zakresu zewnętrznego (outer scope) funkcji wewnętrznej.
Nawet jeśli minie dużo czasu, to domknięcie pozwala zachować zmienne z "plecaka" i pracować z nimi (nie działa tutaj tradycyjny mechanizm usuwania z pamięci).
