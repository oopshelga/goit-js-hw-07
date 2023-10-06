import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');

const createGalleryItems = () => {
  return galleryItems.map((item) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `;
  }).join('');
};
gallery.innerHTML = createGalleryItems();

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    
if (event.target.nodeName === 'IMG') {
    const largeImageUrl = event.target.dataset.source;
    modalImage.src = largeImageUrl;
    modalImage.alt = event.target.alt;
    modal.classList.add('is-open');
  }
});

const closeModalBtn = document.querySelector('.modal__close-btn');
closeModalBtn.addEventListener('click', () => {
  modalImage.src = '';
  modalImage.alt = '';
  modal.classList.remove('is-open');
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModalBtn.click();
  }
});

