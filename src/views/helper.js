export const getUserData = async () => {
  return await fetch("https://gdsc-poornima-30dogcp.herokuapp.com", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
