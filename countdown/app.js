
function updateCountDown(){
let timeNow = new Date().getTime();
let newYear = new Date(2021,0,1).getTime();
let remainingTime = newYear - timeNow;

// converting d,s,m,h
let secondTime = Math.floor(remainingTime/1000);
let minuteTime = Math.floor(secondTime/60);
let hourTime = Math.floor(minuteTime/60);
let dayTime = Math.floor(hourTime/24);

hourTime%=24;
minuteTime%=60;
secondTime%=60;

// hourTime = (hourTime<10) ? "0" + hourTime : hourTime;
// minuteTime = (minuteTime<10) ? "0" + minuteTime : minuteTime;
// secondTime = (secondTime<10) ? "0" + secondTime : secondTime;


// DOM thing
document.getElementById('days').innerHTML = dayTime;
document.getElementById('hours').innerHTML = hourTime;
document.getElementById('minutes').innerHTML = minuteTime;
document.getElementById('seconds').innerHTML = secondTime;




}

setInterval(updateCountDown, 1000);