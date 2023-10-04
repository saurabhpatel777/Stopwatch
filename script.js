let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let mSec = document.getElementById("milli-second")
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let counterRunning = false;
let instanceID;
//Start Timer
function startTimer() {
    if (!counterRunning) {
        counterRunning = true;
        instanceID = setInterval(incMilliSecond, 10);
    }
    else {
        clearInterval(instanceID); // this line is important to handle a case where start button is accidentally clicked more than once
        instanceID = setInterval(incMilliSecond, 10);
    }
}
// Milliseconds in stopwatch
function incMilliSecond() {
    let mSecCount = parseInt(mSec.innerText);
    mSecCount++;
    if (mSecCount < 10) {
        mSec.innerText = '0' + mSecCount ;
    }
    else if (mSecCount < 100) {
        mSec.innerText = mSecCount ;
    }
    else {
        mSec.innerText = "00"
        incSecond();
    }
}
// Seconds in Stopwatch
function incSecond() {
    let secCount = parseInt(second.innerText);
    secCount++;
    if (secCount < 10) {
        second.innerText = '0' + secCount+'.' ;
    }
    else if (secCount > 9 && secCount < 60) {
        second.innerText = secCount+'.' ;
    }
    else {
        second.innerText = "00."
        incMinute();
    }
}
// Minute in Stopwatch
function incMinute() {
    let minCount = parseInt(minute.innerText);
    minCount++;
    if (minCount < 10) {
        minute.innerText = '0' + minCount + ' :';
    }
    else if (minCount > 9 && minCount < 60) {
        minute.innerText = minCount + ' :';
    }
    else {
        minute.innerText = "00 :"
        incHour();
    }
}
// Hours in stopwatch
function incHour(){
    let hourCount = parseInt(hour.innerText);
    hourCount++;
    if (hourCount < 10) {
        hour.innerText = '0' + hourCount + ' :';
    }
    else if (hourCount > 9 && hourCount < 24) {
        hour.innerText = hourCount + ' :';
    }
    else {
        alert("The day is over");
        resetTimer();
    }
}
// time Stop
function stopTimer() {
    clearInterval(instanceID);
}
// time reset
function resetTimer() {
    clearInterval(instanceID);
    counterRunning=false;
    hour.innerText="00 :";
    minute.innerText="00 :";
    second.innerText="00.";
    mSec.innerText="00";
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);