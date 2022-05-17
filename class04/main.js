
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


// Exercise:
function mostrarMenu () {
    
}