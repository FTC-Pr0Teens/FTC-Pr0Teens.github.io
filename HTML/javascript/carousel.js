let index = 0;
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;

function showSlide() {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    index = (index > 0) ? index - 1 : totalImages - 1;
    showSlide();
}

function nextSlide() {
    index = (index < totalImages - 1) ? index + 1 : 0;
    showSlide();
}