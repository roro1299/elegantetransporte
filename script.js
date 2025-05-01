let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.opacity = "0"; // Asegura que todas inicien ocultas
        if (i === index) {
            slide.classList.add("active");
            slide.style.opacity = "1"; // Solo muestra la imagen activa
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mueve automáticamente el carrusel cada 3 segundos
setInterval(nextSlide, 3000);
