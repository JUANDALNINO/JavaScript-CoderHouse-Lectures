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


    
// 03. Practice Example:
        // Array de datos / puede estar vacío:
        const productos = [
            { id: 1,  producto: "Arroz", precio: 125 },
            {  id: 2,  producto: "Fideo", precio: 70 },
            {  id: 3,  producto: "Pan"  , precio: 50},
            {  id: 4,  producto: "Flan" , precio: 100}];

        // Funcion crear nuevo dato:
        function newData() {
            let product = prompt("Product new");
            let price = prompt("Price new");

            saveLocal(product, price); // Activando la funcion guardar con datos nuevos del usuario
        }

        // Funcion guardar en local: // No se debe activar sola
        function saveLocal(clave, valor) {
            localStorage.setItem(clave, valor);
        }

        // Guardar producto por producto:
        for(let producto of productos) {
            saveLocal(producto.id, JSON.stringify(productos));
        }

        // Guardar array completo:
        saveLocal("listaProductos", JSON.stringify(productos));


    // Una vez cerrada la app. Se recuperan los datos:
        // Clase constructora de objetos:
        class Producto {
            constructor(obj) {
                this.nombre = obj.producto.toUpperCase();
                this.precio = parseFloat(obj.precio);
            }
        }

        // Obtener el listado almacenado:
        let almacenados = JSON.parse(localStorage.getItem("listaProductos"));
        let productosPost = [];

        // Iterar con for..of los datos almacenados para transformar cada uno:
        for(const objeto of almacenados) {
            productosPost.push(new Producto(objeto));
        }

        // En el nuevo array están los objetos que se pueden usar con sus métodos:
        console.log(productosPost);



//  REAL EXAMPLE: ---------------------------------------------

        // 01. Crear array vacio:
        const productosArray = [];

        // 02. Crear clase constructora:
        class Producto {
            constructor(product, price) {
                this.product = product;
                this.price = parseFloat(price); // Convertir a número
            }
        }

        // 03. Crear función para crear nuevos productos:
        function newProduct() {
            let productoNew = prompt("Producto");
            let priceNew = prompt("Price");
        
            let newProduct = new Producto(productoNew, priceNew);
        
            productosArray.push(newProduct);
        
            console.table(productosArray);
        }
        
        // 04. Función para guardar info. local:
        // Funcion guardar en local: // No se debe activar sola
        function saveLocal(clave, valor) {
            localStorage.setItem(clave, valor);
        }

        function newProductSave () {
            for(let producto of productosArray) {
                saveLocal(producto.id, JSON.stringify(productos));
            }
        }