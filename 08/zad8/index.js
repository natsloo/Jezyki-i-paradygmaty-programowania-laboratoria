function longestPrefix(tab) {
    let prefix = ""
    for (let i = 0;i < tab[0].length;i++) {
        for (let j = 1; j < tab.length;j++) {
            if (tab[0][i] != tab[j][i]){
                return prefix;
            }
        }
        prefix += tab[0][i];
    }
}

strs = ["flower","flow","flight"];
console.log(longestPrefix(strs));
strs = ["dog","racecar","car"];
console.log(longestPrefix(strs));