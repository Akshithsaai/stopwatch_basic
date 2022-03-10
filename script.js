var minutes = document.querySelector(".minutes")
var seconds = document.querySelector(".seconds")
var second = 0;
var minute = 0;
var stopTime = true;
var startTime = false;
var startIt = document.querySelector("#start");
var stopIt = document.querySelector("#stop");
var resetIt = document.querySelector("#reset");

function time() {

    setInterval(() => {
        if (stopTime == false) {
            if (second < 60) {
                second++;
                seconds.textContent = parseInt(second);
            }
            else {
                second = 0;
                minute++;
                minutes.textContent = parseInt(minute);
            }
        }
    }, 1000);


}

function start() {
    if(stopTime==true && startTime==false){
    stopTime = false;startTime=true;
    time();
    }
    if(startTime==true){
        startTime=true;
        stopTime=false;
    }
}

function stop() {
    stopTime = true;
    startTime = false;
}

function reset() {
    second = 0;
    minute = 0;
    seconds.textContent = second;
    minutes.textContent = minute;
    stopTime = true;
    startTime =false;
}

startIt.addEventListener("click", start);
stopIt.addEventListener("click", stop);
resetIt.addEventListener("click", reset);