// Ajax

/*API => Una librería
    API REST => Tener recursos, acceder a ellos y comunicarse con estos recursos
*/

// Conectar a la API
    fetch("https://jsonplaceholder.typicode.com/todos/1") // Petición GET con URL
    .then((respuestaApi) => respuestaApi.json()) // Respuesta de la API - .json = la convierte la info de la api en json
    .then((json) => console.log(json)); // Imprimir datos json

