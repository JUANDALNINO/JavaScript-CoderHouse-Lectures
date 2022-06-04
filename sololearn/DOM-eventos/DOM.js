//---------------------------------- 01. DOM => Modelo de Objetos del Documento
// Arbol de DOM
    /*For the example above:
    <html> has two children (<head>, <body>);
    <head> has one child (<title>) and one parent (<html>);
    <title> has one parent (<head>) and no children;
    <body> has two children (<h1> and <a>) and one parent (<html>);*/


// Objeto => document
// Acceder a todos los documentos del DOM = la raíz
// Siempre se comienza con document
    document.body

// Propiedad => innerHTML
// Modifica el contenido
    document.body.innerHTML = "some text";


//--------------------------------- 02. Seleccionando elementos:
// Todos los elementos del HTML son objetos => Cada objeto tiene propiedades y métodos.
    // El objeto DOCUMENT tiene métodos que permiten seleccionar un elemento html.
// Los tres métodos más comunes:
    // A) Encontrar elemento con el id:
    document.getElementById(id);

// Example:
    // el id = demo está en HTML
    let elem = document.getElementById("demo"); // Selecciona el elemento con el id
    elem.innerHTML = "Hello World!"; // Se modifica el contenido del elemento id
    
    
    // B) Encontrar elemento con la clase:
    document.getElementsByClassName(name);
    // Este método encuentra todos los elementos con la clase y los retorna como un array

// Example:
    let arr = document.getElementsByClassName("demo");
    arr[1].innerHTML = "Hi"; //Accediendo al segundo elemento del array(arr = todos los demo class del html);


    // C) Encontrar elemento con el nombre de la etiqueta:
    document.getElementsByTagName(name);
    // Este método retorna también en un array.

// Example:
    let arr = document.getElementsByTagName("p");
    for(let x = 0; x < arr.length; x++) {
        arr[x].innerHTML = "Hi there";
    }



/*
Working with DOM

Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.
*/

    // Example:
    /* <html>
            <body>
            <div id ="demo">
                <p>some text</p>
                <p>some other text</p>
            </div>
            </body>
        </html> */
    let a = document.getElementById("demo");
    let arr = a.childNodes; // Selecciona los nodos hijos del elemento div(demo);
    for(let x=0; x<arr.length; x++) { //Hace un bucle por todos los div(demo) que encuentre
        arr[x].innerHTML = "new text"; //En cada div(demo) => cambia el texto
    }


//--------------------------------- 03. Modificando elementos:
// A) Modificar atributos:
    // Al igual que innetHTML => cambia el contenido
    // Se pueden cambiar los atributos de un elemento y todos los atributos usando JS

// Example => cambiar el atributo src de una imagen:
    /* <img id="myimg" src="orange.png" alt=""/> */ // Codigo HTML

let el = document.getElementById("myimg");
el.src = "apple.png"; // cambia la imagen

// Example => cambiar el atributo href de una link:
    /*<a href="http://www.example.com">Some link</a>*/

let el = document.getElementsByTagName("a");
el.href = "www....";

// cambiar las imagenes de la página
let arr = document.getElementsByTagName("img");
for(let x=0; x<arr.length; i++) {
    arr[x].src = "demo.jpg";
}


// B) Modificar el estilo:
    // Objeto style = para acceder a los atributos

// Example:
    /*<div id="demo" style="width:200px">Sometext</div>*/

let x = document.getElementById("demo");
x.style.color = "6600ff";
x.style.width = "100px";

// Cambiar los fondos de un elemento "span":
let s = document.getElementsByTagName("span");
for(let x=0; x<s.length; i++) {
    s[x].style.backgroundColor = "#00000";
}



//--------------------------------- 04. Añadiendo y removiendo elementos:
// A) Creando elementos:
    // Métodos para crear nuevos nodos:

    // -> Clona un elemento y retorna el nodo resultante el clon:
        elemento.childNodes()

    // -> Crea un nuevo nodo
        document.createElement(elemento)

    // -> Crea un nodo de texto
        document.createTextNode(text);

// Example:
// 1. Step
    let node = document.createTextNode("Some text"); // Este codigo crea el nodo pero no lo agrega hasta que se añada al árbol = elemento existente

// 2. Step
    // -> Añade un nuevo nodo hijo a un elemento como ultimo de sus hijos
        elemento.appendChild(newNode)

    // -> Insertar node1 antes del node2
        elemento.insertBefore(node1, node2);

// Example:
    /*<div id="demo">some content</div>*/

    //Crear un nuevo párrafo:
    let p = document.createElement("p");
    let node = document.createTextNode("Some new text");
    // Agregar el texto al párrafo:
    p.appendChild(node);

    //En otro elemento:
    let div = document.getElementById("demo");
    //Agregar el párrafo nuevo al div:
    div.appendChild(p);

// Example: Añadir nuevo elemento <li> a lista desordenada con id="list":
    let el = document.createElement("li");
    let txt = document.createTextNode("B");
    el.appendChild(txt);
    let ul = document.getElementById("list");
    ul.appendChild(el);


// B) Eliminando elementos:
    // Hay que seleccionar el padre del elemento y utilizar el método:
        removeChild(node);

//Example:
        /*<div id="demo">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>*/

    let parent = document.getElementById("demo"); // Padre
    let child = document.getElementById("p1"); // Hijo
    parent.removeChild(child); // Borrar hijo p1

// Example: Borrar elemento id="node" ("par" es el padre del elemento):
    let par = document.getElementById("par");
    let node = document.getElementById("node");
    par.removeChild(node);


// C) Reemplazando elementos:
    // Para reemplazar se usa el método:
        elemento.replaceChild(newNode,oldNode)

// Example:
    /*<div id="demo">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>*/
    
    // new element
    let p = document.createElement("p");
    let node = document.createTextNode("New text");
    p.appendChild(node);

    // Reemplazar elemento
    let parent = document.getElementById("demo"); // padre
    let child = document.getElementById("p1"); // Reemplaza el p1 existente
    parent.removeChild(p, child);

