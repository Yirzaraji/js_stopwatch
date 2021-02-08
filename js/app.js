const timer = new Chrono((start = 1900), (endYear = 2000), (msInterval = 100), state = true);
timer.initTimer();
timer.startOrPauseTimer();
timer.resetTimer();