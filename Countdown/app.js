function updateCountdown() {
  const now = new Date();
  const newYear = new Date(2024, 0, 1, 0, 0, 0); // January 1,2024 

  const timeDiff = newYear - now; 

  const days = Math.floor(timeDiff / (1000 * 60 * 60 *24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  document.getElementById("countdown").innerHTML = countdownText;
} 

// Actualiza el conteo de los segundos.
setInterval(updateCountdown, 1000);

// Inicia la llamada del conteo. 
updateCountdown