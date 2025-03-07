Zad. 1
Omów i scharakteryzuj każdą z cech “danej”. Dana jest charakteryzowana przez:
- adres:
Adres to miejsce w pamięci komputera, w którym przechowywana jest dana. Każda zmienna zajmuje określoną przestrzeń w pamięci operacyjnej i ma swój unikalny adres, pod którym można odczytać lub zmienić jej wartość. Adres jest zatem unikalnym identyfikatorem danej.
- nazwę (identyfikator):
Nazwa to etykieta przypisana danej, która pozwala programiście odwoływać się do tej zmiennej w kodzie. Stanowi pewien skrót do adresu.
- wartość
To aktualna treść zmiennej, czyli dane, które są przechowywane pod jej adresem w pamięci. Wartość może się zmieniać w czasie działania programu (o ile dana nie jest stałą).
- typ
Typ określa, jaki rodzaj danych przechowuje zmienna oraz jakie operacje można na niej wykonywać. Typ definiuje też ile miejsca zajmuje dana w pamięci.
- okres życia (często = czas działania programu)
Okres życia zmiennej to czas, przez jaki zmienna istnieje w pamięci. Najczęściej odpowiada to czasowi działania programu, ale zmienne lokalne istnieją tylko w czasie działania funkcji czy bloku, w którym zostały zadeklarowane. W C++ czas życia zmiennej najczęściej określają nawiasy `{}`.
- zakres widoczności (skąd można do zmiennej się odwołać)
Zakres widoczności określa, z których miejsc w kodzie można się do zmiennej odwołać. To bardzo ważne dla organizacji programu i unikania konfliktów nazw.