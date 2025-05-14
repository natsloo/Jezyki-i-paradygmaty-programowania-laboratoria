function generateRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function czySieUdalo() {
    let greater = 0;
    for (let i = 0; i < 11; i++) {
        let a = generateRandom(1,20);
        console.log(a)
        if (a > 10) {
            greater++;
        }
    }
    if (greater == 5) {
        console.log("udało się")
    }
    else {
        console.log("niestety nie")
    }
}

czySieUdalo()