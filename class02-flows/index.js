// Condicionales
// Tomar decisiones = el código toma la decision => IA

/* 1. => Preguntarse ¿Tengo 100 millones? => La pregunta, es la condición
   2. => Si o NO => Las respuestas alternativas. => solo hay dos opciones.
   3. => Los caminos = SI = Me puedo comprar una casa
                     = NO = Me quedo con el apto.
*/

// if
/*
1. if => la pregunta / la condición
2. true => SI => se cumple la condición = realizar unas instrucciones
3. false => NO => no se cumple = realizar otras condiciones

EJ:
1. 10.000 me alcanzar para comprar qué?
2. true = puedes comprar papas y gaseosa
3. false = solo puedes comprar unas papas

Example:
let question = Number(prompt("Please introduce a number"));
if (question >= 9000) {
    alert("Your cash reach for a chips and soda")
} else {
    alert("Sorry, your cash don't reach")
} 
alert("Continue the program");



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
let resta = num1 - num2;
let divi = num1 / num2;

let operacion = prompt("¿Cuál operacion deseas realizar? => SUMA (+) o MULTIPLICACION (*) o RESTA (-) o DIVISION (/)");

if (isNaN(num1) || isNaN(num2)) {
    alert("Numeros no validos")
}
else {
    if (operacion === "+") {
        alert("La suma de: " + num1 + " + " + num2 + " = " + suma);
        }
        else if (operacion === "*") {
            alert("La multiplicacion de: " + num1 + " * " + num2 + " = " + multi);
        }
        else if (operacion === "-") {
            alert("La resta de: " + num1 + " - " + num2 + " = " + resta);
        }
        else if (operacion === "/") {
            if(num2 === 0) {
                alert("No se puede dividir en 0")
            } 
            else {
                alert("La division de: " + num1 + " / " + num2 + " = " + divi);
            }
        }
};

/* 
if (operacion === "SUMA") {
  console.log("La suma es: " + suma);
} 
else if (operacion === "MULTIPLICACION") {
  console.log("La multiplicacion es: " + multi);
};
*/



// Exercise:
// CREAR UN ALGORITMO CON UN CONDICIONAL
// Comprobar si el numero es mayor que 1000 o menor
let userText = Number(prompt("Please write a number"))
    if (userText > 1000) {
        alert("Your number is upper to 1000!!")
    } else if (userText < 1000) {
        alert("Your number is lesser to 1000 :(")
    }


// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
let userHello = String(prompt("Please write HELLO"));
if (userHello === "HELLO") {
    alert("It's HELLO!!!")
} else if (userHello !== "HELLO") {
    alert("Please write HELLO!!!!!!!!!!")
};


// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
let userNumber = Number(prompt("please write a number"));
if (userNumber > 10 && userNumber < 50) {
    alert("Your number is between 10 and 50")
} else if (userNumber > 50 || userNumber < 10) {
    alert("Bad numberrrr!!")
}



// 1. Check if a number is odd or even in JavaScript:
let evenOdd = Number(prompt("please write a number"));
let result = evenOdd % 2;
if (result === 0) {
    alert("Number is even")
} else if (result !== 0) {
    alert("Number is odd")
};


// 2. Check if input variable is a number or not:
let numberOrNot = prompt("Please write something");
if (isNaN(numberOrNot)) {
    alert("Noooo, it's not a number")
} else {
    alert("YESS! it's a number")
};


// 3. Find the largest of two number:
let largest01 = Number(prompt("Please write the first number"));
let largest02 = Number(prompt("Please write the second number"));

if (largest01 > largest02) {
    alert(largest01 + " Is the winner")
} else if (largest01 < largest02) {
    alert(largest02 + " Is the winner")
} else if (largest01 == largest02) {
    alert("The two numbers are equal!! " + largest01 + " " + largest02)
};


// 4. Find the largest of three number:
let num1 = Number(prompt("Please write the first number"));
let num2 = Number(prompt("Please write the second number"));
let num3 = Number(prompt("Please write the third number"));

    if (num1 > num2 && num1 > num3) {
        alert(num1 + " is the winner!!")
    } else if (num2 > num3) {
        alert(num2 + " is the winner!!")
    } else {
        alert(num3 + " is the winner!!")
    }



/*
5. Check if a triangle is equilateral, scalene, or isosceles
Function `findTriangleType()` finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
*/

let side1 = Number(prompt("Please write a side 1"));
let side2 = Number(prompt("Please write a side 2"));
let side3 = Number(prompt("Please write a side 3"));

if (side1 == side2 && side1 == side3) {
    alert("Your triangle is Equilateral!")
} else if (side1 == side2 || side2 == side3) {
    alert("Your triangle is Isosceles!!");
} else {
    alert("Your triangle is Scalene triangle!!!")
};



/* 
6. Find the a number is present in given range
*/



// parseInt() => cambiar a numero entero
// Ejercicio calculadora:
let num1 = Number(prompt("Please introduce the first number =>"));
let num2 = Number(prompt("Please introduce the second number =>"));

if(isNaN(num1) && isNaN(num2)) {
    let operation = prompt("What operation do you want to do? suma/resta/division/multiplicacion");

    if(operation === "suma") {
        alert("Your result of " + num1 + " + " + num2 + " = " + (parseInt(num1)+parseInt(num2)));
    }
    else if(operation === "resta") {
        alert("Your result of " + num1 + " - " + num2 + " = " + (parseInt(num1)-parseInt(num2)));
    }
    else if(operation === "division") {
        alert("Your result of " + num1 + " / " + num2 + " = " + (parseInt(num1)/parseInt(num2)));
    }
    else if(operation === "multiplicacion") {
        alert("Your result of " + num1 + " * " + num2 + " = " + (parseInt(num1)*parseInt(num2)));
    }
}
else{
    alert("Only works with numbers")
}

