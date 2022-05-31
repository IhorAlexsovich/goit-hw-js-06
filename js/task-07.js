const rangeEl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

function changeTextSize(event) {

  textToChange.style.fontSize = `${event.currentTarget.value}px`;
  
}

rangeEl.addEventListener('input', changeTextSize);