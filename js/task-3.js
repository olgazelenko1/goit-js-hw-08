const userNameElem = document.querySelector('input#name-input');
const userSpanElem = document.querySelector('span#name-output');
userNameElem.addEventListener('input', () => {
  const cleanedValue = userNameElem.value.trim();

  if (cleanedValue === '') {
    userSpanElem.textContent = 'Anonymous';
  } else {
    userSpanElem.textContent = cleanedValue;
  }
});
