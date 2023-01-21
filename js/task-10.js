const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxGallery: document.querySelector('#boxes'),
};

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const counter = Number(refs.input.value);
  const boxes = [];
  let size = 30;

  for (let i = 0; i < counter; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }
  refs.input.value = '';
  refs.boxGallery.append(...boxes);
}

function destroyBoxes() {
  refs.boxGallery.innerHTML = '';
}
