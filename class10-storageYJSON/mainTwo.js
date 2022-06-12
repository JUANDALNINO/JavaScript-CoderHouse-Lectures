//Back
let backDiv = document.getElementById("back");


//Button:
let buttonClick = document.getElementById("buttonDiv");


buttonClick.addEventListener("click", nightMode());

function  nightMode() {
    backDiv.style.backgroundColor = "whitesmoke";
};


let saveBack = localStorage.setItem("Background color", buttonClick);