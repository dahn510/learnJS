const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetingTitle = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function triggerJoke()
{
    form.classList.remove(SHOWING_CN);
    greetingTitle.classList.add(SHOWING_CN);
    greetingTitle.innerText = "Who is Joe? (Joe mama)";
}

function saveName(name)
{
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event)
{
    event.preventDefault();
    const name = input.value;
    if(name.toUpperCase() === "JOE"){
        triggerJoke();
        setTimeout(greetUser, 500, name);
    }else{
        greetUser(name);
    }
}

function getName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function greetUser(name)
{
    greetingTitle.innerText = `How are you? ${name}`;
    form.classList.remove(SHOWING_CN);
    greetingTitle.classList.add(SHOWING_CN);
    saveName(name);
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //User name doesn't exist
        getName();
    }else{
        //User name exists
        //Display greeting message
        greetUser(currentUser);
    }
}

        
function main()
{
    loadName();

}
main();
