// función que tras 3 segundo retorna un array de objetos

const productos = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]


const pedirProductos = (res) => new Promise((resolve, reject) => {
    if(res===true) {
        resolve(productos)
    } else {
        reject("Error");
    }
})


const value = Number(prompt("Ingrese"));
const resDeProductos = value==1 ? true : false;

pedirProductos(resDeProductos)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => console.log("Gracias"));