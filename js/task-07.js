const text = document.querySelector("#text")

const input = document.querySelector("#font-size-control")

input.addEventListener("input", (e) => {
    const size = input.value;
    text.style.fontSize = size + "px";
})