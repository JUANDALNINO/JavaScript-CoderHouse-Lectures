
// ÁREAS:
// 1. Área del cuadrado:
// Formula = A = lado * lado

/* Algoritmo:
1. Pedir al usuario uno de los lados
2. Realizar la formula
3. Devolver el resultado
*/

let side = Number(prompt("Write a number of the side"));
let areaSquare = side * side;

alert("The area of your square is: " + areaSquare);


// 2. Area de un rectangulo:
// Formula = area = base * altura

let base = Number(prompt("Write the base:"));
let high = Number(prompt("Write the high:"));

let areaRectangle = base * high;

alert("The area of your rectangle is: "+ areaRectangle);


// 3. Area de un triangulo
// Formula = area = base * altura / 2

let baseTriangle = Number(prompt("Write the base:"));
let highTriangle = Number(prompt("Write the high:"));

let areaTriangle = (baseTriangle * highTriangle) / 2;

alert("The area of your triangle is: " + areaTriangle);




// EXERCISES OF CICLES:
// 1. Write a JS code to print numbers from 1 to 10

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();


function numbers10to20() {
    for(let i=10; i<=20; i++) {
        console.log(i);
    }
}
numbers10to20();


function numbers10to10() {
    for(let i=10; i<=100; i+10) {
        console.log(i);
    }
}
numbers10to10();