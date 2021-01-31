var clockContainer = document.querySelector(".clock-js");
var clockTitle = clockContainer.querySelector(".hour-js");

function getTime(){
    // Get current time
    const time = new Date();
    // Set minutes and hours
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const seconds = time.getSeconds();
    // Uptime clock in HTML
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function main(){
    getTime();
    //Update clock every second
    setInterval(getTime, 1000);
}

main();
