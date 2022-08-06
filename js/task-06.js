const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value.trim();
  inputValue.length == inputRef.dataset.length
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}
