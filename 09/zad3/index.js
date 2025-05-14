let text = {
    check(txt,word){
        let words = [];
        words = txt.split(" ");
        for (let w of words){
            if (w === word){
                return true;
            }
        }
        return false;
    },
    getCount(txt){
        return txt.length
    },
    getWordsCount(txt){
        // let words = [];
        // words = txt.split(" ");
        // return words.length;
        if (txt === "" || txt.trim() === ""){
            return 0;
        }
        return txt.trim().split(/\s+/).length;
    },
    setCapitalize(txt){
        let words = [];
        let text = "";
        words = txt.split(" ");
        //console.log(words);
        for (let i = 0;i < words.length;i++) {
            text += words[i][0].toUpperCase();
            for (let j = 1; j < words[i].length; j++) {
                text += words[i][j];
            }
            text += " ";
        }
        return text;
    },
    setMix(txt){
        let letters = []
        let text = "";
        letters = txt.split("");
        let letter_case = false;
        for(let i = 0;i < letters.length;i++){
            if (letter_case){
                text += letters[i].toUpperCase();
                letter_case = !letter_case;
            }
            else {
                text += letters[i].toLowerCase();
                letter_case = !letter_case;
            }
        }
        return text;
    },
    generateRandom(lng){
      //let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","u","p","r","s","t","u","w","y","z"];
      let letters = "abcdefghijklmnopertuwz";
      let counter = 0;
      let txt = "";
      while (counter < lng){
          let random = Math.floor(Math.random()*(letters.length));
          txt += letters[random];
          counter++;
      }
      return txt;
    }
}
console.log(text.check("ala ma kota", "kota"));
console.log(text.getCount("ala ma kota"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));
console.log("______________________")
console.log(text.check("ala ma kota", "kota"));        // true
console.log(text.check("Ala ma psa", "kota"));         // false
console.log(text.check("Ala    ma kota", "ma"));       // true
console.log("______________________")
console.log(text.getCount("ala ma kota"));             // 11
console.log(text.getCount(""));                        // 0
console.log(text.getCount("Ala, ma. kota!"));          // 14 (interpunkcja też liczy się jako litera)
console.log("______________________")
console.log(text.getWordsCount("ala ma kota"));        // 3
console.log(text.getWordsCount("   Ala  ma   psa "));  // 3
console.log(text.getWordsCount(""));                   // 0
console.log("______________________")
console.log(text.setCapitalize("ala ma kota"));        // "Ala Ma Kota"
console.log(text.setCapitalize("Ala MA PSA"));         // "Ala MA PSA" (pierwsza litera wielka, reszta bez zmian)
console.log(text.setCapitalize("kotek"));              // "Kotek"
console.log("______________________")
console.log(text.setMix("ala ma kota"));               // "aLa mA KoTa"
console.log(text.setMix("ABCDE"));                     // "aBcDe"
console.log(text.setMix("A B C"));                     // "a b c"
console.log("______________________")
console.log(text.generateRandom(0));                   // ""
console.log(text.generateRandom(1));                   // np. "y"
console.log(text.generateRandom(10));                  // np. "kdraswueyp"
console.log(text.generateRandom(20));                  // np. "alpwusytmrgezrwdnkty"
console.log("______________________")
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.getWordsCount(" "));
console.log(text.getWordsCount(" Ala ma kota"));
console.log(text.getWordsCount("Ala ma kota   f   "));