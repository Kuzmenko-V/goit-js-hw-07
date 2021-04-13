const ItemsOfCategories = document.querySelectorAll(".item");
console.log(`В списке ${ItemsOfCategories.length} категории.`);
ItemsOfCategories.forEach(item => {
    console.log('Категория:', item.querySelector('h2').textContent);
    console.log('Количество элементов:', item.querySelectorAll('li').length);
});