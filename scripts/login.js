import { request } from "./apiRequest.js";

function validateForm(event) {
  event.preventDefault();

  let isValid = false;

  const name = document.getElementById("name").value.trim();
  const errorName = document.getElementById("error_name");

  const email = document.getElementById("email").value.trim();
  const errorEmail = document.getElementById("error_email");

  const password = document.getElementById("password").value.trim();

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
    const formData = {
      // name,
      email,
      password,
    };

    request("https://reqres.in/api/login", "POST", formData)
      // .then((response) => response.json())
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          window.location = "../app/posts.html";
        } else {
          alert("Incorrect Username or Email");
        }
      })
      .catch((error) => console.log(error));
  }
}

document.getElementById("form").addEventListener("submit", validateForm);
