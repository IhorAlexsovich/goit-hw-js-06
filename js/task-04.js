let conterValue = 0;

const decrementButton = document.querySelector('button[data-action ="decrement"]');
const incrementButton = document.querySelector('button[data-action ="increment"]');
const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);
function onDecrementButtonClick() {
  conterValue -= 1;
  valueEl.textContent = conterValue;
}

function onIncrementButtonClick() {
  conterValue += 1;
  valueEl.textContent = conterValue;
}

