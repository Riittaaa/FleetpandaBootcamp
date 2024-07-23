function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const errorName = document.getElementById("error_name");
  if (name === "") {
    errorName.textContent = "Name is required.";
    isValid = false;
  } else {
    errorName.textContent = "";
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
  }

  const age = document.getElementById("age").value.trim();
  const errorAge = document.getElementById("error_age");
  if (age === "") {
    errorAge.textContent = "Age cannot be empty.";
    // isValid = false;
  } else if (age < 18) {
    errorAge.textContent = "Age cannot be less than 18.";
    isValid = false;
  } else {
    errorAge.textContent = "";
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
  }

  const cpassword = document.getElementById("cpassword").value.trim();
  const errorCpassword = document.getElementById("error_cpassword");
  if (cpassword !== password) {
    errorCpassword.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    errorCpassword.textContent = "";
  }

  if (isValid) {
    //const form = document.getElementById("form").submit();
    // const data = document.querySelector(".form");
    // data.addEventListener("submit", () => {
    //   const formData = new formData(data);
    //   console.log(formData.get("name"));
    // });

    const formData = {
      name: name,
      email: email,
      age: age,
      password: password,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("email", data.email);
        window.location = "../app/posts.html";
      })
      .then((error) => console.log(error));
    //const data = JSON.stringify(formData);
    //const data = Object.fromEntries(formData);
    //console.log(formData);
  }
}
