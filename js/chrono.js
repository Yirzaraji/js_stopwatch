class Chrono {

    constructor(startYear, endYear, msInterval) {
        this.start = startYear
        this.reset = startYear
        this.end = endYear
        this.interval = msInterval

    }


    startTimer() {
        //Initialise le compteur a 0000
        const chronos = document.getElementsByClassName('chrono')
        for (const chrono of chronos) {
            chrono.innerHTML = "0000" + " Y "
        }

        //interval de 100ms Incrementation +1
        const startBtn = document.getElementById('startChronoBtn')
        startBtn.addEventListener('click', () =>
            this.addYear = setInterval(() => {
                if (this.start < this.end) {
                    this.start++
                        console.log(this.start)
                    const test = document.getElementById('test')
                    test.innerHTML = this.start + " Y"
                } else {
                    clearInterval();
                }
            }, msInterval)
        );
    }

    pauseTimer() {
        console.log('pause')
        const stopBtn = document.getElementById('stopChronoBtn')
        stopBtn.addEventListener('click', () =>
            clearInterval(this.addYear)
        )

    }

    resetTimer() {
        const resetBtn = document.getElementById('resetChronoBtn')

        resetBtn.addEventListener('click', () => {
                //console.log("test click reset")
                console.log(this.reset)
                this.start = this.reset
                const chronos = document.getElementsByClassName('chrono')
                for (const chrono of chronos) {
                    chrono.innerHTML = "0000" + " Y "
                }
            }
            //console.log("test click reset")
            //window.location.reload()

        )

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