function validateForm(event) {
  event.preventDefault();

  let isValid = false;

  const name = document.getElementById("name").value;
  const errorName = document.getElementById("error_name");

  const email = document.getElementById("email").value;
  const errorEmail = document.getElementById("error_email");

  //   const password = document.getElementById("password").value;
  //   const errorPassword = document.getElementById("error_password");

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

  //   if (password === "") {
  //     errorPassword.textContent = "Password is required.";
  //     isValid = false;
  //   } else if (password.length < 6) {
  //     errorPassword.textContent = "Password must be at least 6 characters long.";
  //     isValid = false;
  //   } else {
  //     errorPassword.textContent = "";
  //   }

  if (isValid) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.username === name && user.email === email
        );

        if (user) {
          localStorage.setItem("email", user.email);
          window.location = "../app/posts.html";
        } else {
          alert("Incorrect Username or Email");
        }
      })
      .catch((error) => console.log(error));
  }
}
