// Condicionales

// if
/*
if (true) { // => si (condicion)
    console.log("Hello"); // => bloque de código a ejectuar - las instrucciones
}; 
*/

// else if
/*
const datoUsuario = prompt("Ingrese una cadena");
if (datoUsuario === "HELLO") {
    alert("Excelent");
} 
else if (datoUsuario === "BYE") {
    alert("Bad!");
};
*/

// else => cualquier otro caso. El default
/*
else (datoUsuario === "Jeje") {
    return "Heloo";
};
*/

var condicion = 1 == "1";
condicion;

/* Tipo de dato */
var condicion2 = "1" === 1;
condicion2;

var condicion3 = "1" !== 2;
condicion3;

var cuatro = 1 < 2;
cuatro;

var cinco = 1 > 2;
cinco;

var seis = 1 <= 2;
seis;

var siete = 1 >= 2;
siete;

var ocho = !condicion;
ocho;

var otraVar = true && false;
otraVar;

var newVar = true && true;
newVar;

var otraVar1 = true || false;
otraVar;

var newVar2 = true || true;
newVar;



/*
programa que pida:
- Operacion: suma / multi
- 2 numeros
- Imprimir en console el resultado
*/

let num1 = Number(prompt("Digite el primer numero"));
let num2 = Number(prompt("Digite el segundo numero"));

let suma = num1 + num2;
let multi = num1 * num2;

let operacion = prompt("¿Cuál operacion deseas realizar? => SUMA (+) o MULTIPLICACION (*)");

if (operacion === "+") {
  alert("La suma de: " + num1 + " + " + num2 + " = " + suma);
};
else if (operacion === "*") {
  alert("La multiplicacion de: " + num1 + " * " + num2 + " = " + multi);
};

/* 
if (operacion === "SUMA") {
  console.log("La suma es: " + suma);
} 
else if (operacion === "MULTIPLICACION") {
  console.log("La multiplicacion es: " + multi);
};
*/