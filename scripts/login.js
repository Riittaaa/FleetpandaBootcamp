import { request } from "./apiRequest.js";

function validateForm(event) {
  event.preventDefault();

  let isValid = false;

  const name = document.getElementById("name").value.trim();
  const errorName = document.getElementById("error_name");

  const email = document.getElementById("email").value.trim();
  const errorEmail = document.getElementById("error_email");

  if (name === "") {
    errorName.textContent = "Username is required.";
    isValid = false;
  } else {
    errorName.textContent = "";
    isValid = true;
  }

  if (email === "") {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else {
    errorEmail.textContent = "";
    isValid = isValid && true;
  }

  if (isValid) {
    request("https://jsonplaceholder.typicode.com/users", "GET", {
      name,
      email,
    });
  }
}

document.getElementById("form").addEventListener("submit", validateForm);
