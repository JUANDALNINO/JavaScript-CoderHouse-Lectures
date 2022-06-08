// Funciones elevadas
// Los parámetros son funciones
// Lo que retorna funciones


// Función flecha:
    // Se declara la función:
    //         (parametros)(código)
    let doubler = (num) => number*2;
    // Se llama la función
    doubler(4);


    // Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos:
    const doubler = item => item * 2;

    // Más de un argumento:
    const multiplier = (item, multi) => item * multi;
    multiplier(4, 2);


// TYPE OF => Comprobar el tipo de una variable:
    console.log(typeof ""); // String
    console.log(typeof 0); // Number
    console.log(typeof []); // object = los arreglos son técnicamente un tipo de objeto.
    console.log(typeof {});// objetct


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


// Funcion mostrar menu
mostrarMenu();

function mostrarMenu() {
    let opcion = 0;

    while(opcion!=10) {
        opcion = Number(prompt("Seleccione una acción: 1. Agregar Usuario - 2. Eliminar Usuario - 3. Modificar usuario - 4. Listar usuario - 5. Buscar usuario - 6. Filtrar listado - 10. Salir"));

    
        switch(opcion) {
            case 1: {
                agregarUsuario();
                break;
            }
            case 2: {
                eliminarUsuario();
                break;
            }
            case 3: {
                modificarUsuario();
                break;
            }
            case 4: {
                listarUsuarios();
                break;
            }
            case 5: {
                let encontrado = buscarUsuario();
                
                if (encontrado) {
                    alert(`El usuario es: ID: ${encontrado.id} - NOMBRE: ${encontrado.nombre} - APELLIDO: ${encontrado.apellido}`)
                } else {
                    alert("Usuario no encontrado");
                }

                break;
            }
            case 6: {
                let filtrados = filtrarListado();
                console.log("Filtrados");
                console.table(filtrados);
                break;
            }
            case 10: {
                alert("Gracias");
                break;
            }
            default: {
                alert("opcion invalida");
                break;
            }

        }
    }
}


// Funciones de usuario:
function agregarUsuario() {
    let nombre = prompt("Ingrese nombre del usuario");
    let apellido = prompt("Ingrese el apellido del usuario");

    // Crear el objeto usuario
    let usuario = new Usuario(getId(), nombre, apellido);

    // Agregar usuario al array
    usuarios.push(usuario);

    alert("Usuario creado.");
    console.table(usuarios);
}

function getId() {
    // Validar que haya 1 elemento en el array
    if(usuarios.length === 0) {
        return 1;
    } else {
        // Conseguir el ultimo id
    let ultimoId = usuarios[usuarios.length-1];
    return ultimoId.id+1;
    }
}


// Métodos de búsqueda y transformación: Solucionar problemas con los arrays

// 1. forEach() => por cada uno
// Itera el array y por cada elemento ejecuta la funcion que se envia como parámetro.

    // Funcion para listar el array:
    function listarUsuarios() {
        console.log("Listar usuarios:");

        // Iterar el array e imprimir
        usuarios.forEach( (usuario) => {
            console.log(usuario.nombre + " " + usuario.apellido);
        })
    }


// 2. find() => recibe una función de comparación por parámetro = retorna el primer elemento que cumpla con esa condición

    // Funcion para buscar usuario:
    function buscarUsuario() {
        let idABuscar = Number(prompt("Ingrese el id del usuario:"));

        // Compara la entrada del usuario con el id en el array
        return usuarios.find( (usuario) => idABuscar === usuario.id);
    }


// 3. filter() => recibe una función de comparación y retorna un nuevo array con los elementos que cumplen la condición = si no hay retorna array vacío

    // Función para filtrar usuario:
    function filtrarListado() {
        let aBuscar = prompt("Ingrese un texto para buscar");

        // Compara la entrada del usuario con los strings posibles:
        return usuarios.filter( (usuario) => usuario.nombre.indexOf(aBuscar) !== -1 || usuario.apellido.indexOf(aBuscar) !== -1
        )
    }


// 4. Some => funciona igual que find() = retorna true or false:
function eliminarUsuario() {
    let id = Number(prompt("Ingrese el ID que desea borrar"));

    //Compara y devuelve true or false
    let esta = usuarios.some( (usuario) => usuario.id === id);

    if(esta) {
        let soloIds = usuarios.map( (usuario) => usuario.id)
        
        let indice = soloIds.indexOf(id);

        usuarios.splice(indice,1);
        alert("Usuario eliminado");

        console.log("Eliminado");
        console.table(usuarios);

        
    } else {
        alert("Usuario no encontrado")
    }
}
