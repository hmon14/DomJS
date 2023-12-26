let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita'); 
let autorElem = document.getElementById('autor'); 

function generarEnteroAleatorio(min, max) {
  // Sin incluir el maximo en los valores posibles.
  return Math.floor (Math.random() * (max - min) + min);
} 

function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
} 



let indiceAleatorio = generarEnteroAleatorio(0, citas.length);  // es para controlar el numero de citas. 

cambiarCita(); 

botonElem.addEventListener('click', cambiarCita);