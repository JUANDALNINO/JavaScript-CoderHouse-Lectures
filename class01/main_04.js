// Interactuar con el usuario:

// Console.log
console.log("Hola", 1, 2, false, true, 1.2, null);

// alert
alert("Write the message");
alert(200);
alert(true);
// => Solo uno a la vez

// Prompt
let lastName = prompt("Write your last name"); // Guarda el msj
alert(lastName); // Imprime el msj


// Ejercicio:
let num1 = Number(prompt("Escribe el primer número")); // => HAcer casteo = convertir el valor
let num2 = Number(prompt("Escribe el segundo número"));
let resultMulti = num1 * num2;
let resultSum = num1 + num2;

alert("El resultado de la multiplicacion es: " + resultMulti);

alert("El resultado de la sum es: " + num1 + num2);