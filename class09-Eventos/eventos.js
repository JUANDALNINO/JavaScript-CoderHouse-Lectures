/* EVENTOS:
-> Cuando hay una acción en la página y ocurre algo
- Controlar las acciones de los usuarios y el comportamiento de la página

>> Un evento ocurre en un elemento = handler (manejador)
    -> En cada evento ejecuta una función asociada al mismo
*/



// 01. addEventListener(par1, par2)
// El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.
const btn1 = document.getElementById("miButton1");
btn1.addEventListener("click", 
    () => {
        alert("I'm the button 1");
    })


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

