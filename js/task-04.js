let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');
const Btn1 = document.querySelector('#counter').firstElementChild;
const Btn2 = document.querySelector('#counter').lastElementChild;

Btn2.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
});

Btn1.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
});