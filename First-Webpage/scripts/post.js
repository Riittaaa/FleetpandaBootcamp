import { auth } from "./auth.js";
import { request } from "./apiRequest.js";

if (!auth()) {
  window.location.href = "login.html";
}

function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

const postId = getPostIdFromUrl();
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

document.addEventListener("DOMContentLoaded", async function () {
  const postData = await request(apiUrl, "GET");
  document.getElementById("post-title").innerText = postData.blogTitle;
  document.getElementById("post-body").innerText = postData.blogDescription;
});
