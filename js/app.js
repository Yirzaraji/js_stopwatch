//let startChrono = 1900
//let endChrono = 2000

/* for (const chrono of chronos) {
chrono.innerHTML = "0000" + " Y "
} */

/*
const chronos = document.getElementsByClassName('chrono')
const startBtn = document.getElementsByClassName('startChronoBtn')
const stopBtn = document.getElementsByClassName('stopChronoBtn')
const resetBtn = document.getElementsByClassName('resetChronoBtn')
 */

/* function start(){
    for (const start of startBtn) {
        start.addEventListener('click', () =>
            addYear = setInterval(() => {
                for (const chrono of chronos) {
                    console.log(chrono);
                    if (startChrono < 2001) {
                        chrono.innerHTML = startChrono++
                        
                    } else {
                        clearInterval(addYear);
                    }
                };
            }, 100)

        );

    };
}
function pause(){
    for (const stop of stopBtn) {
        stop.addEventListener('click', () =>
            clearInterval(addYear)
        )
    }
}
function reset(){
    for (const chrono of chronos) {
        for (const reset of resetBtn) {
            reset.addEventListener('click', (event) =>
            window.location.reload()
            )
        }
    }
}

start()
pause()
reset()
 */


//Partie chrono objet


const timer = new Chrono(start = 1900, endYear = 2000, msInterval = 100);
timer.startTimer();
timer.pauseTimer()
timer.resetTimer()



//console.log(timer.start)
/* for(const test of tests){
    
    console.log(timer.start)
    test.innerHTML = timer.start
   
}
 */