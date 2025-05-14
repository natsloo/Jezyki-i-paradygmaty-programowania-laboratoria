function printNumbers(nr) {
    if (typeof nr != 'number'){
        return "Podaj liczbę.\n";
    }
    let liczba = nr.toString();
    liczba = liczba.split("").join(", ");
    return "'" + liczba + "'";
}

console.log(printNumbers(-225.423));
