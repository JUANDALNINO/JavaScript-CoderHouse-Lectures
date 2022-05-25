let aleatorio = Math.round(Math.random()*100);

let miNum = 0;
let intentos = 0;

adivinador();

function adivinador() {
  do {
    miNum = Number(prompt("Adivina un número del 0 al 100"));
  
    if(aleatorio > miNum) {
      alert("Más grande");
    }
    
    if(aleatorio < miNum) {
      alert("Más pequeño");
    }
    intentos++;
  
  } while(aleatorio != miNum);
  
  alert("Haz ganado!! El número es " + aleatorio + " - Lo has encontrado en " + intentos + " intentos");
}