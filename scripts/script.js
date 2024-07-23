function validateForm(event) {
  event.preventDefault();

  let isValid = false;

  const name = document.getElementById("name").value;
  const errorName = document.getElementById("error_name");

  const email = document.getElementById("email").value;
  const errorEmail = document.getElementById("error_email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const age = document.getElementById("age").value;
  const errorAge = document.getElementById("error_age");

  const password = document.getElementById("password").value;
  const errorPassword = document.getElementById("error_password");

  const cpassword = document.getElementById("cpassword").value;
  const errorCpassword = document.getElementById("error_cpassword");

  if (name === "") {
    errorName.textContent = "Name is required.";
    isValid = false;
  } else {
    errorName.textContent = "";
    isValid = true;
  }

  if (email === "") {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    errorEmail.textContent = "Invalid email format.";
    isValid = false;
  } else {
    errorEmail.textContent = "";
    isValid = isValid && true; // Retain previous state if other validations passed
  }

  if (age === "") {
    errorAge.textContent = "Age cannot be empty.";
    isValid = false;
  } else if (age < 18) {
    errorAge.textContent = "Age cannot be less than 18.";
    isValid = false;
  } else {
    errorAge.textContent = "";
    isValid = isValid && true;
  }

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

  if (cpassword !== password) {
    errorCpassword.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    errorCpassword.textContent = "";
    isValid = isValid && true;
  }

  if (isValid) {
    document.getElementById("form").submit();
  }
}
