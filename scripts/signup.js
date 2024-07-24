import { request } from "./apiRequest.js";

function validateForm(event) {
  event.preventDefault();

  let isValid = false;

  const name = document.getElementById("name").value.trim();
  const errorName = document.getElementById("error_name");
  if (name === "") {
    errorName.textContent = "Name is required.";
    isValid = false;
  } else {
    errorName.textContent = "";
    isValid = true;
  }

  const email = document.getElementById("email").value.trim();
  const errorEmail = document.getElementById("error_email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    errorEmail.textContent = "Invalid email format.";
    isValid = false;
  } else {
    errorEmail.textContent = "";
    isValid = isValid && true;
  }

  const password = document.getElementById("password").value.trim();
  const errorPassword = document.getElementById("error_password");
  if (password === "") {
    errorPassword.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    errorPassword.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    errorPassword.textContent = "";
    isValid = isValid && true;
  }

  const cpassword = document.getElementById("cpassword").value.trim();
  const errorCpassword = document.getElementById("error_cpassword");
  if (cpassword !== password) {
    errorCpassword.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    errorCpassword.textContent = "";
    isValid = isValid && true;
  }

  if (isValid) {
    const formData = {
      name,
      email,
      password,
    };

    request("https://jsonplaceholder.typicode.com/users", "POST", formData);
  }
}

document.getElementById("form").addEventListener("submit", validateForm);
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },

//   body: JSON.stringify(formData),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     localStorage.setItem("email", data.email);
//     alert("New account created!!!");
//     window.location = "../app/login.html";
//   })
//   .then((error) => console.log(error));
//const data = JSON.stringify(formData);
//const data = Object.fromEntries(formData);
//console.log(formData);
