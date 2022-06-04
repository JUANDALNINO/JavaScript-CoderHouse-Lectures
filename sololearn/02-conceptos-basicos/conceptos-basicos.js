// Practice:

// 01. Ordenador de oficina
let computers = parseInt(readLine(), 10);
console.log(computers * 2);


// 02. Encontrar adultos:
function main() {
    var age = parseInt(readLine(), 10)
    // Your code here
    if(age>=18) {
        console.log(true);
    } 
    else {
        console.log(false);
    }
}


// 03. Medio dia o media noche:
function main() {
    var hour = parseInt(readLine(), 10);
    // Your code goes here
    if (hour<=12) {
        console.log("am")
    }
    else {
        console.log("pm")
    }
}

