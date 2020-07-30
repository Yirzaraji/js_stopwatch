let startChrono = 1900
let endChrono = 2000

const chronos = document.getElementsByClassName('chrono')
const startBtn = document.getElementsByClassName('startChronoBtn')
const stopBtn = document.getElementsByClassName('stopChronoBtn')
const resetBtn = document.getElementsByClassName('resetChronoBtn')

for (const start of startBtn) {
    start.addEventListener('click', () =>
        addYear = setInterval(() => {
            for (const chrono of chronos) {
                console.log(chrono);
                if (startChrono < 2001) {
                    chrono.innerHTML = startChrono++
                        chrono.style.fontSize = "3em";
                } else {
                    clearInterval(addYear);
                }
            };
        }, 100)

    );

};

for (const stop of stopBtn) {
    stop.addEventListener('click', () =>
        clearInterval(addYear)
    )
}

for (const reset of resetBtn) {
    reset.addEventListener('click', () =>
        clearInterval(addYear)

        /*   for (const chrono of chronos) {
              chronos.innerHTML = startChrono
          } */
    );
}


const timer = new Chrono(start = 1900, end = 2000, interval = 100);
console.log(timer.startTimer)

//setInterval(function() { alert("Hello"); }, 3000);