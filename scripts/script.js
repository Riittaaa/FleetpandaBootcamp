function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value;
  const errorName = document.getElementById("error_name");
  if (name === "") {
    errorName.textContent = "Name is required.";
    isValid = false;
  } else {
    errorName.textContent = "";
  }

  const email = document.getElementById("email").value;
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
  }

  const age = document.getElementById("age").value;
  const errorAge = document.getElementById("error_age");
  if (age === "") {
    errorAge.textContent = "Age cannot be empty.";
  } else if (age < 18) {
    errorAge.textContent = "Age cannot be less than 18.";
    isValid = false;
  } else {
    errorAge.textContent = "";
  }

  const password = document.getElementById("password").value;
  const errorPassword = document.getElementById("error_password");
  if (password === "") {
    errorPassword.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    errorPassword.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    errorPassword.textContent = "";
  }

  const cpassword = document.getElementById("cpassword").value;
  const errorCpassword = document.getElementById("error_cpassword");
  if (cpassword !== password) {
    errorCpassword.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    errorCpassword.textContent = "";
  }

  if (isValid) {
    document.getElementById("form").submit();
  }

  //   const formData = {
  //     name: name,
  //     email: email,
  //     age: age,
  //   };
  //   alert(JSON.stringify(formData));
  //   console.log(name, email, age);
}
