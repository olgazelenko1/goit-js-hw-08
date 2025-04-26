const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
];

const container = document.querySelector('.gallery');
let instance;

const imagesCopy = images.map((image, index) => ({
  ...image,
  id: index + 1,
}));

function createImageTemplate(image) {
  return `<li class="gallery-item" data-id="${image.id}">
      <a class="gallery-link" href="${image.original}">
        <img
          class="gallery-image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>`;
}

function renderImages() {
  const markup = imagesCopy.map(createImageTemplate).join('');
  container.innerHTML = markup;
}

function openModal(image) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img class = "modal-image" src="${image.original}" alt="${image.description}" />
        <h3>${image.description}</h3>
    </div>
    `,
    {
      onShow: () => {
        window.addEventListener('keydown', handleCloseModal);

        const modalImg = instance.element().querySelector(`.modal-image`);
        modalImg.addEventListener(`click`, () => {
          closeModal();
        });
      },
      onClose: () => window.removeEventListener('keydown', handleCloseModal),
    },
  );
  instance.show();
}

function closeModal() {
  instance.close();
}

function handleCloseModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

container.addEventListener('click', (e) => {
  e.preventDefault();

  const liElem = e.target.closest('li');
  if (!liElem) return;

  const id = liElem.dataset.id;
  const image = imagesCopy.find((el) => el.id == id);
  if (image) {
    openModal(image);
  }
});

renderImages();
