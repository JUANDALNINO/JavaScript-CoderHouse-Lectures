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



// Cafetera
Skip to content
santiagoaviladev
/
coder30395
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
More
coder30395/Clase04Funciones/061Ejercicio2/js/main.js /
@santiagoaviladev
santiagoaviladev Ejercicio maquina cafe
 History
 1 contributor
98 lines (71 sloc)  2.25 KB

/*
    Máquina de Café y Mate
    Escriba un programa que simule una máquina dispensadora de café y mate
    El mate cuesta 3 pesos
    EL café cuesta 2 pesos
    La máquina debe mostrar un menú, con los productos disponibles y los precios
    Igualmente, debe mostrar una opción de 'Salir' 
    El menú debe repetirse siempre que el usuario no seleccione la opción de salir
    Una vez el usuario ha seleccionado el producto que quiere, 
    el sistema debe pedir que ingrese un monto de dinero
    Si el usuario ingresa un monto mayor, el sistema debe mostrar el cambio entregado 
    Si el usuario ingresa un monto menot, el sistema debe mostrar de nuevo la opción para ingresar dinero
    La máquina solo acepta dinero en denominaciones de: 
    1,2, 5 y 10 pesos. 
    
    El sistema debe mostrar errores cuando: 
    * El usuario ingresa una opción no válida en el menú
    * El uusuario ingresa un monto no numérico 
    * El usuario ingresa un monto no aceptado por la máquina
    
*/

  mostrarMenu();

  function mostrarMenu()
  {
     let opcion = 0;
     while(opcion!==3)
    {
        opcion = Number(prompt(`Ingrese una opcion:
                                1. Mate (1 peso)
                                2. Café (2 pesos)
                                3. Fin`));
       
        switch(opcion)
        {
            case 1: 
            {
                venderMate();
                break;
            }
            case 2:
            {
                venderCafe();
                break;
            }
            case 3: 
            {
                alert("Gracias");
                break;
            }
            default:
                {
                    alert("Opcion Invalida");
                    break;
                }

        }
    }

  }


  function venderMate(){

     cobrar(1);
     alert("Gracias por su compra de MATE")

  }

  function venderCafe(){

    cobrar(2);
    alert("Gracias por su compra de CAFE")

 }

 function cobrar(valorDelProducto)
 {
    let dineroIngresado = 0;

    while(dineroIngresado<valorDelProducto){
        
        dineroIngresado+=Number(prompt(`El valor de su compra es ${valorDelProducto}
        Ingrese dinero:`));


    }

    alert(`Su cambio es: ${dineroIngresado-valorDelProducto}`)
 }