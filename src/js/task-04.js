const valueEl= document.querySelector('#value');
const counterValue = {
     value: 0,
    decrement() { this.value -= 1 },
    increment() { this.value += 1 }
};
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonDecrement.addEventListener('click', function () { counterValue.decrement(); valueEl.textContent = counterValue.value });
buttonIncrement.addEventListener('click', function () { counterValue.increment(); valueEl.textContent = counterValue.value });