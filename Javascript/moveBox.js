const myDiv = document.getElementById("#myDiv");
// window.addEventListener("keydown",event =>console.log(event));
window.addEventListener("keydown",move);
let x=1;
let y=1;
function move(event){
    switch(event.key)
    {
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "1px";
            break;


    }

}