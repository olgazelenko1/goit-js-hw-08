const buttonElem = document.querySelector('.change-color');
const colorElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');
buttonElem.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  colorElem.textContent = randomColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
