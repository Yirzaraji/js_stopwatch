class Chrono {

    constructor(startYear, endYear, intervalMs) {
        this.start = startYear
        this.end = endYear
        this.interval = intervalMs
    }


    startTimer() {
        this.start++

    }

    endTimer() {
        console.log('coucou2')
    }

}



/* class Pokemon {
    constructor(pdv) {

        this.pv = pdv;
        this.name = nom;
    }

    dismoiquitues() {
        console.log("coucou" + this.pv)
    }

    tapeSur(pokemon) {
        console.log("je tape sur" + this.name)
    }


}

let pok1 = new Pokemon(pdv = 30, nom = 'bob');
let pok2 = new Pokemon(pdv = 130, nom = 'joe');
pok1.dismoiquitues();
pok1.tapeSur(pok2);
console.log(pok2); */