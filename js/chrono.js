class Chrono {

    constructor(startYear, endYear, msInterval, state) {
        this.start = startYear
        this.reset = startYear
        this.end = endYear
        this.interval = msInterval
        this.state = state;
    }

    initTimer() {
        //Initialise le compteur a 0000
        const chronos = document.getElementsByClassName('chrono')
        for (const chrono of chronos) {
            chrono.innerHTML = "0000" + " Y "
        }
    }

    startOrPauseTimer(){
        const clearPauseBtn = document.getElementById('stopChronoBtn')
        clearPauseBtn.addEventListener('click', () => {
            if(state)
            {
                state = false
                console.log(state)
                this.addYear = setInterval(() => 
                {
                    this.start < this.end
                    this.start++
                    console.log(this.start)
                    const test = document.getElementById('test')
                    test.innerHTML = this.start + " Y"
                    const timerOff = document.getElementById('timerOff')
                    timerOff.innerHTML = "timer"
                }, 
                msInterval)
            }else
            {
                state = true
                console.log(state)
                console.log("pause")
                clearInterval(this.addYear)
                const timerOff = document.getElementById('timerOff')
                timerOff.innerHTML = "timer_off"
            }
        })
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