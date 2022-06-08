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


// For teacher
numeroUsuario = [];
for(let i = 0; i < 5; i++) {
    let numero = Number(prompt("Write a number"));
    numeroUsuario.push(numero);
}
console.log("Numeros del usuario" + numeroUsuario);


// POP => Elimina el ultimo elemento
misNumeros.pop();

// SHIFT => Elimina el primer elemento
misNumeros.shift();

// SPLICE => eliminar uno o varios indicados 
// => 2 parámetros  = 1. indice donde se ubica   - 2. Cantidad desde esa posicion a la derecha
misNumeros.splice(1,1);

// JOIN => junta los elementos del array en un solo string separados por el valor que le pasamos por parámetro:
misNumeros.join(", ");
// => Se pueden almacenar en una variable:
let allNumbers = misNumeros.join(", ");

// CONCAT => Une dos arrays en uno nuevo
const misNumeros = [1,2,3,4,5,6,7,8,9,10];
const misLetras = ["a","b","c","d","e"];

// Array nuevo
let concat = misNumeros.concat(misLetras);


// SLICE => Devuelve una copia del array en otro array => fragmento == Sin modificar el array original
// Parámetros => posicion 1 a posicion 2 del indice:
const slice = misNumeros.slice(2, 4);


// INDEX OF => Obtener indice de un elemento en el array
// Si el elemento no existe, retorna -1 => retorna el indice
const indice = misNumeros.indexOf(5);
console.log(misNumeros.indexOf(100));

// Ejemplo buscando info. del usuario:
    let buscarNum = Number(prompt("Introduce a number"));
    const indice = misNumeros.indexOf(buscarNum);
        if (indice === -1) {
            alert("Your number not exist");
        } else {
            alert("Your number is here and the index is: " + indice);
        }


// INCLUDES => Igual que index of. La diferencia es que devuelve true or false
const includes = misNumeros.includes(5);
console.log(misNumeros.includes(100));
    // Ejemplo buscando info. del usuario:
    let buscarNum = Number(prompt("Introduce a number"));
    const indice = misNumeros.includes(buscarNum);
        if (indice === false) {
            alert("Your number not exist");
        } else {
            alert("Your number is here and the index is: " + indice);
        }


// REVERSE => Modifica el array - invierte el orden de los elementos del array
const misNumeros = [1,2,3,4,5,6,7,8,9,10];
misNumeros.reverse();
console.log(misNumeros);


// ARRAY DE OBJETOS:
const productos = [
    {
        id: 1,
        name: "milk",
        price: 2000,
    },
    {
        id:2,
        name: "beer",
        price: 5000,
    },
    {
        id:3,
        name: "bread",
        price: 400,
    }
]

    // Recorrerlo:
    for(let i = 0; i < productos; i++) {
        alert(productos[i]);
    }

    // FOR OF: => recorrer por cada elemento del array
    console.log("Recorrer con for of");
    for(let producto of productos) {
        console.log(producto.name);
        console.log(producto.id);
    }





/* ----------------------=> Exercise:
    1. Crear objetos
    2. Crear array con los objetos previos
*/

// Crear objetos
let objeto1 = {
    id: 1,
    producto: "arroz",
    precio: 2500,
}

// Puedo crearlos en los arrays
let array = [objeto1, 
    {
        id:2,
        producto: "carne",
        precio: 9900,
    }
];

// Agregar objetos con push:
array.push(
    {
        id:3,
        producto: "leche",
        precio: 5000,
    },
    {
        id:4,
        producto: "pollo",
        precio: 12000,
    }
);


// => Recorrer el array con FOR OF => para cada elemento del objeto:
for (let product of array) {
    console.log(product.id);
    console.log(product.producto);
  }
/* IMPRIME =>
    1
    'arroz'
    2
    'carne'
    3
    'leche'
    4
    'pollo'
*/

// => EJEMPLO CON OBJETOS + ARRAY
class Product {
    constructor(id, name, price, withIva) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.withIva = price * 1.21;
    }
}


// Array para guardar objetos en la clase anterior creada:
const products = []; // Array vacío

// Creación de cada objeto dentro del array con las indicaciones creadas en la clase constructora
products.push(new Product(1001, "rice", 4900));
products.push(new Product(1050, "computer", 1500000));
products.push(new Product(1010, "milk", 6900));
products.push(new Product(1002, "pottato", 3900));
products.push(new Product(1060, "coke", 1900));

// Iterar el array de todos los objetos para cambiar el precio + el iva;
for (let productWithIva of products) {
    productWithIva.additionIva();
}



// EXERCISE: 
/*
    Funcion que permita ingresar usuarios en un sistema:
        1. Crear usuarios => Array con obejetos = usuario, nombre y contraseña
            -> Clase constructora
        2. Variables para insertar los datos y almacenarlos
*/

// Objeto constructor
class Users {
    constructor(user, name, password) {
        this.user = user;
        this.name = name;
        this.password = password;
    }
}

// Array para guardar los objetos dentro:
const usersArray = [];

// Crear cada objeto nuevo por el usuario:
let nameLet = prompt("Please introduce your name");
let userLet = prompt("Please introduce your user");
let passwordLet = prompt("Please introduce your password");

let newUser = usersArray.push(new Users(userLet, nameLet, passwordLet));


// El usuario ingresa un nombre y se revisa en el array si existe:
    let checkUsers = prompt("Introduce your name");

    let index = usersArray.indexOf(checkUsers);
        if(index === -1) {
            alert("Your name doesn't exist in our data base");
        } else {
            alert("Your name exist and the index is: " + index);
        }




// SUMAR LOS NUMEROS DE UN ARRAY:
const numeros = [1,2,3,4,5,6,7,8,9,10];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}



// CHALLENGE WITH ARRAYS + OBJETOS:

// Array de desayunos:
let breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
userIndex();

function userIndex() {
    // Cambio de desayuno:
    let index = Number(prompt("Introduzca indice:"));

    // Cambie el desayuno según el indice:
    alert(breakfasts[index]); // Con [busca lo que se escriba acá]
}
