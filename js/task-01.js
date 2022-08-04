const itemsRef = document.querySelectorAll(".item");
console.log("Number of categories:", itemsRef.length);

itemsRef.forEach((item) => {
  //   const titleRef = item.firstElementChild;
  console.log("Category:", item.firstElementChild.textContent);

  const itemListRef = item.querySelectorAll("li");
  console.log("Elements:", itemListRef.length);
});
