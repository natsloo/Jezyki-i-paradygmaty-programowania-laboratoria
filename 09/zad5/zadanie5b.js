// b) Stwórz funkcję createCounter, która zwraca funkcję inkrementującą licznik. Funkcja zwrócona przez createCounter powinna:
// - Zwiększać wartość licznika o 1 przy każdym wywołaniu,
// - Zwracać bieżącą wartość licznika po każdej inkrementacji.
// Dodatkowo funkcja createCounter powinna działać tak, że za każdym razem, gdy wywołujesz createCounter, tworzysz nowy licznik, który ma swoją własną odrębną wartość, niezależną od innych liczników. Użyj w tym celu mechanizmu domknięć.

function createCounter(){
    let counter = 0;
    return function() {
        counter++;
        return counter;
    };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());