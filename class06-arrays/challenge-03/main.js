// Objeto constructor
class Users {
    constructor(user, name, password) {
        this.user = user;
        this.name = name;
        this.password = password;
    }
}

// Array para guardar los objetos dentro:
const usersArray = [];

let newUser = 0;

let nameLet = "";
let userLet = "";
let passwordLet = "";

let contador = 0;


// Function:
function newUserFunction(user, name, pass) {
    newUser = usersArray.push(new Users(userLet, nameLet, passwordLet));
}

let respuesta = prompt("Deseas introducir un nuevo usuario? = si o no")

if (respuesta === "si") {
    for(let i = 0; i <= 0; i++) {
        nameLet = prompt("Please introduce your name");
        userLet = prompt("Please introduce your user");
        passwordLet = prompt("Please introduce your password");
    
        newUserFunction(userLet, nameLet, passwordLet);
    }
} else {
    while(contador < usersArray.length) {
        console.log(usersArray[contador]);
        contador++;
      }
}

while(contador < usersArray.length) {
    console.log(usersArray[contador]);
    contador++;
  }