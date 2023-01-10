const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const liEl = document.createElement('li')
// liEl.textContent = [...ingredients]
// const ulBase = document.querySelector('ul')
// ulBase.append()



// getElementById("ingredients")


const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulEl.innerHTML = list;