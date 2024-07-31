export async function request(url, method, data = {}) {
  switch (method) {
    case "POST":
      return await handlePostRequest(url, data);
    case "GET":
      return await handleGetRequest(url);
    default:
      console.log("Invalid method");
      return null;
  }
}
async function handlePostRequest(url, data) {
  // let responseData;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("POST request error:", error);
  }
}
async function handleGetRequest(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return serialize(data);
  } catch (error) {
    console.log("GET request error:".error);
  }
}
function serialize(data) {
  let finalMappedData;
  if (Array.isArray(data)) {
    finalMappedData = data.map((datum) => {
      let mappedData = {};
      mappedData["postId"] = datum["id"];
      mappedData["userId"] = datum["userId"];
      mappedData["blogTitle"] = datum["title"];
      mappedData["blogDescription"] = datum["body"];
      return mappedData;
    });
  } else {
    finalMappedData = {
      userId: data.userId,
      blogTitle: data.title,
      blogDescription: data.body,
    };
  }
  return finalMappedData;
}
