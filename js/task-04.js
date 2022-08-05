const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);

const incrementButton = document.querySelector(
  "button[data-action='increment']"
);

const valueRef = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
