const body = document.querySelector('body');

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
}

window.addEventListener("load", randomColor)