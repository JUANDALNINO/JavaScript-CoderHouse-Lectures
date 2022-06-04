
/* ----------------------------------> CONDICIONALES <---------------------------------------------------*/
// 01. IF declarations:
// Un bloque de codigo específico se ejecutará si se cumple la condición específica y es true:
if (condition) {
    //bloque de codigo
}

    // EXAMPLE:
        let num1 = 7;
        let num2 = 10;

        if (num1 < num2) { // Debe ser true
            alert("Js is easy to learn");
        }

        if (num1 > num2) { // Esta es false y no se cumple la condición
            alert("Js is easy to learn");
        }



// 02. ELSE
// Se ejecuta el else cuando la condición es falsa.
if (condition) {
    // Se ejecuta codigo si es true
}
else {
    // Se ejecuta codigo si es false
}

    // EXAMPLE:
        let num1 = 7;
        let num2 = 10;

        if (num1 < num2) { // Debe ser true
            alert("It's true");
        }
        else { // Es false
            alert("It's false");
        }



// 03. SWITCH
// => Multiples condiciones. Ejecuta diferentes acciones con diferentes condiciones
switch (expresion) { // Esta expresion es evaluada una vez => Es comparada con cada valor de cada caso => si tiene coincidencia ejecuta el codigo.
    case n1:
        declaracion
        break;
    case n2:
        // Codigo a ejecutar
        break;
    default:
        // codigo a ejecutar
}

    // EXAMPLE:
        let day = prompt("Please write a day");

        switch (day) { // La expresion a comparar con los casos
            case "monday": // caso 1 a comparar 
                document.write("Yes, it's monday"); // codigo a ejecutar si el caso 1 es true;
                break;
            case "tuesday":
                document.write("Yes, it's tuesday");
                break;
            case "wednesday":
                document.write("Yes, it's wednesday");
                break;
            case "thursday":
                document.write("Yes, it's thursday");
                break;
            case "friday":
                document.write("Yes, it's friday");
                break;
            case "saturday":
                document.write("Yes, it's saturday");
                break;
            case "sunday":
                document.write("Yes, it's sunday");
                break;
            default:
                alert("Write a real day");
        }


        
/* ----------------------------------> BUCLES <---------------------------------------------------*/
// Los bucles pueden ejecutar un codigo un numero de veces. Cuando se quiere repetir un codigo y añadir valores cada vez que se repite.
            // La condición debe ser falsa en algún momento para que el bucle se termine o si no será infinito

// 01. Bucle FOR
for (statement1 ; statement2; statement3) {
    // bloque de código a ejecutar
}

    // statement1 => se ejecuta antes de que el bucle comience
        let i = 1; // Se establece una variable
    // statement2 => Determina la condición para ejecutar el bucle
        i <= 5; // Determina la condición para que se ejecute el bucle
    // statement3 => Se ejecuta cada vez y después del bucle cuando ha sido ejecutado
        i++ // Incrementa valor cada vez que se ejecuta
    for (let i=1; i<=5; i++) {
        console.log(i); // Codigo a ejecutar en cada bucle
    }



// 02. Bucle WHILE
// Repite un codigo mientras una condición es true:
while (condicion) { // La condición puede ser cualquiera que retorne true or false
    //bloque de codigo a ejecutar
}

    //Example:
    let i = 1; // Se declara la variable antes
    while (i <= 10) { // La condicion
        console.log(i); // Codigo a ejecutar
        i++; // Incremento hasta que i valga menos o igual a 10
    }



// 02. Bucle DO WHILE
// Variante del bucle while => El do se ejecuta siempre una vez, antes de validar la condición si es true en el while. Entonces se repetirá hasta que sea falsa
do {
    // bloque de codigo a ejecutar una vez y siempre y cuando sea true
}
while (condicion); // Condicion para que se siga repitiendo una y otra vez

    // Example:
    let i = 20;
    do {
        console.log(i);
        i++
    }
    while (i<=25);




// Practice:

//  The If Statement
// 01. Mes de vacaciones:
var month = readLine()
//your code goes here
if(month === "August") {
    console.log("vacation")
}


// Declaracion if else:
// 02. Record mundial:
var height = parseFloat(readLine(), 10)
//your goes code here
if(height>2.45) {
    console.log("new record")
}
else {
    console.log("not this time")
}


// Declaracion else if:
// 03. Resultados de los examenes
var score = parseInt(readLine(), 10)
/*
88 and above => excellent
40-87   => good
0-39 => fail
*/
// your code goes here
if(score>=88) {
    console.log("excellent")
}
else if(score>=40 && score<=87) {
    console.log("good")
}
else if (score<=39) {
    console.log("fail")
}


// Declaracion Switch:
// 04. modo oscuro:
function main() {
    var themeNumber = parseInt(readLine(), 10)
    /*
    1 - Light
    2 - Dark
    3 - Nocturne
    4 - Terminal
    5 - Indigo
    */
    // Your code here
    switch(themeNumber) {
        case 1:
            console.log("Light");
            break;
        case 2:
            console.log("Dark");
            break;
        case 3:
            console.log("Nocturne");
            break;
        case 4:
            console.log("Terminal");
            break;
        case 5:
            console.log("Indigo");
            break;
    }
}


// Bucle for:
// 05. Repetir y repetir:
for(let i = 0; i<3; i++) {
    console.log(expression);
}


// Bucle While
// 06. Time's up:
function main() {
    var seconds = parseInt(readLine(), 10)
    // Your code here
    while(seconds>=0) {
        console.log(seconds);
        seconds--;
    }
}


// Bucle con break and continue:
// 07. Omitiendo el 13
var countOfRooms = 15;
// Your code here
for(let i = 1; i<=16; i++) {
    if(i == 13) {
        continue;
    }
    console.log(i);
}