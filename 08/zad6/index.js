function random(max){
    return Math.floor(Math.random()*(max+1));
}

function sum(tab){
    let suma = 0;
    for(let i = 0;i < tab.length;i++){
        suma += tab[i];
    }
    return suma;
}

let tab = []
let max = 172
let nr = 20
for (let i = 0; i < nr;i++){
    tab[i] = random(max)
}
console.log("nieposortowana:")
console.log(tab.join(" "));
tab.sort((a, b) => a - b)

/*
 Jeśli funkcja przekazana do sort() zwraca:
      - liczbę ujemną → a przed b
      - 0 → bez zmian
      - liczbę dodatnią → b przed a
*/

console.log("posortowana:")
console.log(tab.join(" "));
let numsum = sum(tab)
console.log("Sum:", numsum, "Avg:", numsum/nr);


