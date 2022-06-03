

//   MODIFICAR NODOS => cambiar el contenido

// Exercise:
    // Modificar el contenido en html
    // Pedir nombre
    let name = prompt("Ingrese su nombre");

    // Mostrar en h1 => elemento en la posición [0]
    const titH1 = document.getElementsByTagName("h1")[0];

// 1. innerText => Modificar el nodo de texto. Acceder o modificar el contenido del DOM
    // Imprimir en el documento el nombre
    titH1.innerText = `!Bienvenido, ${name}!`;


// 2. innerHTML
// Sin [] => porque es único
    const div = document.getElementById("miContenido");
    div.innerHTML = `<b>Esto es negrita</b><br>
                        Esto no es negrita<br>
                        <i>Esto es italica</i>
                        <p>Esto es un parrafo</p>
                        ${name}`;


                        