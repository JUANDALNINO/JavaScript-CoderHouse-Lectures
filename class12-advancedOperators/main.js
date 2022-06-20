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
    mostrarMensaje();

    function mostrarMensaje() {
        document.body.innerHTML="";

        let nombre = prompt("Escriba su nombre");
        let msj = nombre !=="" ? `Bienvenido, ${nombre}` : `Debe ingresar un nombre`;

        const div = document.createElement("div");
        div.innerHTML = msj;
        document.body.appendChild(div);

        // Operador And
        nombre==="" && mostrarBoton();
    }

    function mostrarBoton() {
        const btn = document.createElement("button");
        btn.addEventListener("click", () => {
            mostrarMensaje();

            btn.innerHTML="Intentar";
            document.body.appendChild(btn);
        })
    }


// 05. 