let click_count = 0;
function logResize()
{
    let elem = document.getElementById("bob");
    click_count++;
    if(click_count > 50){
        elem.innerHTML = "Yamete oniisan, you clicked too much!!";
    }else{
        elem.innerHTML = "You clicked: " + click_count;
    }
}

window.addEventListener("click",logResize);
