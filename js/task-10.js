function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");

const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");

createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputRef.value;

  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${i * 10 + 30}px`;
    box.style.height = `${i * 10 + 30}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  return boxesContainerRef.append(...boxes);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
}
