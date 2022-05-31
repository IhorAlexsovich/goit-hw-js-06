const numberOfCategories = document.querySelectorAll('.item')
console.log(`Number of categories ${numberOfCategories.length}`);


const categoryNames = document.querySelectorAll('.item');
categoryNames.forEach(el => {
  const titleCategory = el.querySelector('h2')
  console.log(`Category: ${titleCategory.textContent}`);
  const elementsOfCategory = el.querySelectorAll('li');
  console.log(`Elements: ${elementsOfCategory.length}`);
} )