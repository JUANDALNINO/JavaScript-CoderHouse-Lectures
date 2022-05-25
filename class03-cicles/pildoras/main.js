let name, age, email;

name = prompt("Introduce your name");
    while(!isNaN(name)) {
        name = prompt("Introduce a valid name", "Write here your name");
    }

// Bucle While indeterminado => No sabemos el numero de veces que se repetirá
age = Number(prompt("Introduce your age", "Write here your age"));
    while(age <= 0 || age > 105 || isNaN(age)) {
        age = Number(prompt("Introduce a valid age"));
    }

email = prompt("Introduce your email", "Write here your email");

