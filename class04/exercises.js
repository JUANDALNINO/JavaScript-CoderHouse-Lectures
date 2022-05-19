// Exercise crear calculadora:
 /*Escriba un programa que permita simular una calculadora. 
 El usuario debe ingresar una de las siguientes opciones: 
 1. Suma 
 2. Resta
 3. Mul 
 4. Div 
 5. Fin
 El menú debe mostrarse, siempre que el usuario no ingrese la opción 5
 El programa debe mostrar error en los siguientes casos: 
    A. El usuario no selecciona una opción válida de 1 a 5 
    B. El usuario no ingresa datos válidos para operar
    C. El usuario ingresa un '0' como segundo operando para la división
*/

function mostrarMenu () {
    let option = 0;
    while (option !== 5) {
        option = Number(prompt(`Choose an option:
                                1. Addition
                                2. Substraction
                                3. Multiplication
                                4. Division
                                5. Finish
                                `));

            let numberA;
            let numberB;

            if (option === 1 || option === 2 || option === 3 || option === 4) {
                numberA = Number(prompt("Please write a number"));
                numberB = Number(prompt("Please write an another number"))
            }

        switch (option) {
            case 1: {
                alert("The addition is = " + (numberA + numberB));
                break;
            }
            case 2: {
                alert("The substraction is = " + (numberA - numberB))
                break;
            }
            case 3: {
                alert("The multiplication is = " + (numberA * numberB))
                break;
            }
            case 4: {
                alert("The division is = " + (numberA / numberB))
                break;
            }
            case 5: {
                alert("Thanks for use our services")
                break;
            }
            default: {
                alert("Please introduce an avaliable option")
                break;
            }
        }
    }
};

mostrarMenu();