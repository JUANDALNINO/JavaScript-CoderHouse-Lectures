/*
    Inicializar la App
    Agregar titulo
    Agregar Menu
*/

// Inicializar la App
function InicializarApp() {
    crearTitle();
    crearMenu();
}


// Crear title:
function crearTitle() {
    const myTitle = document.createElement("h1");
    myTitle.innerText = ("Sistema de gestión de usuarios");
    document.body.appendChild(myTitle);
}

// Crear Subtitle:
function crearMenu() {
    const listaOpciones = ["Listar usuarios", "Agregar Usuario", "Buscar Usuario"];

    listaOpciones.forEach( (opcion) => {
        const btn = document.createElement("button");
        btn.innerText = opcion;

        document.body.appendChild(btn);
    })
}