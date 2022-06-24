// No debe detenerse el programa en un código y se demora

// Programación asincrónica:
//  Multiples tareas en paralelo.

// 1 Hilo de ejecución en JS.
// Pila de ejecución

// 01. SetTimeOut
console.log("Hola1");

setTimeout(() => {
    mostrarDatos(); // Una función de callback y un valor numérico que representa milisegundos
}, 3000);

console.log("Hola3");

function mostrarDatos() {
    console.log("Hola2");
}


const msg = document.getElementById("msg");
msg.innerHTML = "Welcome";

setTimeout(() => {
    const nombre = prompt("Ingresa tu nombre");
    msg.innerHTML = `Welcome, ${nombre}`;
}, 10000);


// Call Stack

// 02. SetInterval
// Funciones de manera repetida
const setInterv = document.getElementById("setInterval");

let counter = 6;

const interval = setInterval(() => {
    counter--;
    setInterv.innerHTML = `Su computador va a explotar en: ${counter}`;

    if (counter <= 0) {
        clearInterval(interval); // Eliminar el intervalo
        alert("BUUUM")
    }
}, 1000);

// 03. Clear
// Clear Interval and timeout
clearInterval();
clearTimeout();


// 55 min