//Back
let backDiv = document.getElementById("back");


//Button:
let buttonClick = document.getElementById("buttonDiv");


buttonClick.addEventListener("click", function() {
    nightMode();
});

function nightMode() {
    backDiv.style.backgroundColor = "whitesmoke";
    localStorage.setItem("Background color", "Dark");
};


// JSON
