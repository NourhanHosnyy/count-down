const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minutesel = document.getElementById("minutes");
const secondsel = document.getElementById("seconds");

const newyears = "1 Jan 2026";

function countdown() {
    const newYearsDate = new Date(newyears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minutesel.innerHTML = minutes;
    secondsel.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);
