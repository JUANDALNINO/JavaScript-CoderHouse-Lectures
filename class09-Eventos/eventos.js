/* EVENTOS:
-> Cuando hay una acción en la página y ocurre algo
- Controlar las acciones de los usuarios y el comportamiento de la página

>> Un evento ocurre en un elemento = handler (manejador)
    -> En cada evento ejecuta una función asociada al mismo
*/




// 02. OnClick
const btn2 = document.getElementById("miButton2");
btn2.onclick = () => {
    btn2.innerHTML = "I'm the button 2"
};




// 03. On HTML => sintaxis
// NO SE RECOMIENDA
    /*
    <button id="miButton3" onclick="btn3()">Try me 3</button>
    */
function btn3() {
    alert("This is the third btn");
}


//------------------
// Eventos del Mouse:

// Mouse Over => 
const btn4 = document.getElementById("miButton4");

btn4.addEventListener("mouseover", () => {
    btn4.setAttribute("style", "background-color: green");
});


// Mouse out =>
btn4.addEventListener("mouseout", () => {
    btn4.setAttribute("style", "background-color: grey");
})


// Mouse down =>
const btn5 = document.getElementById("miButton5");

btn5.addEventListener("mousedown", () => {
    document.body.setAttribute("style", "background-color: red");
})


// Mouse up =>
btn5.addEventListener("mouseup", () => {
    document.body.setAttribute("style", "background-color: white");
})



// Evento click:
// 01. addEventListener(par1, par2)
// El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.
const btn1 = document.getElementById("miButton1");
btn1.addEventListener("click", button1);

function button1() {
    alert("I'm the button 1");
}


const button = document.querySelector(".miButton7");
                //1. tipo de evento / 2. function 
button.addEventListener("click", function() {
    alert("Hello Juan");
});



// Objeto target:
const h2 = document.getElementById("h2Estoy");
const btn8 = document.getElementById("miButton8");
btn8.addEventListener("click", function(){

    if(h2.style.display != "none") {
        h2.style.display = "none";
        btn8.textContent = "Mostrar";
    } else {
        h2.style.display = "block";
        btn8.textContent = "Ocultar";
    }

})




//SetTimeOut:
//  Aparece en => Tarea con tiempo
// 1. Función / 2. Milisegundos:
/*
    setTimeout(function() {
        alert("3 Segundos después...");
    }, 1000);
*/


// Evento teclado:
/*
const input = document.getElementById("input");
input.addEventListener("keydown", function() {
    alert("Tecla presionada");
})
*/



// Evento SUBMIT:
// Se previene el refresh automatico con el e en la función =>
const form = document.getElementById("course-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let email = document.getElementById("exampleInputEmail1").value;
    let pass = document.getElementById("exampleInputPassword1").value;

    alert("Your email is: " + email + " and your password is " + pass);

    create_card(email, pass);
})



// Evento cambio de valor: Change value
// Al cambiar el valor del input se ejecuta la función
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function() {
    alert("Cambio de valor");
})



// Document Loaded:
// El documento Js debe estar al final y debe ser lo último que se cargue




// Crear nuevos elementos:
//  Crear cartas: Datos a partir del HTML que se necesiten mostrar
const row = document.querySelector(".row");
function create_card(title, description) {
    let html = `<div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                <div class="caption">
                    <h3 id="title_card">${title}</h3>
                    <p id="description_card">${description}</p>
                    <p>
                    <a href="#" class="btn btn-danger" id="btn_delete">Eliminar</a>
                    </p>
                </div>
                </div>
                </div>`;
    row.innerHTML += html;
}


// Eliminar elementos al DOM:
let p2 = document.getElementById("btn_delete");
p2.addEventListener("click", deleteCard());

function deleteCard() {
    alert("Carta a eliminar")
};