function stairs(n){
    if (n === 1){
        return 1;
    }
    else if (n === 2){
        return 2;
    }
    else {
        return stairs(n-1) + stairs(n-2);
    }
}

n = 1;
console.log(stairs(n));
n = 2;
console.log(stairs(n));
n = 3;
console.log(stairs(n));
n = 4;
console.log(stairs(n));
n = 5;
console.log(stairs(n));