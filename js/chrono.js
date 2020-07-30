class Chrono {

    constructor(startYear, msInterval) {
        this.start = startYear
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
            setInterval(() => {   
                if(this.start < 2000) {
                    this.start++
                    console.log(this.start)
                    const test = document.getElementById('test')
                    test.innerHTML = this.start + " Y"
                }
                else{
                    clearInterval();
                }
            }, msInterval)
        );
    }

    pauseTimer(){
        console.log('pause')
        let stopBtn = document.getElementById('stopChronoBtn')
            stopBtn.addEventListener('click', () =>
            console.log("test click"),
                clearInterval()
            )
        
    }

   resetTimer() {
        const resetBtn = document.getElementsByClassName('resetChronoBtn')
            for (const reset of resetBtn) {
                reset.addEventListener('click', (event) =>
                console.log('reset'),
                //window.location.reload()
                )
            }
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