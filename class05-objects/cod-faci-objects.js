/* Intro. Objetos:
    - Los objetos son variables que contienen muchos valores.
    - Se escriben como pares
*/
var persona = {
    nombre: valor,
};

// Los valores se denominan PROPIEDADES:
//  property    property value
//  nombre      valor


/*
    1. PROPIEDADES DEL OBJETO:
*/

// - Acceder a las propiedades del objeto de dos formas:
    objectName.propertyName // con punto
    //or
    objectName["propertyName"] // corchetes y ""

    // Example:
    var personaTwo = {
        nombre: "Juan",
        edad: 27
    };
    // Acceder:
        let name = personaTwo.nombre;
        let age = personaTwo["edad"];


// LENGTH => es utilizada para contar el número de caracteres en una propiedad o cadena de texto (string)
    
    //Example:
    let course = {
        name: "js",
        lessons: 41,
    }

    console.log(course.name.length); // Contar caracteres en la propiedad name


/*
    2. MÉTODOS DE OBJETOS:
    - Un método es una propiedad que contienen la definición de una función
    - los métodos son funciones que han sido guardadas como propiedades de objetos
*/
    // Método de objeto:
    objectName.methodName();

// Exercise:
var cuboid = {
    length: 25,
    width: 50,
    height: 200
};

let lengthCub = cuboid.length;
let widthCub = cuboid.width;
let heightCub = cuboid.height;

console.log(lengthCub*widthCub*heightCub);


/*
    CONSTRUCTOR DE OBJETOS:
    -> Crear un tipo de objeto = fábrica = puede ser usado para crear objetos de un mismo tipo.
*/

    //Función constructora:
    function People(name, age, color) {
        this.name = name; // this => menciona el objeto actual
        this.age = age;
        this.color = color;
    };


    // Luego de tener la función constructora, se crear nuevos objetos del mismo tipo:
    let p1 = new People("John", 42, "green"); // usando new => palabra clave para crear
    let p2 = new People("Juan", 27, "black");


// Exercise:
function Flight(flightNumber, status) {
    //fix the constructor
    this.flightNumber = flightNumber;
    this.status = status;
};

    let Flight1 = new Flight(flightNumber, status);



/*
    MÉTODOS:
    - Son funciones que se guardan como propiedades de un objeto
*/

    // Crear métodos de objetos:
    methodName = function() {
        //code
    }

    // Acceder al método:
    objectName.methodName();


        let cadena = "HOLA CODER";
    //Propiedad de objeto String: Largo de la cadena.
    console.log(cadena.length);
    //Método de objeto String: Pasar a minúscula.
    console.log(cadena.toLowerCase());
    //Método de objeto String: Pasar a mayúscula.
    console.log(cadena.toUpperCase());


// This => referencia el objeto actual = se puede utilizar para acceder a las propiedades y métodos del objeto
    // Definir métodos dentro del constructor:
    function cars(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.changeModelo = function (modelo) { // Se ha creado el método changeMarca = toma un parámetro y lo asigna a la prop del ob
            this.modelo = modelo;
        }
    }

    let car = new cars("Mazda", "CX-30");
    car.changeModelo("BMW"); // Con el método se cambia el valor de una propiedad


    // También se puede crear la función/método y asociarla al objeto:
    function newPerson(name, age) {
        this.name = name;
        this.age = age;
        this.year = bornYear;
    }

    // Crea función antes llamada:
    function bornYear() {
        return 2016 - this.age; // This => se utiliza para acceder al objeto y a la prop age.
    }

// Exercise:
function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        this.price = price - ((discount/100) * price);
    }
}

let prod1 = new Product(prodID, price);


// --------------------
// JSON => JavaScriptObjectNotation
let curso = { // Variedad de datos en un objeto
    titulo: "Js",
    duracion: 2.2,
    formato: "video",
    bloque: ["Intro", "Func"],
    inscribir: function(usuario) { // Método
        console.log(usuario + " ahora estás inscrito");
    }
}

// Leer o ejectuar el valor de una propiedad:
    curso.titulo; // "Js"
    curso["video"];

// Leer o ejecutar un método:
    curso.inscribir("Juan David");


// Reasignación de valores:
    curso.titulo  = "Python"; // Titulo se le reasigna el valor
    
// Reasignación de métodos => cambiar la función = el valor de la propiedad o método
    curso.inscribir = function(){};


    // Función constructora:
    function CourseTwo (titulo, name) {
        this.titulo = titulo;
        this.name = name;
        this.inscribir = function() {
            console.log(name + " se ha inscrito");
        }
    }

    let curso1 = new CourseTwo();



// CLASES => 

// Declaración
class Curso {
    constructor(titulo) {
        this.titulo = titulo;
    }

    inscribir(usuario) {
        console.log(usuario + " se ha inscrito");
    }
};

    // Ejecutar métodos:
    let javaScript = new Curso("Js");
    console.log(javaScript.titulo); // "Js"

    javaScript.inscribir("Juan David") // Activar método de inscribir


// CONSTRUCTOR =>
//  - Una clase solo puede contener 1 constructor
    class Curso {
        constructor(titulo, duracion, color) {
            this.titulo = titulo;
            this.duracion = duracion;
            this.color = color;
        }
    }


// Abstracción
// Métodos accesores:
    // Get

    // Set

    class Usuario {
        constructor(nombre) {
            this.nombre = nombre;


        }
    }

    let user1 = new Usuario("Marcos");
    user1.nombre = "Uriel";