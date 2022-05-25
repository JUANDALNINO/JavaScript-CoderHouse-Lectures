
// Funcion simple
// 1. Se declara
function saludar () {
    console.log("Hello");
}
// 2. Luego se llama:
saludar();


// Funcion 02:
function hi () {
    let nameUser = prompt("Please write your name");
    alert(`Hello ${nameUser}`);
};

hi ();


// Function 03 con PARAMETROS: => recibe info y opera la info.
function sumar (a, b) {

    alert(`La suma es ${a + b}`);
};

let numberA = Number(prompt("First number"));
let numberB = Number(prompt("Number two"))

sumar (numberA, numberB);


// Example:
function fullName (name, lastName) {
    alert (`Hello ${name + " " + lastName}`);
};

let name1 = prompt("Write your name");
let lastName2 = prompt("Write your last Name");

fullName(name1, lastName2);


// Function 04 => Funcion con return:
// El return hay que guardarlo en una variable.
function multiplicacion (x, y) {
    let result = x * y;
    return result;
};

let numberA = Number(prompt("First number"));
let numberB = Number(prompt("Number two"));

let res = multiplicacion (numberA, numberB);
alert(`La multi es ${res}`);


// Exercise crear calculadora:
 /*Escriba un programa que permita simular una calculadora. 
 El usuario debe ingresar una de las siguientes opciones: 
 1. Suma 
 2. Resta
 3. Mul 
 4. Div 
 5. Fin
 El menú debe mostrarse, siempre que el usuario no ingrese la opción 5
 El programa debe mostrar error en los siguientes casos: 
    A. El usuario no selecciona una opción válida de 1 a 5 
    B. El usuario no ingresa datos válidos para operar
    C. El usuario ingresa un '0' como segundo operando para la división
*/

function mostrarMenu () {
    let option = 0;


}



// Scope:
let a = 0;

function miFunction () {
    let a = 1;
    console.log(a);
}

miFunction(); // 1
console.log(a); // 0
// Variables locales y globales


// Funcion anónima:
let suma = function (a, b) {
    return (a + b);
};

suma (10, 20);


// Funciones flecha:
let resta = (a, b) => {  // La flecha va después de los parámetros y reemplaza la palabra function
    return (a - b);
};
resta (10, 20);

//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
let multiplicacion = (a, b) => a * b;
// => Ahorrando las llaves y el return.
multiplicacion(3, 4);




/* --------------------> PILDORAS <--------------------------*/
// Instrucciones una primera vez => Se memorizan para no tener que repetir código
// El codigo es un empleado y debe ser llamado por el jefe quien le da ordenes
function nombreDeLaFuncion() {
    // Codigo a ejectutar
}

// En otro punto se llama la función
nombreDeLaFuncion(); // => Deben llamarse para ser ejecutadas

    function diaDeHoy() { // => La tarea que debe hacer
        let today = new Date(); // => Nueva var con la fecha
        alert("La fecha de hoy es " + today);
        console.log(today.toDateString());
    }

    diaDeHoy(); // => Se llama la funcion

    