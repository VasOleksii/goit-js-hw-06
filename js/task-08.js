const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
event.preventDefault();
const formEl = event.currentTarget.elements
const mail = formEl.email.value;
const password = formEl.password.value;

const formData = {
    mail,
    password,
}

if (mail === '' || password === '') {
    alert('Увага! Заповніть всі поля форми');
  } else {
    console.log(formData);
  }

event.currentTarget.reset();
}
