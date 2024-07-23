function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

const postId = getPostIdFromUrl();
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((json) => {
    console.log(json);
    document.getElementById("post-title").innerText = json.title;
    document.getElementById("post-body").innerText = json.body;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
