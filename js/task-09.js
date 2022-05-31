function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSet = document.querySelector('.color')
const buttonColorCahnge = document.querySelector('.change-color')
const pretitleChangeColor = document.querySelector('.pretitle');
buttonColorCahnge.addEventListener('click', onButtonColorCahnge)

function onButtonColorCahnge() {
  colorSet.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorSet.textContent
  
}


