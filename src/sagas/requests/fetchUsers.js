const url = "https://jsonplaceijojoijojiholder.typicode.com/users";

async function fetchGetUsers() {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
export default fetchGetUsers;
