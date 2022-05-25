
// CICLOS
// => Bucle, estructura repetitiva:
// Repetira una o varias instrucciones mientras las condiciones sean cumplidas => repetir código
// Se repetira cuando cumpla las condiciones => Hay que tenerle límite porque puede entrar en bucle infinito
// Cuando no se cumple, termina el ciclo


// Imprimir los numeros del 1 al 10:
// Conocer el inicio y el fin => numero de veces específicas
// var => conteo del ciclo
// var => finalizacion

/*
Bucles determinados => For
  => Tiene determinado las veces de repetición => sabemos la cantidad de veces que se repetiran
Bucles indeterminados => While / Do While
  => No sabemos cuantas veces se repetirá
  = While => mientras

=> Si es true entra el codigo
=> Si esl false no entra y continúa con el siguiente codigo
*/


//   1. FOR
/*
for(desde; hasta; actualización) {
    … //lo que se escriba acá se ejecutará mientras dure el ciclo
   }

  
for(inicio; condición; incremente o decremento) {
  codigo a repetir mientras la condición sea true;
}
*/

// En el ciclo for conocemos previamente cuántas veces se va a ejecutar el código





/* - - - - - - - - -*/
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

// Bucle for
// Para arrays => leer, llenar
// 1 al 10
for (let i = 0; i <= 10; i++) { // i++ => Incrementa en 1
  alert(i);
}

// 10 al 0
for (let i = 10; i > 0; i--) { // i-- => Decrementa en 1
  alert(i);
}

// Saludar
for (let i = 1; i <= 10; i++) {
  alert("Saludo " + i);
}

// Leer array
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i])
}


// Array indeterminado
let trabajadores = new Array();
let persona = "";
let contador = 0;

// Rellenar array 
while (persona != "salir") {
  persona = prompt("Introduce trabajador");
  trabajadores[contador] = persona;
  contador++;
}
// Método POP => eliminar la ultima posicion del array
trabajadores.pop();

for (let i = 0; i < trabajadores.length; i++) {
  console.log(trabajadores[i]);
}




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
/* 
  while (condicion) {
    // codigo a repetir mientras la condicion del bucle sea cierta
  }
*/


// EXAMPLE PILDORAS INFORMATICAS:
// Imprimir los meses del año que están en un array
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let counter = 0;

while(counter < meses.length) {
  alert(meses[counter]);
  counter++;
}




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
// Siempre se va ejectuar una vez al inicio = porque la condición viene después
// Do = Hacer / While = Mientras que...
/*
do {
  // codigo a repetir mientras se cumpla la condicion
} while (condition);
*/

<<<<<<< HEAD
let aleatorio = Math.random(); // Aleatorio entre 0 y 1;
let aleatorio = Math.random() * 100;
let aleatorio = Math.round(Math.random() * 100);


=======

// GAME ADIVINATION:

let aleatorio = Math.round(Math.random()*100);

let miNum = 0;
let intentos = 0;

adivinador();

function adivinador() {
  do {
    miNum = Number(prompt("Adivina un número del 0 al 100"));
  
    if(aleatorio > miNum) {
      alert("Más grande");
    }
    
    if(aleatorio < miNum) {
      alert("Más pequeño");
    }
    intentos++;
  
  } while(aleatorio != miNum);
  
  alert("Haz ganado!! El número es " + aleatorio + " - Lo has encontrado en " + intentos + " intentos");
}




// Simulador => Calcular pagos en cuotas sobre un monto determinado.
// Necesita tener => condicionales, ciclos y funciones

/*
- Pedir el monto total
- Pedir el n° de cuotas
- N° de cuotas + valor de cada cuota => sobre el monto determinado.
    => 6 cuotas de 100.000 c/u => del monto total 600.000
*/

calcularCuotas();

function calcularCuotas() {
    let montoTotal = Number(prompt("¿Cuál es el total que desea diferir?"));
    let cuotas = Number(prompt("¿A cuántas cuotas desea diferir " + montoTotal + " ?"));

    alert("El total de " + montoTotal + " diferido en " + cuotas + " es de " + (montoTotal / cuotas));
};




// Simulador => Pago de servicios:
/*
- Deseas pagar un servicio?
    -> Si = continua
    -> No = Fin del proceso
-> Si => Elegir cuál servicio:
        => Agua
        => Energía
        => Gas
            -> Sacar costo a pagar random => El saldo total es de $ USD + Continuar
-> Preguntar con cuánto pagas?
    -> Si es mayor debe dar devueltas
    -> Si es menor debe ingresar más dinero
-> Al recibir el total, mostrar mensaje de pago exitoso y las devueltas (Si las hay)
*/

