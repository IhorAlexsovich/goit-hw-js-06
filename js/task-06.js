const textInput = document.querySelector('#validation-input')
const lengthImput  = Number(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', onInputTextBlure)
function onInputTextBlure(event) {
    if (lengthImput  === event.currentTarget.value.length) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
    // textInput.classList.toggle('valid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
    // textInput.classList.toggle('invalid');
  }
  //console.log(event.currentTarget.value.length, correctLengthImput);
}

