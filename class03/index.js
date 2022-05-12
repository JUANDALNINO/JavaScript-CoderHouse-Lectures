
// CICLOS

// Imprimir los numeros del 1 al 10:
// Conocer el inicio y el fin => numero de veces específicas
// var => conteo del ciclo
// var => finalizacion

/*
for(desde; hasta; actualización) {
    … //lo que se escriba acá se ejecutará mientras dure el ciclo
   }
*/


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

