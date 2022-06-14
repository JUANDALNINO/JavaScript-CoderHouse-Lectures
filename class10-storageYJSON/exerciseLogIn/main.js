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



// Create account:-----------------------------------------

// Click => Create
let btnCreateAccount = document.getElementById("btnCreate");
btnCreateAccount.addEventListener("click", function() {
    agregarUsuario();
})


    // Agregar usuario:
    let username ="";
    let password ="";
    function agregarUsuario() {
        username = document.getElementById("newUsername").value;
        password = document.getElementById("newPassword").value;

        conditionNewUser(username, password);
    }


    // New in Array:
    let usuarioNew = "";
    function newArray() {
        usuarioNew = new Usuario(getId(), username, password);

            usuariosArray.push(usuarioNew);

            alert("Usuario creado con éxito");

            newUserLocal();

            //document.location.reload();
    }

    // Conditional for new User:
    function conditionNewUser(user, pass) {

        if(user.length==="" && pass.length=== "") {
            newArray();

        } else {
            return alert("Por favor introduce tu usuario y contraseña");
        }
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


    // Save on localStorage:
    function newUserLocal() {
        let userJson = JSON.stringify(usuariosArray); // Convertir primero para guardar

        localStorage.setItem("username", userJson); // Guardar


        // Sacar = convertir de JSON a obj
        let jsonUser = JSON.parse(userJson);
        console.log(jsonUser);
    }

    /* 
    let lastItem ="";
    function newUserLocal() {
        lastItem = usuariosArray[usuariosArray.length-1];

        let userJson = JSON.stringify(lastItem); // Convertir primero para guardar

        localStorage.setItem("username", userJson); // Guardar

        // Sacar = convertir de JSON a obj
        let jsonUser = JSON.parse(userJson);
        console.log(jsonUser);
    }
    */



// Login:---------------------------------------------------
let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function() {
    recorrer();
})

    // Function welcome:
/*    function newWindow() {
        window.open("./pageTwo.html");
    } */

    let loginUsername = "";
    let loginPassword = "";
    function welcome() {
        loginUsername = document.getElementById("username").value;
        loginPassword = document.getElementById("password").value;

        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key[i];
            console.log(localStorage.getItem(key));
        }
    }

    //recorrer:
    function recorrer() {
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key[i];
            console.log(localStorage.getItem(key));
        }
    }