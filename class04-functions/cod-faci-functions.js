// FUNCIONES: Definir el código una vez, reusarlo las veces que se necesite con argumentos diferentes.
// 1. Se declara la función
// 2. Se llama la función para ser ejecutada

    // Definir la función:
    function nameFunction () {
        // Código a ejecutar
    }

    // Llamando la función:
    nameFunction();

    // Example:
    function saludar () {
        alert("Hola Juan");
    }
    saludar();

    // Example:
    function cuadrado(num) {
        return num*num; // Genera un resultado usando la función
                        // El return termina la función, es la última parte de la función - termina su ejecución
    }
    cuadrado(4);
    let cuadradoDeDos = cuadrado(2); // El return se asigna a la variable


// Practice:
function loading () {
    console.log("Loading");
}
loading();


//--------------------------------------------------
// PARÁMETROS DE FUNCIONES:
function functionName (param1, param2, param3) {
    // Some code
};
functionName(argumento);

    // Example:
    function sayHello(name) {
        console.log("Hi " + name);
    }

    // Al llamar la función es cuando los parámetros se convierten en argumentos
    sayHello("David");
    sayHello("Martin");
    sayHello("Sarah");


// Practice: Recordatorios:
function setReminder (theme) {
    console.log("You set a reminder about " + theme);
}


// No hay necesidad de agregar parámetros => pueden agregarse los argumentos en el futuro cuando se use la función:
function sumaTodos() {
    return arguments[0] + arguments[1]; // Siempre va a realizar esta operacion
}
console.log(sumaTodos(5,5));
sumaTodos(20,20);


//--------------------------------------------------
// MULTIPLES PARÁMETROS:
function myFun(x,y) {
    // some code
}

    //Example:
    function sayHelloTwo(name, age) {
        console.log(name + " is " + age + " years old.");
    }
    sayHelloTwo("jUan", 27)


//Practice: Quien ganó el partido:
function finalResult(goalsTeam1, goalsTeam2) {
    if (goalsTeam1 > goalsTeam2) {
        return "Team 1 won";
    } else if (goalsTeam2 > goalsTeam1) {
        return "Team 2 won";
    } else if (goalsTeam1 === goalsTeam2) {
        return "Draw";
    }
};

//--------------------------------------------------
// RETURN:
// Retornar un valor => cuando se necesita un resultado
    // Example:
    function myFunction (a,b) {
        return a*b;
    }
    var x = myFunction(5,6); // En la variable x se guarda el resultado del return de la función

    //Example:
    function addNumbers(a,b) {
        var c = a+b;
        return c;
    }
    console.log(addNumbers(10,90));

// Practice:
var average = avg(num1, num2, num3);
function avg(num1, num2, num3){
return (num1+num2+num3) / 3;
};


// Example: - - - - - - - 
let resultado = 0;
function sumar(num1, num2) {
    resultado = num1+num2;
}

function mostrar(mensaje) {
    console.log(mensaje);
}

    // Llamado: => La división del problema en dos funciones 
    sumar(10,10);
    mostrar(resultado);

// Para no usar variable previa:
function sumarTwo(num1, num2) {
    return num1+num2;
}
let resultadoTwo = sumarTwo(10,10);


//---------------------------------------------------------
/* SCOPE: Alcance
    -> Colección de variables, funciones y objetos
    -> Scope global => fuera de una funcion = disponible en cualquier parte del código
    -> Scope local => dentro de una función = disponible solo en la función

    Menor acceso = principio a limitar lo que está al alcance
        => Llaves para cada código específico. Quién modificó el código
        => Es recomendable usar el SCOPE LOCAL
*/


// Llamar la función varias veces con un ciclo:
function name() {
    alert("Juan");
}

for (let i = 0; i < 3; i++) {
    solicitarNombre();
}



//-------------------------------------------------------
/*
FUNCIONES ANÓNIMAS:
*/

// Example 1
function executor (funcion) {
    funcion();
}

function decirHola() {
    console.log("Hello!");
}

// Llamado de la función
executor(decirHola); // "Hello!"


// Example 2
executor(function() { // El mismo resultado sin necesidad de declarar la función DecirHola
    console.log("Hello");
})



//---------------------------------------------------------
/*
EL CONTEXTO:
    this => tiene scope (global y local)
*/

let usuario = {
    nombre: "Uriel",
    apellido: "Hernandez",
    nombreCompleto: function() {
        console.log(this.nombre + " " + this.apellido);
    }
}
usuario.nombreCompleto(); //"Uriel Hernandez"



//------------------------------------------------
// FUNCIONES FLECHAS: El Nombre se le coloca a la variable:
const hola = ()=>{}

const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b 
console.log(suma(15,20))
console.log(resta(20,5))



// ----------------------------------------------
// CALL, APPLY AND BIND => Métodos para la variable THIS
