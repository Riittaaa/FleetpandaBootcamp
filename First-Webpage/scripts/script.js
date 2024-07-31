function validateForm(event) {
  event.preventDefault();

  let isValid = false;

  const name = document.getElementById("name").value;
  const errorName = document.getElementById("error_name");

  const email = document.getElementById("email").value;
  const errorEmail = document.getElementById("error_email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  if (isValid) {
    document.getElementById("form").submit();
  }
}
