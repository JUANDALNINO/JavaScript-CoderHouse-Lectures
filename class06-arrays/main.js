// ARRAYS
// => Coleccion de datos = almacenar valores en lista
// => Se pueden guardar todo tipo de valores incluido los objetos
// => Los array tienen indices desde el 0 en adelante para acceder las posiciones del array

// Conceptos:
// Números:
const misNumeros = [100,24,49,55,29]; // => array

// Strings:
const palabras = ["hola", "juan", "name"];

// Booleanos:
const booleanos = [true, false, true];

// Mixto:
const mixto = ["hola", 100, false, "juan", {name:"juan", id:"123"}, [1,2,3,4,5]];
// => No es común usar esto mixto.



// ACCESO = Acceder al array:
const misNumeros = [10,9,8,7,6,54,3,1];
// Posiciones =>     0 1 2 3 4 5  6 7

console.log(misNumeros[5]) // => Accedo a el indice indicado


// Recorrer un array usando ciclos:
const misNumeros = [10,9,8,7,6,54,3,1];

for (let i = 0; i < 5; i++) { // Recorrido en positivo incremento
    console.log(misNumeros[i]);
}

for (let i = 6; i > 0; i--) {
    console.log(misNumeros[i])
}


// Length: longitud del array
const misNumeros = [1,2,3,4,5,6,7,8,9,10];
                // Siempre se debe usar < no <= porque inicia en 0.  
for(let i = 0; i < misNumeros.length; i++) {
    console.log([i]);
}

console.log("La longitud del array es: " + misNumeros.length);



// Propiedades y métodos: => Son funciones, métodos
// PUSH => Agregar nuevo elemento al final del array
misNumeros.push(1000);

// UNSHIFT => Agrega nuevo elemento al comienzo del array
misNumeros.unshift(2000);


/* ----------------------=> Exercise:
    1. Usuario debe ingresar 5 numeros
    2. Almacenar en un array
    3. Imprimir el array
*/

funNumbers();
let numbers = [];

function funNumbers() {
    while(numbers < 5) {
        numbers = Number(prompt("Ingrese un número"));
        console.log(numbers);
    }
}
