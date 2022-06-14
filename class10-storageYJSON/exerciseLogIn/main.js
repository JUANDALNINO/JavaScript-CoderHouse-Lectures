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
let usuariosArray = [];



// Create account:-----------------------------------------

// Click => Create
let btnCreateAccount = document.getElementById("btnCreate");
btnCreateAccount.addEventListener("click", agregarUsuario);


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

            saveLocal("usuarios", JSON.stringify(usuariosArray));

            console.table(usuariosArray);
    }

    // Conditional for new User:
    function conditionNewUser(user, pass) {

        if(user.length!=0 && pass.length!=0) {
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


    // Funcion guardar en local:
    function saveLocal(key, value) {
        localStorage.setItem(key, value);
    }


// Button Login:
    let btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", function() {

        obtenerAlmacenados();
    })


// Login: -------------------------
    let loginUsername = "";
    let loginPassword = "";
    function welcome() {

        loginUsername = document.getElementById("username").value;
        loginPassword = document.getElementById("password").value;

        singIn(loginUsername, loginPassword);
    }


    // Recuperar datos en array:
    const usuariosAlmacenados = [];

    // Constructor for array:
    class Almacenado {
        constructor(obj) {
            this.obj = parseFloat(obj.id);
            this.username = obj.username;
            this.password = obj.password;
        }
    }


    // Obtener listado:
    function obtenerAlmacenados() {
        const usersAlmacenados = JSON.parse(localStorage.getItem("usuarios"));

        for(const usuario of usersAlmacenados)
        usuariosAlmacenados.push(new Almacenado(usuario));
        
        console.table(usuariosAlmacenados);
        welcome();
    }


    //Validación de datos:
    function singIn(user, pass) {
        for(let i=0; i<usuariosAlmacenados.length; i++) {
            if(usuariosAlmacenados[i].username === user && usuariosAlmacenados[i].password === pass) {
                console.log("Check")
            } else {
                alert("Wrong, data");
            }
        }

        // for(let i=0; i<usuariosAlmacenados.length; i++) {
        //     if(user === usuariosAlmacenados[i].username && pass === usuariosAlmacenados[i].password) {
        //         newWindow();
        //     }
        // }
    }


     //Function welcome:
        function newWindow() {
            window.open("./pageTwo.html");
        }



    // Conditional for new User:
    // function conditionNewUser(user, pass) {

    //     if(user.length!=0 && pass.length!=0) {
    //         obtenerAlmacenados();

    //         singIn(user, pass);

    //     } else {
    //         return alert("Por favor introduce tu usuario y contraseña");
    //     }
    // }


    // // Save on localStorage:
    // function newUserLocal() {
    //     let userJson = JSON.stringify(usuariosArray); // Convertir primero para guardar

    //     localStorage.setItem("username", userJson); // Guardar


    //     // Sacar = convertir de JSON a obj
    //     let jsonUser = JSON.parse(userJson);
    //     console.log(jsonUser);
    // }

    // /* 
    // let lastItem ="";
    // function newUserLocal() {
    //     lastItem = usuariosArray[usuariosArray.length-1];

    //     let userJson = JSON.stringify(lastItem); // Convertir primero para guardar

    //     localStorage.setItem("username", userJson); // Guardar

    //     // Sacar = convertir de JSON a obj
    //     let jsonUser = JSON.parse(userJson);
    //     console.log(jsonUser);
    // }
    // */



    // // Login:---------------------------------------------------
    // let btnLogin = document.getElementById("btnLogin");
    // btnLogin.addEventListener("click", function() {
    //     recorrer();
    // })

    //    

    //     let loginUsername = "";
    //     let loginPassword = "";
    //     function welcome() {
    //         loginUsername = document.getElementById("username").value;
    //         loginPassword = document.getElementById("password").value;

    //         for(let i=0; i<localStorage.length; i++) {
    //             let key = localStorage.key[i];
    //             console.log(localStorage.getItem(key));
    //         }
    //     }

    //     //recorrer:
    //     function recorrer() {
    //         for(let i=0; i<localStorage.length; i++) {
    //             let key = localStorage.key[i];
    //             console.log(localStorage.getItem(key));
    //         }
    //     }
