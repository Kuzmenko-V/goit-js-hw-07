const controlsEL = document.querySelector('#controls');
const refs = {
    numberEL: controlsEL.querySelector('input'),
    btnRenderEL: controlsEL.querySelector('[data-action="render"]'),
    btnDestroyEl: controlsEL.querySelector('[data-action="destroy"]')
};
const boxesEl = document.querySelector('#boxes');
function createBoxes(amount) {
    const elements = [];
    for (let i = 0; i < amount; i += 1){
        elements.push(document.createElement("div"));
        elements[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        elements[i].style.width = `${3+i}0px`;
        elements[i].style.height = `${3+i}0px`;
    }
    boxesEl.append(...elements);
};
let f = 0;
refs.numberEL.addEventListener('input', (inputValue) => { f = inputValue.currentTarget.value; });
refs.btnRenderEL.addEventListener('click', () => { boxesEl.innerHTML = ''; createBoxes(f); });
refs.btnDestroyEl.addEventListener('click', () => {boxesEl.innerHTML = ''; });