const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const LiElements = ingredients.map(item => {
    const element = document.createElement("li");
    element.textContent = item;
    return element;
});
const UlElement = document.querySelector('#ingredients');
UlElement.append(...LiElements);
console.log(UlElement);