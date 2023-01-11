let field = document.querySelector('#validation-input');

let fiendLength = field.dataset.length;

const input = document.querySelector('input');
field.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length === +fiendLength) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
});