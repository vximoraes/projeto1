let currentImageIndex = 0;
const images = ['fotos/ambiente.jpeg', 'fotos/casa.jpeg', 'fotos/estrada.jpeg', 'fotos/galo.jpeg',
'fotos/galos.jpg', 'fotos/pessoas.jpeg', 'fotos/porco.jpeg', 'fotos/trator.jpeg', 'fotos/vaca.jpeg',
'fotos/vacas.jpeg', 'fotos/estradinha.jpg', 'fotos/coelho.jpg']; 

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = images.indexOf(imageSrc);
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

function changeImage(offset) {
    currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'Escape') {
        closeModal();
    }
});