const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];





const IngredientsRef = document.querySelector("#ingredients");

const makeIngredient = (ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  return item;
};

const makeIngredientsList = ingredients.map(makeIngredient);

IngredientsRef.append(...makeIngredientsList);


//    --- 2 варіант ---

// const makeIngredientList = options => {
  
//  return options.map(element => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = element;
//     return itemEl
//   });


// };

// const elements = makeIngredientList(ingredients);
// //console.log(elements);
// const listEl = document.querySelector('#ingredients');
// listEl.append(...elements);