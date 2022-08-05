const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const createListItem = (options) => {
  return options.map((option) => {
    const element = document.createElement("li");
    element.textContent = option;
    element.classList.add("item");

    return element;
  });
};

const items = createListItem(ingredients);

ingredientsRef.append(...items);
