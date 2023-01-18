

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("amPm");

function formatTime(time){
    return time.toString().padStart(2,"0");
}

function isAmPm(hours){
    return hours >= 12 ? "PM" : "AM";
}

function clock(){
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hour.textContent = formatTime(h);
    minute.textContent = formatTime(m);
    seconds.textContent = formatTime(s);
    amPm.textContent = isAmPm(h);
}

setInterval(clock,1000);


