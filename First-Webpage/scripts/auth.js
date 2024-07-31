export function auth() {
  const existingData = localStorage.getItem("token");
  return existingData;
}
