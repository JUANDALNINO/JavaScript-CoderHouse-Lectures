// Lecture Advanced Operators
//  Sugar Sintax

// 01. Operador ++
//  Aumentar valor en 1
let num1 = 3;
num1 = num1 + 1; // = 4
num1 += 1; // = 5

num1++; // = 6



// 02. Operador ternario
let age = Number(prompt("Please write your age"));
if (age > 18) {
    message = "You can buy the beer";
}
else {
    message = "You can't buy the beer";
}
alert(message);
console.log(message);

// Simplificar:
// condicion  ?  caso1  :  caso2
//               true      false

let msj2 = age > 18 ? "You can buy the beer" : "You can't buy the beer";
alert(msj2);



// 03. Operador AND
// Retorna si la condición es true
const usuarios = ["User1", "User2"];

if (usuarios.length === 0) {
    alert("No hay usuarios");
}

// && => Una sola condición if
usuarios.length !== 0 && alert("Si hay usuarios");



// 04. Operador Or
// operando1 || operando2
// Si es distinto de => 0, nul, undefined, NaN, false, or string vacío => Retorna (operador1) 
// Si no   => Retorna (operador2)

    const usuario1 = {
        nombre: "John Doe",
        edad: 14
    }
    const usuario2 = null

    console.log(usuario1 || "El usuario no existe")
    // { nombre: 'John Doe', edad: 14 }
    console.log( usuario2 || "El usuario no existe" )
    // El usuario no existe

    
    // Exercise:
    // Pedir nombre. Máximo 3 intentos. Imprimir en html.
    let contador = 1;
    mostrarMensaje();

    function mostrarMensaje() {
        document.body.innerHTML="";

        if(contador<3) {
            
            let nombre = prompt("Escriba su nombre");
            let msj = nombre !=="" ? `Bienvenido, ${nombre}` : `Debe ingresar un nombre`;
    
            const div = document.createElement("div");
            div.innerHTML = msj;
            document.body.appendChild(div);
    
            // Operador And
            nombre==="" && mostrarBoton();
    
            contador++;

        } else {
            alert("Contacte admin");
        }

    }

    function mostrarBoton() {
        const btn = document.createElement("button");
        btn.addEventListener("click", () => {
            mostrarMensaje();

            btn.innerHTML="Intentar";
            document.body.appendChild(btn);
        })
    }



// 05. Operador Nullish:
// // operando1 ?? operando2
// Si es distinto de => null, undefined => Retorna (operador1) 
// Si no   => Retorna (operador2)
const usuario3 = {
    nombre: "John Doe",
    edad: 14
}
const usuario4 = null

console.log(usuario3 ?? "El usuario no existe")
// { nombre: 'John Doe', edad: 14 }
console.log( usuario4 ?? "El usuario no existe" )
// El usuario no existe



// 06. Acceso condicional
// ? => No mata el programa hasta ahí
    let idIngresado = Number(prompt("Ingrese numero"));
    let buscado = array.find(element => element.id=== idIngresado);

    console.log(buscado?.nombre); // No bota error, bota undefined



// 07. Destructuración / Destructuring
// En vez de asignar varias variables a cada propiedad del objeto =>
    let var1 = prop.objeto;
    let var2 = prop.objeto2;

    // Lo que se hace es usar:
    const producto1 = {
        id: 1,
        nombre: "leche",
        precio: 1000,
    }

    // Variables {var1, var2} = del objeto
    const {id, nombre, precio} = producto1;



// 08. Destructuring => Alias
// Asignarle un alias a las variables
    const producto2 = {
        id: 2,
        nombre: "coke",
        precio: 3500,
    }

    // Se le coloca un alias a cada propiedad en cada variable
    const { 
        id: idTwo, 
        nombre: nombreTwo, 
        precio: precioTwo} = product2;



// 09. Destructuring Params:
    const producto3 = {
        id: 10,
        nombre: "Curso Javascript",
        precio: 12500
    }

    // desestructurando lo que reciba por parámetro
    const desestructurar = ( {id, nombre} ) => {
        console.log(id, nombre)
    }
    
    desestructurar(producto3) // 10 Curso Javascript



// 10. Destructuring array:
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")

// spread ... del array
console.log(...nombres) // Juan Julieta Carlos Mariela




// 11. Spread Operator:



    // Example 2:
    const prod1 = {
        id: 1,
        nombre: "leche",
        precio: 2000
    };

    // No toca ni sobreescribe el prod1
    const prod2 = {...prod1, id:2};
    const prod3 = {...prod2, id:3, marca: "clim"};

