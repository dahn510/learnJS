let click_count = 0;
function logResize()
{
    let elem = document.getElementById("bob");
    click_count++;
    elem.innerHTML = "You clicked: " + click_count;
}

window.addEventListener("click",logResize);
