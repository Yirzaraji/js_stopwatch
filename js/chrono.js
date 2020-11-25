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
        )
    }
}