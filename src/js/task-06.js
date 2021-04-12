const inputEl = document.querySelector('#validation-input')
console.log(inputEl);
function check(text) {
    
    if (text.currentTarget.value.length > inputEl.getAttribute('data-length')) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
        console.log(text.currentTarget.value);
        console.log(inputEl);
    }
    else {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        console.log(text.currentTarget.value);
        console.log(inputEl);
    }
};
inputEl.addEventListener('change', check);