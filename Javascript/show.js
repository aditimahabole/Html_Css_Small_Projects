const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#tea");

myButton.addEventListener("click",()=>{
    if(myImage.style.display === "none" )
    {
        myImage.style.display ="block";
        myButton.textContent ="On";
       
        myButton.style.backgroundColor = "lightgreen";
        myButton.style.boxShadow = "0 0 20px 0 rgb(102, 210, 13)"
        
    }
    else 
    {
        myImage.style.display ="none";
        myButton.textContent ="Off";
        myButton.style.backgroundColor = "rgb(250, 131, 131)";
        myButton.style.boxShadow = "0 0 20px 0 rgb(210, 66, 13)"

    }
})


