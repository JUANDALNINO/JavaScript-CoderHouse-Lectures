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
// JSON
    /* Formato para almacenar info. de un objeto en un string
        Formato de texto que representa datos de objetos Js
        Enviar y almacenar datos en apps web
        JSON = es un objeto global. Permite transformar.
        */


// 01. Convertir OBJETOS => JSON
    // Acepta un objeto como parámetro
    // Se hacer para almacenar info. de un objeto en storage o se desean enviar datos al servidor
    JSON.stringify(objeto como parametro) // = Transformar objeto a JSON

        //example:
        let objeto = {
            id: 01,
            producto: "Arroz",
            precio: 3000
        };

        let enJSON = JSON.stringify(objeto);

        console.log(enJSON); // '{"id":1,"producto":"Arroz","precio":3000}' // string
        console.log(typeof objeto); // object
        console.log(typeof enJSON); // string

        // Se guarda el objeto
        localStorage.setItem("objeto1", enJSON); 

    
// 02. Convertir JSON => Objetos:
        // Transformar string en formato JSON a objeto Js
        // Cuando se necesita un objeto a partir de esos datos string
        JSON.parse(string como parametro);

        let enJSON = '{"id":1,"producto":"Arroz","precio":3000}'; // String formato JSON

        let objeto2 = JSON.parse(enJSON); // Se guarda ya convertido

        console.log(typeof enJSON);  // string
        console.log(typeof objeto2); // object
        console.log(objeto2.producto); // "Arroz"


    //Example:
        //01. Objeto:
        let objeto = {
            id: 01,
            producto: "Arroz",
            precio: 3000
        };

        // 02. Convertir el objeto a JSON:
        let objetoEnJSON = JSON.stringify(objeto);

        // 03. Dato de tipo:
        console.log(typeof objetoEnJSON); // string
            // Result:
            '{"id":1,"producto":"Arroz","precio":3000}'

        //04. Converir JSON a objeto:
        let JSONenObjeto = JSON.parse(objetoEnJSON); // Objeto
            // Result:
            //{id: 1, producto: 'Arroz', precio: 3000};

    