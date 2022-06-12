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



// 03. Recorrer Storage: => recorrer las key en el storage
    // Session or local:
    sessionStorage.setItem("nombre", "Juan");
    sessionStorage.setItem("dogs", "jua");
    sessionStorage.setItem("girl", "laura");

    //Recorrer storage:
    for(let i=0; i<sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        console.log(sessionStorage.getItem(key));
    }


    
//Session:
sessionStorage.setItem("Seleccionados", [1,2,3,4,5]); // Hay un array
let lista = sessionStorage.getItem("Seleccionados").split(","); //Método split para recuperar bien la info.

console.log(lista);

//Boolean:
sessionStorage.setItem("esValido", true); // Boolean
let bandera = (sessionStorage.getItem("esValido") == "true");

console.log(bandera);




// 04. Eliminar datos:
    localStorage.setItem("bienvenida", "Hola Code");
    sessionStorage.setItem("esValido", true);

    // -> Por clave = removeItem
        localStorage.removeItem("bienvenida");
        sessionStorage.removeItem("esValido");

    // -> Eliminar todo = clear()
        localStorage.clear(); // Elimina todo
        sessionStorage.clear(); // Elimina todo



// JSON