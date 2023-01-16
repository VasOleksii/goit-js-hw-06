const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', inputValidTest)


function inputValidTest(event) {

Number(inputRef.getAttribute('data-length')) === event.currentTarget.value.length ? 

inputRef.classList.add('valid') ||
inputRef.classList.remove('invalid')
:
inputRef.classList.add('invalid') ||
inputRef.classList.remove('valid')
}


