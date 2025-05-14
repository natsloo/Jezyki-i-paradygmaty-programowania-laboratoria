function romanValue(o) {
    let symbols = [
        {symbol: 'I', value: 1},
        {symbol: 'V', value: 5},
        {symbol: 'X', value: 10},
        {symbol: 'L', value: 50},
        {symbol: 'C', value: 100},
        {symbol: 'D', value: 500},
        {symbol: 'M', value: 1000},
    ]
    for (let item of symbols) {
        if (item.symbol === o){
            return item.value;
        }
    }
}

function roman(s) {
    let result = 0;
    let previous = 0;
    for (let i = s.length - 1;i >= 0;i--){
        let v = romanValue(s[i]);
        if (v >= previous) {
            result += v;
        }
        else {
            result -= v;
        }
        previous = v;
    }
    return result;
}

s = "III";
console.log(roman(s));
s = "LVIII";
console.log(roman(s));
s = "MCMXCIV";
console.log(roman(s));