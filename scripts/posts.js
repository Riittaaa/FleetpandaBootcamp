import { auth } from "./auth.js";

import { request } from "./apiRequest.js";
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

if (!auth()) {
  window.location.href = "login.html";
}

request("https://jsonplaceholder.typicode.com/posts", "GET")
  .then((data) => {
    let rows = "";

    data.forEach((post) => {
      rows += `<div class="card"><h2 class="title">${post.blogTitle}</h2><p>${post.blogDescription}</p><button id="read" onclick="read(${post.postId})">Read</button></div>`;
    });
    // data.forEach((post) => {
    //   rows += `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`;
    // });

    document.getElementById("container").innerHTML = rows;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

document.getElementById("logout").onclick = function () {
  logout();
};

function logout() {
  // console.log("Logout function called");
  localStorage.clear();
  alert("Logged out");
  window.location = "../index.html";
}

function read(id) {
  window.location = `post.html?id=${id}`;
}
window.read = read;
