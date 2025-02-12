const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor");

const texts = ["Welcome to The Wall", "Enjoy"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Velocidad de escritura en ms

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Borrado más rápido
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 125; // Escritura más lenta
    }

    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000; // Pausa antes de borrar
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Cambia al siguiente texto
        typingSpeed = 500; // Pequeña pausa antes de empezar a escribir
    }

    setTimeout(typeEffect, typingSpeed);
}

// Mostrar el texto con transición y luego iniciar la animación de escritura
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".typed-container").classList.add("show");
    typeEffect(); // Iniciar la animación después de mostrar el texto
  }, 500); // Aparece después de medio segundo
});
