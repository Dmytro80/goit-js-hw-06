const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;

  const password = formElements.password.value;

  const formDate = {
    email,
    password,
  };

  email === "" || password === ""
    ? alert("Please fill in all the fields")
    : console.log(formDate);

  form.reset();
}
