let click_count = 0;
const title = document.getElementById("title");
const BASE_CLR = title.style.color;
const PINK_CLR = "#f02475";
function clickHandler()
{
    let elem = title;
    click_count++;
    if(click_count > 5){
        elem.innerHTML = "Yamete oniisan, you clicked too much!!";
        const current_clr = elem.style.color;
        if(BASE_CLR === current_clr){
            elem.style.color = PINK_CLR;
        }else{
            elem.style.color = BASE_CLR;
        }
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
