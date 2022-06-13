
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
    