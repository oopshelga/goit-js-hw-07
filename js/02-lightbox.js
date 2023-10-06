import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const createGalleryItems = () => {
  return galleryItems
    .map(item => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
};
gallery.innerHTML = createGalleryItems();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    lightbox.open();
  }
});