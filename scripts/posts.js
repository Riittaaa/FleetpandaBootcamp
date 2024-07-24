const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let rows = "";

    data.forEach((post) => {
      rows += `<div class="card"><h2 class="title">${post.title}</h2><p>${post.body}</p><button id="read" onclick="read(${post.id})">Read</button></div>`;
    });
    // data.forEach((post) => {
    //   rows += `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`;
    // });
    document.getElementById("container").innerHTML = rows;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function logout() {
  localStorage.clear();
  alert("Loggedout");
  window.location = "../index.html";
}

function read(id) {
  window.location = `post.html?id=${id}`;
}
