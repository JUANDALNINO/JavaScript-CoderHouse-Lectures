
// CICLOS
// => Bucle, estructura repetitiva:
// Repetira una o varias instrucciones mientras las condiciones sean cumplidas
// Se repetira cuando cumpla las condiciones => Hay que tenerle límite porque puede entrar en bucle infinito
// Cuando no se cumple, termina el ciclo


// Imprimir los numeros del 1 al 10:
// Conocer el inicio y el fin => numero de veces específicas
// var => conteo del ciclo
// var => finalizacion



//   1. FOR
/*
for(desde; hasta; actualización) {
    … //lo que se escriba acá se ejecutará mientras dure el ciclo
   }
*/
// 
for (let i = 1; i <= 30; i++) {
  console.log(i)
}

// El bucle for se puede entender con un el condicional if =>
let a = 0;
if (a < 3) {
  console.log(i);
  i++;
} if (a < 3) {
  console.log(i);
  i++;
} if (a < 3) {
  console.log(i);
  i++;
};



for (let i = 1; i <= 10; i++) {
    alert(i);
}

/*
1
2
3
4
5
6
7
8
9
10
*/


// Pedirle el dato al usuario:
let dataUser = Number(prompt("Write a number"));

if(!isNaN(dataUser)) {
    for (let i = 1; i <= dataUser; i++) {
        alert(i);
    }
} else {
    alert("Not is a Number");
};


// Exercise: Ajedrez
// Imprimir el tablero de ajedrez:


for (let linea = 1; linea <= 8; linea++) {
    if (linea === 1 || linea === 8) {
      console.log("TCARRACT");
    }
    else if (linea === 2 || linea === 7) {
      console.log("PPPPPPPP");
    }
    else {
      console.log("00000000");
    }
  }



// 2. WHILE
/* while (condicion) {
  // codigo
}
*/

let i = 0;
while (i <= 3) {
  console.log(i);
  i++;
}


let i = 1;
while (i <= 10)
  {
    console.log(i);
    i++;
  };


  // Ciclo de pares
let j = 2;
while (j <= 10) {
    console.log(j);
    j+=2;
}

// Ciclo de impares
let r = 1;
while (r <= 10) {
    console.log(r);
    r+=2;
}


// 3. DO WHILE
// Siempre se va ejectuar una vez al inicio
// Do = Hacer / While = Mientras que...
/*
do {
  // codigo
} while (condition);
*/

let i = 0;
do {
  alert (i);
  i++;
} while (i < 3);



// Exercise 2
let numPaquetes = Number(prompt("Ingrese el numero de paquetes"));

let mayor = 0;
let menor = 0;

let pesoPaquete = 0;

for (let i = 1; i <= numPaquetes; i++) {
    let pesoActual = Number(prompt("Ingrese el peso del paquete " + i));
    pesoPaquete += pesoActual;
    if (pesoActual > mayor) {
        mayor = pesoActual;
    }
    if (i == 1) {
    }
 };

 alert("El promedio del peso de los paquetes es igual a: " + pesoPaquete / numPaquetes);


 // Factorial:
 /*
1. Numero a factorizar:
2. Multiplicar el numero anterior por el numero ingresado
3. Resultado de ese primero >
4. Multiplicar 
#. Resultado
 */

// 1.
let n = Number(prompt("Ingrese un número"))
let resultadoFactorial = 1;

for (let numeroI = 1; numeroI <= n;  numeroI++) {
    resultadoFactorial = resultadoFactorial * numeroI;
};

alert("El factorial es: " + resultadoFactorial);