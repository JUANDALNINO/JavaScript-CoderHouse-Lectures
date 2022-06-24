programarAcciones();


function programarAcciones() {
    programarBotonVer();
    programarBotonAdmin();
    programarBtnLocal();
}


function programarBotonVer() {
    const btn = document.getElementById("ver");
    btn.addEventListener("click", () => {
        cargarListado();
    })
}


function cargarListado() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((respuestaApi) => respuestaApi.json())
        .then((json) => mostrarListado(json))
        .catch((error) => alert("No hay info. " + error))
}


function mostrarListado(list) {
    const container = document.getElementById("appContainer");
    list.forEach((blogPost) => {
        mostrarPost(blogPost, container)
    });
}


function mostrarPost(post, div) {
    const divPost = document.createElement("div");
    divPost.innerHTML = `<h2>${post.title}</h2>
                        <p>${post.body.substr(0,50)}...</p>
                        <hr>`;
    div.appendChild(divPost);
}


function programarBotonAdmin() {
    const btn = document.getElementById("admin");
    btn.addEventListener("click", () => {
        cargarNuevoPost();
    })
}


function cargarNuevoPost() {
    const title = prompt("Title");
    const content = prompt("Content");

    crearNuevoPost(title, content);
}


function crearNuevoPost(title, content) {
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: content,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => alert("Post creado"))
        .catch((error) => alert("No se pudo crear " + error));
}


// Names json
function programarBtnLocal() {
    const btn = document.getElementById("local");
    btn.addEventListener("click", () => {
        cargarLocal();
    })
}


// function cargarLocal() {
//     fetch("/class15-AJAX-Fetch/names.json")
//     .then((respuesta) => respuesta.json)
//     .then((json) => console.log(json));
// }