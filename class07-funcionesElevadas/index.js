// Funciones elevadas
// Los parámetros son funciones
// Lo que retorna funciones

// 1. Funcion que retorna función
function mayorQue(n) {
    return (m) => m>n; // funcion retornada
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQue(12));
console.log(mayorQue(8));


// 2. Funcion que recibe función por parámetro:
function porCadaUno(arr, fun) {
    //for(let i = 0; i < arr.length; i++) {}
    for (let elemento of arr) {

        fun(elemento);

    }
}

porCadaUno([1,2,3,4,5,6,7,8,9,10], console.log);




// Sistema crud usuarios
// Create - Read - Update - Delete
// Admin. de usuarios:

//Objeto usuario
class Usuario {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Usuarios
let usuario1 = new Usuario(1, "Juan", "Niño");
let usuario2 = new Usuario(2, "Martin", "Angarita");
let usuario3 = new Usuario(3, "Luisa", "Caceres");
let usuario4 = new Usuario(4, "Sofia", "Niño");
let usuario5 = new Usuario(5, "Santiago", "Aguirre");


//Array:
let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];

// Min 36