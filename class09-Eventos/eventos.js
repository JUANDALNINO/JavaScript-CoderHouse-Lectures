// 01. addEventListener(par1, par2)
// El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.
const btn1 = document.getElementById("miButton1");
btn1.addEventListener("click", 
    () => {
        alert("I'm the button 1");
    })