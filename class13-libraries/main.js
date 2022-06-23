// Sweet alert:

init();

function init() {
}


function saludarSweet() {
    // Swal => Objeto
        // fire => Método
            // Textos => Propiedades
    Swal.fire({
        title: "Hola, a todos!",
        text: "Esto es un saludo",
        icon: "success",
        confirmationButtonText: "Genial!",
    })
}


function alertSinBtn() {
    Swal.fire({
        title: "Hola, a todos!",
        text: "Esto es un error",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
    })
}


function alertImg() {

}



    
    let btnEvent = document.getElementById("btnEvents");
    btnEvent.addEventListener("click", function alertEvents() {
        Swal.fire({
            title: "Hola, a todos!",
            text: "Esto es un saludo",
            icon: "success",
            showCancelButton: true,
            confirmButton: "Vamos",
            cancelButtonText: "No quiero",
        }).then((result)=>{ // Promesa => método
            if(result.isConfirmed) {
                saludarSweet();
            } else {
                alertSinBtn();
            }
        })
    });