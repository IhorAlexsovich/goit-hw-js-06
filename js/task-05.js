const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output')

function OnInputCangeNameField (event) {
  const NAME_DEFAULT = 'Anonymous'
  textOutput.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    textOutput.textContent = NAME_DEFAULT;
  }

}
textInput.addEventListener('input', OnInputCangeNameField);


