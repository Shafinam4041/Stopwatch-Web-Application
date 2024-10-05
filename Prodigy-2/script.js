let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            displayTime();
        }, 1000);
        isRunning = true;
    }
}

function displayTime() {
    let sec = seconds < 10 ? '0' + seconds : seconds;
    let min = minutes < 10 ? '0' + minutes : minutes;
    let hr = hours < 10 ? '0' + hours : hours;
    display.innerText = `${hr}:${min}:${sec}`;
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    isRunning = false;
    lapList.innerHTML = '';
}

function recordLap() {
    const lapTime = document.createElement('li');
    lapTime.innerText = display.innerText;
    lapList.appendChild(lapTime);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

displayTime();  // Initialize display
