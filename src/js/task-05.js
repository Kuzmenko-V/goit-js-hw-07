const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);
function changeOutput(text) {
    if (text.currentTarget.value === '') {
        outputEl.textContent = "незнакомец";
    }
    else {
        outputEl.textContent = text.currentTarget.value
    }
}
inputEl.addEventListener('input', changeOutput);