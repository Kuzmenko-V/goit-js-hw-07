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
    console.log(element);
    return element;
});
console.log(LiElements);
const UlElement = document.querySelector('#ingredients');
UlElement.append(...LiElements);
console.log(UlElement);