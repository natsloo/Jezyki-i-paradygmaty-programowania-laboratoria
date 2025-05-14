function checkPalindrome(txt){
    if (typeof txt != "string"){
        return false
    }
    let cleaned = txt.toLowerCase().replace(/\s/g,'');
    //console.log(cleaned)
    let reverse = cleaned.split("").reverse().join("");
    //console.log(reverse)
    return reverse == cleaned
}
console.log(checkPalindrome("kajak"));
console.log(checkPalindrome("a to idiota"));
console.log(checkPalindrome("12321"));
console.log(checkPalindrome("test"));
console.log(checkPalindrome("kobyła ma mały bok"));
console.log(checkPalindrome("Natalia"));
console.log(checkPalindrome(123344));
console.log(checkPalindrome("Palindrom"));
