var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.getElementsByTagName("body")[0];
var css = document.getElementsByTagName("h3")[0];
var randombtn = document.getElementById("randombtn");

function setGradient(){
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    
    css.textContent = body.style.background + ';';
}

function randomColor(){
    color1.value = '#' + Math.random().toString(16).slice(2,8);
    color2.value = '#' + Math.random().toString(16).slice(2,8);

    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randombtn.addEventListener("click", randomColor);
setGradient();