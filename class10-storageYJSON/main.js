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

    

// 02. Session Storage:

// SetItem: Para almacenar un valor
sessionStorage.setItem("usuario", "LucasSa");

// GetItem: Para recuperar la info. almacenada
sessionStorage.getItem("usuario");



// 03. Recorrer Storage:
    // Session:
    sessionStorage.setItem("nombre", "Juan");
    sessionStorage.setItem("dogs", "jua");
    sessionStorage.setItem("girl", "laura");

    //Recorrer storage:
    for(let i=0; i<sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        console.log(sessionStorage.getItem(key));
    }