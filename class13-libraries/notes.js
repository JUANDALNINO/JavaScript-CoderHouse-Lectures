// Libreria:
/*  - Codigo pre-escrito
    - Pequeños programas escritos por terceros
    */

// Implementación:
    // CDN
    // Descarga de archivos

// CDN
// - Importar por script:
    <script src="link"></script>

// 1. Sweet alert
    // <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>



// 2. Toastyfy:
    // Para shopping car => Aviso
    
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();