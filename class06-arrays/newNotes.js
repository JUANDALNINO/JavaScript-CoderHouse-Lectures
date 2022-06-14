// https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/

// Arrays:
    let array = [1,2]; // Dentro de [] y separados con ,

// Un array es una colección de datos y elementos de cualquier tipo.
    let mixArray = [true, 1000, "Juanda", {}]

// La posición de un elemento en el array es el índice = index
    // Comienza con 0 ->
    // true=0; 1000=1; "Juanda"=2; {}=3;

// El número de elementos en el array determina la longitud = length
    // The length of the mixArray is 4


// Crear Arrays:
    const salad = ["tomato", "pinapple", "egg", "abocato"];

// Obtener elementos de un array:
    // Usando el index se accede a los elementos:
    const element = array[index];
    salad[2]; // "egg";

// Con la longitud/length se puede retroceder y acceder a elementos:
    const len = salad.length; // 4
    salad[len-1]; // "abocato"
    salad[len-2]; // "egg"
    salad[len-4]; // "tomato"

// Iterar y recorrer el array usando un bucle for:
    for(let i=0; i<salad.length; i++) {
        console.log(`Element at index ${i} is ${salad[i]}`);
    };
    // Result:
/*  Element at index 0 is tomato
    Element at index 1 is pinapple
    Element at index 2 is egg
    Element at index 3 is abocato */


// Añadir elementos al array:
    // push() = Agrega elemento al final del array
    salad.push("peanuts");

    // unshift() = Agrega elemento al inicio del array
    salad.unshift("peanuts");


// Eliminar elementos del array:
    //pop() = Elimina elemento final del array
    salad.pop();

    //shift() = Elimina elemento al inicio del array
    salad.shift();


// Copiar y clonar array:



// .find()
let perrosEncontrados = [
    {
      raza: "Beagle",
      color: "blanco"
    },
  
    {
      raza: "Chihuahua",
      color: "amarillo"
    },
  
    {
      raza: "Pug",
      color: "negro"
    },
  ]
  
  let miPerro = perrosEncontrados.find(({raza}) => raza === "Chihuahua");
  
