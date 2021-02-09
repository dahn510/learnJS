var clockContainer = document.querySelector(".clock-js");
var clockTitle = clockContainer.querySelector(".hour-js");

//Gets current time and updates clock in HTML
function getTime(){
    // Get current time
    const time = new Date();
    // Set minutes and hours
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const seconds = time.getSeconds();
    // Update clock in HTML
    // This will display 1hour, 1minutes, and 1seconds as
    // 01:01:01 instead of 1:1:1
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function main(){
    getTime();
    //Update clock every second
    setInterval(getTime, 1000);
}

main();
