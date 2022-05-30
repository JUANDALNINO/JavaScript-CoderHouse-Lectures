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


// Min => 32