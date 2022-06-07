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


//---------------------------------------------------------
/* SCOPE: Alcance
    -> Colección de variables, funciones y objetos
    -> Scope global => fuera de una funcion = disponible en cualquier parte del código
    -> Scope local => dentro de una función = disponible solo en la función

    Menor acceso = principio a limitar lo que está al alcance
        => Llaves para cada código específico. Quién modificó el código
        => Es recomendable usar el SCOPE LOCAL
*/

