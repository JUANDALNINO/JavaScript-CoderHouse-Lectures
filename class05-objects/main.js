

// Objetos => coleccion de datos
// Coleccion de datos en variables
// => Crear objeto
const person = { // => Nombre objeto
    name: "Juan David",   // => Propeidades
    lastName: "Lizarralde Niño",
    age: 27,
    email: "juanda@jej.co"
}

// => Acceder al objeto:
console.log(person.name);
console.log(person["email"]);


// Cambiar propiedades del objeto:
person.lastName = "Niño";
person["email"] = "juan.qja";



// Función Constructora =>
function Person (name, lastName, age, email) {    // => Inicial con mayus + parametros de objetos
    this.name = name;   // => this => apunta a Person
    this.lastName = lastName;
    this.age = age;
    this.email = email;
};

// Para crear objetos desde la funcion constructora:
const person1 = new Person ("Juan David", "Lizarralde Niño", 27, "juanda@jej.co")
const person2 = new Person ("Luisa", "Caceres", 26, "lu.fc@");
const person3 = new Person ("Martin", "Angarita", 7, null);
const person4 = new Person ("Sofia", "Niño", 45, "sofia.@");




// Métodos en objetos: Constructor con funciones
function Producto (id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;

    this.getIva = function() {
        const iva = this.precio * 0.2;
        return iva;
    }

    this.getPrecioFinal = () => this.precio + this.getIva();
}

const producto = new Producto (0, "carne", 200);
console.log("IVA: ", producto.getIva());
console.log("PRECIO FINAL: ", producto.getPrecioFinal());



// Recorrer objetos => in for:
// IN => Saber si la propiedad está en el objeto

// For => Acceder a las propiedades
for (let prop in person1) {
    console.log(prop);
}



// Clases:
// 2 caracteristicas de un objeto => atributo y métodos:
class Carta {
    constructor(id, valor, color, tipo) { // Atributos
        this.id = id;
        this.valor = valor;
        this.color = color;
        this.tipo = tipo;
    }

    getColor() {  // Metodos
        return this.color;
    }
}

const rojoUno = new Carta(1, 1, "rojo", "normal");
rojoUno.getColor();