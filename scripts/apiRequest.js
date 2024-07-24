export async function request(url, method, data) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   if (method == "POST") {
  //     options.body = JSON.stringify(data);
  //   }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    switch (method) {
      case "GET":
        handleGet(users, data);
        break;

      case "POST":
        options.body = JSON.stringify(data);
        handlePost(data);
        break;

      case "PUT":
        break;

      default:
        throw new Error("Unsupported request type");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function handleGet(users, data) {
  const user = users.find(
    (user) => user.username === data.name && user.email === data.email
  );
  if (user) {
    alert("Logged in successfully");
    localStorage.setItem("name", user.username);
    localStorage.setItem("email", user.email);
    window.location = "../App/posts.html";
  } else {
    alert("Incorrect Username or Email");
  }
}

function handlePost(data) {
  localStorage.setItem("name", data.name);
  localStorage.setItem("email", data.email);
  alert("New account created!!!");
  window.location = "../app/login.html";
}
