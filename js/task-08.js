const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onFormSubmit)


function onFormSubmit(event){
event.preventDefault();

// const formEl = event.currentTarget.elements
// const mail = formEl.email.value;
// const password = formEl.password.value;

// const formData = {
//     mail,
//     password,
// }

const { email, password } = event.currentTarget;
const formData = { email: email.value, password: password.value };

if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Увага! Заповніть всі поля форми');
  } else {
    console.log(formData);
  }

event.currentTarget.reset();
}
