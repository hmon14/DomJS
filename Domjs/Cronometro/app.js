const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa'); 
const botonReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0]; 

let intervaloDeTiempo; 
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++; 

  if (segundos / 60 === 1) {
    segundos = 0; 
    minutos++;
  
  if (minutos /60 === 1) {
    minutos = 0; 
    horas++;
  }
}

const segundosConFormato = asignarFormato(segundos);
const minutosConFormato = asignarFormato(minutos); 
const horasConFormato = asignarFormato(horas); 

cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;


}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}  

botonInicioPausa.addEventListener('click', function() {
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = `<i class="bi bi-pause" id="boton-inicio-pausa"></i>`;
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'andando';
    } else { 
      window.clearInterval(intervaloDeTiempo); 
      botonInicioPausa.innerHTML = `<i class="bi bi-play" id="boton-inicio-pausa"></i>`;
      botonInicioPausa.classList.remove('pausar')
      botonInicioPausa.classList.add('iniciar'); 
      estadoCronometro = 'pausado';
  }
}); 

botonReiniciar.addEventListener('click', function() {
  window.clearInterval(intervaloDeTiempo); 

  horas = 0; 
  minutos = 0; 
  segundos = 0;

  //Reiniciar.
  cronometro.innerText = '00:00:00'; 


  // Actualizar botones.
  botonInicioPausa.innerHTML = `<i class="bi bi-play" id="boton-inicio-pausa"></i>`;
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar'); 
// Estado del cronometro.
  estadoCronometro = 'pausado';
});

// **********--------------------AUDIO---------------------------**********
let sound = new Audio('./sound/reloj.mp3');  

botonInicioPausa.addEventListener('click' , ()=>{
  sound.play(); 

});  

botonReiniciar.addEventListener('click' , ()=>{
  sound.pause(); 
}); 







