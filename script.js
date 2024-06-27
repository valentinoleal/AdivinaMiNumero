'use strict';

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let puntuacion = 20;
let record = 0;

const mostrarMensaje = mensaje =>
  (document.querySelector('.mensaje').textContent = mensaje);

document.querySelector('.verificar').addEventListener('click', () => {
  const adivinanza = Number(document.querySelector('.adivinanza').value);

  // cuando no hay entrada
  if (!adivinanza) {
    mostrarMensaje('⛔️ Sin número');
  }
  // cuando el jugador gana
  else if (adivinanza === numeroSecreto) {
    mostrarMensaje(' 🎉 ¡Número correcto! ');
    document.querySelector('.numero').textContent = numeroSecreto;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.numero').style.width = '30rem';
    if (puntuacion > record) {
      record = puntuacion;
      document.querySelector('.record').textContent = record;
    }
  }

  // cuando la adivinanza es incorrecta
  else if (adivinanza !== numeroSecreto) {
    if (puntuacion > 1) {
      mostrarMensaje(adivinanza > numeroSecreto ? ' 📈 ¡Demasiado alto!' : ' 📉 ¡Demasiado bajo!');
      puntuacion--;
      document.querySelector('.puntuacion').textContent = puntuacion;
    } else {
      mostrarMensaje('¡Perdiste!');
      document.querySelector('.puntuacion').textContent = 0;
    }
  }
});

document.querySelector('.de-nuevo').addEventListener('click', () => {
  puntuacion = 20;
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;
  mostrarMensaje('Empieza a adivinar...');
  document.querySelector('.adivinanza').value = '';
  document.querySelector('.puntuacion').textContent = 20;
  document.querySelector('body').style.background = '#222';
  document.querySelector('.numero').style.width = '15rem';
  document.querySelector('.numero').textContent = '?';
});
