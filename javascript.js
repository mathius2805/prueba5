// Obtener elementos del DOM
const backgroundMusic = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music');
const confirmButton = document.getElementById('confirm-button');
const newButtonsContainer = document.getElementById('new-buttons');

// Reproducir música al hacer clic en el botón "Reproducir Música"
playMusicButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playMusicButton.textContent = "Pausar Música";
    } else {
        backgroundMusic.pause();
        playMusicButton.textContent = "Reproducir Música";
    }
});

// Evento del botón de confirmación
confirmButton.addEventListener('click', function() {
    // Desvanecer el título, el texto, el botón de confirmación y el botón de música
    document.querySelector('.animated-title').classList.add('fade-out');
    document.querySelector('.animated-text').classList.add('fade-out');
    confirmButton.classList.add('fade-out');
    playMusicButton.classList.add('fade-out'); // Desvanecer el botón de música

    // Esperar 1 segundo (duración de la animación) y luego ocultar los elementos
    setTimeout(() => {
        document.querySelector('.animated-title').style.display = 'none';
        document.querySelector('.animated-text').style.display = 'none';
        confirmButton.style.display = 'none';
        playMusicButton.style.display = 'none'; // Ocultar el botón de música

        // Mostrar los nuevos botones con animación de fade-in
        newButtonsContainer.classList.add('show');
    }, 1000); // 1000 ms = 1 segundo
});

// Contador de días
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Fecha de la fiesta (ajusta esta fecha)
const partyDate = new Date('2025-05-03T11:45:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = partyDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    } else {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamar la función inmediatamente