let aleNum =  Math.round(Math.random()*100);

iniciarMenu();

function iniciarMenu() {

    let opcion = 0;
    while(opcion !== 4) {
        opcion = Number(prompt(`¿Qué servicio deseas pagar? 1. Agua - 2. Energia - 3. Gas - 4. Ninguno`));
     
        switch(opcion) {
            case 1: {
                pagoAgua();
                break;
            }
            case 2: {
                pagoEnergia();
                break;
            }
            case 3: {
                pagoGas();
                break;
            }
            case 4: {
                alert("Gracias por usar nuestros servicios");
                break;
            }
            default: {
                alert("Opcion Invalida");
                break;
            }
        }
    }
}


function pagoAgua() {
    cobrar(aleNum);
    alert("Gracias por usar nuestros servicios")
}

function pagoEnergia() {
    cobrar(aleNum);
    alert("Gracias por usar nuestros servicios")
}

function pagoGas() {
    cobrar(aleNum);
    alert("Gracias por usar nuestros servicios")
}


function cobrar(valorDelProducto) {
    let dineroIngresado = 0;

    while(dineroIngresado < valorDelProducto) {
        dineroIngresado += Number(prompt("El valor de su compra es " + valorDelProducto + " USD " + "Ingrese su dinero"));
    }

    alert("Su cambio es: " + (dineroIngresado - valorDelProducto) + " USD")
}




/*
iniciarMenu();

function iniciarMenu() {
    let servicio = 0;
    while(servicio !== 4) {
        servicio = Number(prompt(`¿Qué servicio deseas pagar? 1. Agua - 2. Energia - 3. Gas`));

        switch(servicio) {
            case 1: {
                pagoAgua();
                break;
            }
            case 2: {
                pagoEnergia();
                break;
            }
            case 3: {
                pagoGas();
                break;
            }
            case 4: {
                alert("Gracias por usar nuestros servicios");
                break;
            }
            default:
                {
                    alert("Introduce uno de los servicios");
                    break;
                }
        }
    }
}

let aleNum = Math.round(Math.random()*100);

function pagoAgua() {
    costoPago(aleNum);
    alert("Gracias por utilizar nuestros servicios.");
}

function pagoEnergia() {
    costoPago(aleNum);
    alert("Gracias por utilizar nuestros servicios.");
}

function pagoGas() {
    costoPago(aleNum);
    alert("Gracias por utilizar nuestros servicios.");
}

function costoPago(aleNum) {
    let ingresado = 0;

    while(ingresado < aleNum) {
        ingresado += Number(prompt(`El saldo total a pagar es de: ${aleNum} USD
        Ingrese más dinero:`))
    }

    alert(`Su cambio es: ${ingresado-aleNum}`);
}

*/


/*
let costo = Math.round(Math.random()*100);
let valorIngresado = 0;
let inicio = "";

iniciarMenu();

function iniciarMenu() {

    while {
        inicio = prompt("Bienvenido. ¿Deseas pagar un servicio?", "Escribe: si o no");
    
        if(inicio === "si") {
            let opcion = prompt("¿Qué servicio deseas pagar?", "agua, energia o gas");
             
            switch(opcion) {
                case "agua": {
                    pagoAgua();
                    break;
                }
                case "energia": {
                    pagoEnergia();
                    break;
                }
                case "gas": {
                    pagoGas();
                    break;
                }
                default: {
                    alert("Opcion invalida");
                    break;
                }
            }
        }

    }   
}



if(opcion === "agua" || opcion === "energia" || opcion === "gas") {
    alert("El saldo total a pagar es de: " + costo + " USD");
}

valorIngresado = Number(prompt("¿Con cuánto deseas pagar?", "Solo introduce números**"));
    if(valorIngresado > costo) {
        alert("Tu pago ha sido exitoso." + " Tus vueltas son: " + (valorIngresado-costo) + " USD")
    }
        while(valorIngresado < costo) {
            valorIngresado = Number(prompt("Por favor ingresa más dinero. Te hace falta: " + (costo - valorIngresado) + " USD"));
            valorIngresado++;
        }
    
    if(valorIngresado === costo) {
        alert("Tu pago ha sido exitoso.")  
    }
}
} 
while(inicio === "no") {
alert("Gracias por elegir nuestros servicios. Hasta pronto");
*/


/* - - - - - - - */
>>>>>>> daccf706acf578b9e8622e6425b948ca671e534c
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