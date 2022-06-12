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



// Session:
sessionStorage.setItem("nombre", "Juan");
sessionStorage.setItem("dogs", "jua");
sessionStorage.setItem("girl", "laura");

//Recorrer storage:
for(let i=0; i<sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    console.log(sessionStorage.getItem(key));
}
