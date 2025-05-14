Zadanie 4
Zapoznaj się z informacjami o dziedziczeniu prototypowym w Javascript.

a) Jak się to ma do działania obiektów i “klas” w Javascript? Dlaczego mówimy, że w Javascript klasy są tzw. “syntax sugar”? Opisz mechanizm własnymi słowami.

Obiekt prototypowy dla obiektu dziedziczącego to taka starsza siostra, od której pożycza się ubrania i kosmetyki (metody i pola). 
Za pomocą obiektów prototypowych można stworzyć łańcuch prototypów i poszukiwanie wartości może się piąć coraz wyżej z każdym dodanym do łańcucha obiektem.
Jeśli chcemy użyć jakiejś funkcjonalności, to JS szuka najpierw tej funkcjonalności bezpośrednio w danym obiekcie. Jeśli jej nie znajdzie, to za pomocą referencji będzie o nie "pytał" najbliższy obiekt prototypowy danego obiektu dziedziczącego.

Klasy to "syntax sugar", ponieważ są tylko uproszczeniem zapisu dla programisty, upodobnieniem go do innych języków obiektowych, ale nie zmieniają wiele w działaniu. 
Słowo kluczowe `class` jest po prostu nakładką na mechanizm dziedziczenia prototypowego, ale dla większości programistów taki sposób tworzenia nowych typów jest bardziej intuicyjny.
