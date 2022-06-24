programarAcciones();


function programarAcciones() {
    programarBotonVer();
}


function programarBotonVer() {
    const btn = document.getElementById("ver");
    btn.addEventListener("click", ()=> {
        cargarListado();
    })
}


function cargarListado() {
    fetch("https://jsonplaceholder.typicode.com/posts/") 
    .then((respuestaApi) => respuestaApi.json())
    .then((json) =>mostrarListado(json))
    .catch((error) => alert("No hay info. "+error))
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
                        <p>${post.body}</p>
                        <hr>`;
    div.appendChild(divPost);
}