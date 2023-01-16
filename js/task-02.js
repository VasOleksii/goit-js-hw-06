const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainerEl = document.querySelector('#ingredients')

const elements = ingredients.map(ingridient => {
  const ingridientEl = document.createElement('li');
  ingridientEl.classList.add('item');
  ingridientEl.textContent = ingridient;

  return ingridientEl;
})

ingredientsContainerEl.append(...elements);



