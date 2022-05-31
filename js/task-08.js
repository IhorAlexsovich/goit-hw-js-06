const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  }
  if (password.value.length <= 6) {
     return alert ('Дожина пароля повинна бути більшою за 6 символів')
  }
  
  const formResult = {
    email: email.value,
    password: password.value,
  };

  console.log(formResult);

  event.currentTarget.reset();
}
