const url = "https://jsonplaceholder.typicode.com/users";

function fetchGetUsers() {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
export default fetchGetUsers;
