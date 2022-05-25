

// Crear funcion para construir objeto para modelar empleado:
// Pedir los datos:

function Employed (name, lastName) {
    this.name = name;
    this.lastName = lastName;
};

const name = prompt("Write the name of the employed");
const lastName = prompt("Write the last name");

const employed = new Employed (name, lastName);
console.log(employed);