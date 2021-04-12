const ItemsOfCategories = document.querySelectorAll(".item");
//console.log(ItemsOfCategories);
console.log(`В списке ${ItemsOfCategories.length} категории.`);
for (let item = 0; item < ItemsOfCategories.length; item += 1) {
    console.log('Категория:', ItemsOfCategories[item].querySelector('h2').textContent);
    console.log('Количество элементов:', ItemsOfCategories[item].querySelectorAll('li').length);
};