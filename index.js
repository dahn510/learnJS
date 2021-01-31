let click_count = 0;
const title = document.getElementById("title");

function clickHandler()
{
    const CLICKED_CLASS_NAME = "clicked";
    let elem = title;
    click_count++;
    if(click_count > 5){
        elem.innerHTML = "Yamete oniisan, you clicked too much!!";
        title.classList.toggle(CLICKED_CLASS_NAME);
    }else{
        elem.innerHTML = "click me harder!! " +"(" + click_count +")";
    }

}

let prevKeys = "";
function printKeyPressed(elem)
{
    prevKeys += elem.key;
    title.innerHTML = "You pressed: " + prevKeys;
}

title.addEventListener("click",clickHandler);

window.addEventListener("keydown", printKeyPressed);
