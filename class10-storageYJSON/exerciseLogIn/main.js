// Clase:

    // Objeto Usuario:
    class Usuario {
        constructor(id, username, password) {
            this.id = id;
            this.username = username;
            this.password = password;
        }
    }


// Usuarios default:
let usuario1 = new Usuario(1, "juanda12", "Juan.1994");
let usuario2 = new Usuario(2, "luisaf", "Martin.2014");


// Array:
let usuariosArray = [usuario1, usuario2];



// Create account:

// Click => Create
let btnCreateAccount = document.getElementById("btnCreate");
btnCreateAccount.addEventListener("click", function() {
    agregarUsuario();
})

    // Agregar usuario:
    function agregarUsuario() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let usuario = new Usuario(getId(), username, password);

        usuariosArray.push(usuario);

        alert("Usuario creado con éxito");
        console.table(usuariosArray);
    }

    // Get ID:
    function getId() {
        if(usuariosArray.length === 0) {
            return 1;
        } else {
            let ultimoId = usuariosArray[usuariosArray.length-1];
            return ultimoId.id+1;
        }
    }

// Login: