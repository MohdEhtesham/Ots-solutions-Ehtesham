window.onload = function () {


    let [milliseconds, seconds, minutes] = [0, 0, 0];
    let timerRef = document.querySelector('.timerDisplay');
    let int = null;

    document.getElementById('startTimer').addEventListener('click', () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById('pauseTimer').addEventListener('click', () => {
        clearInterval(int);
    });

    document.getElementById('resetTimer').addEventListener('click', () => {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours] = [0, 0, 0];
        timerRef.innerHTML = '00 min: 00 sec : 000 msec';
    });

    function displayTimer() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                }
            }
        }
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

        timerRef.innerHTML = ` ${m}min : ${s}sec : ${ms}msec`;
    }
}