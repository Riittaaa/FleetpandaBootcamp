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
      rows += `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`;
    });
    document.getElementById("posts").innerHTML = rows;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
