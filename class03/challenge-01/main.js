// TABLAS DE MULTIPLICAR
// 1. Pedir numero de la tabla
// 2. Multiplicar del 1 al 10
// 3. Ir mostrando los resultados

var numberUser = Number(prompt("Write a number:"));
var numberMulti = 1;

if (isNaN(numberUser)) {
    alert("Not a number")
} else {
    for (let i = 1; i <= 10; i++) {
        numberMulti = i;
        alert(numberUser + " * " + numberMulti + " = " + i * numberUser);
    }
};