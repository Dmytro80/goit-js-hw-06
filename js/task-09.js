function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");

const textValueRef = document.querySelector(".color");

buttonRef.addEventListener("click", onChangeColorBody);

function onChangeColorBody() {
  const colorOfBody = (document.body.style.backgroundColor =
    getRandomHexColor());

  textValueRef.textContent = colorOfBody;
}
