// Obtener elementos:
//  => Para revisar el id o clase del elemento en consola:
   // title.className;

// 1. Obtener el elemento con ID
const title = document.getElementById("title");

// 2. Asignarle el cambio que se quiere
title.innerHTML = "CURSOS";

const description = document.getElementById("description");
description.innerHTML = "Listado de Cursos";



// Obtener elementos con clases:
const items = document.getElementsByClassName("list-group");
    // Iterarlos:
    for(var i=0; i<items.length; i++) {
        let element = items[i];
        console.log(element);
    }

// Obtener por tag:
const tagItems = document.getElementsByTagName("li");
    // Iterar:
    for(let i=0; i<tagItems.length; i++) {
        if(i % 2 == 0) {
            let element2 = tagItems[i];
            element2.style.background = "blue";
        }
    }


//--------------------
// EVENTOS:

const button = document