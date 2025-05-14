function f(){
    let x = 5;
    return function(){
        return x;
    }
}
console.log(f()())

let y = f();

console.log(y())
