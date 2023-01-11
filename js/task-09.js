function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChange = document.querySelector('button.change-color')
const body = document.querySelector('body')
const Color = document.querySelector('span.color')
btnChange.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  Color.textContent = color;
})