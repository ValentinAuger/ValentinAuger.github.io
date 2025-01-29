// Sélection des éléments
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeModal = document.querySelector('.close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Fonction pour ouvrir la modale
function openModal(index) {
    currentIndex = index;
    modalImage.src = galleryItems[index].src;
    modal.style.display = 'flex';
}

// Fonction pour fermer la modale
function closeModalHandler() {
    modal.style.display = 'none';
}

// Fonction pour passer à l'image précédente
function showPrevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImage.src = galleryItems[currentIndex].src;
}

// Fonction pour passer à l'image suivante
function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImage.src = galleryItems[currentIndex].src;
}

// Ajout des écouteurs d'événements
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
});

closeModal.addEventListener('click', closeModalHandler);
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Fermer la modale avec la touche "Échap"
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalHandler();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});