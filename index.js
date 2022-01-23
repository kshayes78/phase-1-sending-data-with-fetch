/*fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
});*/

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((response) => response.json())
    .then((newObj) => (document.body.innerHTML = newObj["id"]))
    .catch(function (error) {
      alert("Uh-oh");
      document.body.innerHTML = error.message;
    });
}
