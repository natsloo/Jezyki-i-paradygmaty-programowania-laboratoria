function lastWordLength(s){
    s = s.trimEnd();
    //console.log(s);
    let length;
    let spaceIdx = [];
    for (let i = 0;i < s.length; i++){
        if (s[i] === " "){
            spaceIdx.push(i);
        }
    }
    if (spaceIdx.length !== 0) {
        length = s.length - 1 - spaceIdx[spaceIdx.length - 1];
    }
    else {
        length = s.length;
    }
    return length;
}

s = "Hello World";
console.log(lastWordLength(s));
s = "   fly me   to   the moon  ";
console.log(lastWordLength(s));
s = "aaaaaaaaaaaaaa";
console.log(lastWordLength(s));