// 01. LocalStorage:

// SetItem: Para almacenar un valor
localStorage.setItem("key/llave/id", "valor a guardar");

    localStorage.setItem("bienvenida", "!Hola Code!");
    localStorage.setItem('esValido', true);
    localStorage.setItem('unNumero', 20);

    //Example:
    let edad = Number(prompt("Please write your age"));
    localStorage.setItem("edadUsuario", edad);



// GetItem: Para recuperar la info. almacenada
localStorage.getItem("key/llave/id");

    //Example:
    let edadUsuario = localStorage.getItem("edadUsuario");

    let parrafo = document.createElement("p");
    parrafo.innerHTML = (`Tu edad es: ${edadUsuario} años.`);
    document.body.append(parrafo);

    