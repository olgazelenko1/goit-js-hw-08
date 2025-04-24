const form = document.querySelector('form.login-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };

  if (data.email === '' || data.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    form.reset();
  }
});
