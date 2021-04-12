const inputEL = document.querySelector('#font-size-control');
console.log(inputEL);
const textEl = document.querySelector('#text');
console.log(textEl);
function textSize(slider) {
    textEl.style.fontSize = slider.currentTarget.value + 'px';
}
inputEL.addEventListener('input', textSize);
