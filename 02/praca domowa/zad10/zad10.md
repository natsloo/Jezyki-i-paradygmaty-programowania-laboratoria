# Zad. 10

1. Zakresy ustalane statycznie.

output:
```cpp
g: 3 2
f: 3 4
f: 4 6
```
Ustalany statycznie zakres zmiennych określa się na podstawie miejsca tych zmiennych w kodzie.

Zadeklarowane na początku programu zmienne `int x = 2; int y = 1;` są zmiennymi globalnymi. Natomiast `int x = 1;` deklarowane w funkcji `g()` jest zmienną lokalną, dostępną tylko w tej funkcji i to jej wartość (3) jest wypisywana. Jeśli chodzi o zmienną `y`, to nigdzie nie ma jej drugiej deklaracji, zawsze działamy więc na zmiennej globalnej.

2. Zakresy ustalane dynamicznie.

output:
```cpp
g: 3 2
f: 4 4
f: 3 6
```
Jeśli dany język wykorzystuje ustalanie dynamiczne to zakres zmiennych zależy od stanu stosu wywołań w danym momencie.

Zmiana w wyniku funkcji `f()` bierze się właśnie z tego, że jej pierwsze wywołanie korzysta ze zmiennej `x` ze stosu wywołań, czyli `x` zadeklarowanego w funkcji `g()`, z której funkcja `f()` została wywołana.
Drugie wywołanie funkcji `f()` korzysta już z zadeklarowanych na początku programu zmiennych globalnych. 

