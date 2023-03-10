
// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const navEl = document.querySelector('#categories');
// const navList = navEl.children.length;
// console.log('Number of categories: ',navList)
// console.log('consolelogtest')

// const navListNames = navEl.querySelector('.item')
// console.log(navListNames.children)
// console.log(navEl.children)

// const second = document.querySelectorAll(`.item`)
// console.log(second)

// const sec = document.querySelector('.item');
// // const secList = sec.children.length;
// console.log('Number of categories: ',sec)
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n\n");
console.log(categoriesArray);