var colorCode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyColor = document.getElementById("body");


function chooseColor() {
    bodyColor.style.background = "linear-gradient(to right," 
    + color1.value 
    + ", " 
    + color2.value 
    +")";
    colorCode.textContent= bodyColor.style.background + "";
    input.value ="";
}

 

color1.addEventListener("input", chooseColor);
  
color2.addEventListener("input", chooseColor);



