// Reserva de hotel

// Objetos a tratar => HABITACIONES DE HOTEL

// 1. Clase => molde para crear objetos
class Room {
    constructor (id, name, capacity) {
        this.id = id,
        this.name = name,
        this.capacity = capacity
    }
}

// 2. Crear objetos
    // -> Room 1
    let economyDouble = new Room (1, "Economy Double", 2);

    // -> Room 2
    let superiorDouble = new Room (2, "Superior Double", 2);

    // -> Room 3
    let superiorTriple = new Room (3, "Superior Triple", 3);

    // -> Room 4
    let familySuite = new Room (4, "Family Suite", 4);


// Create Array => Donde se guardan los objetos:
let rooms = [economyDouble, superiorDouble, superiorTriple, familySuite];


// 3. User create = Función para crear nuevas habitaciones:
    /*
    function newRoom () {
        let newRoom = prompt("Write the room name");
        let newCapacity = Number(prompt("Write the room capacity"));
        
        let room = new Room ((rooms.length + 1), newRoom, newCapacity);

        // Agregar al array:
        rooms.push(room);

        console.log("Acá están las habitaciones")
        console.log(rooms);
    }
    */


// Menú:
mostrarMenu();

function mostrarMenu() {
    let opcion = 0;

    while(opcion != 10) {
        opcion = Number(prompt("Seleccione una opción: 1. Listar todas las habitaciones - 2. Listar habitaciones disponibles - 3. Buscar habitación por capacidad - 10. Salir"));

        switch(opcion) {
            case 1: {
                roomList();
                break;
            }
            case 2: {
                roomAvailabe();
                break;
            }
            case 3: {
                let roomsCapacity = roomCapacity();
                console.log("Las habitaciones son:");
                console.log(roomsCapacity);
                break;
            }
            case 10: {
                alert("Gracias");
                break;
            }
            default: {
                alert("Opción invalida");
                break;
            }
        }
    }
}


// Funciones del menú:
// 1. Listar todas las habitaciones:


// 3. Buscar habitación por capacidad:
    function roomCapacity() {

        // Variable de prueba
        //let filterCapacity = 4;
        
        let filterCapacity = Number(prompt("Ingrese el número de personas a hospedarse"));

        console.log(rooms.filter( (newCapacity) => newCapacity.capacity == filterCapacity));

    }




/*


let begin = prompt("Desea crear nueva habitación? -- si o no");

while(begin.toLocaleLowerCase() !== "no") {
    if (begin.toLowerCase() === "si") {
        newRoom();

        begin = prompt("Desea crear nueva habitación? -- si o no");
    } else {
        alert("Thank you");
    }
}

*/