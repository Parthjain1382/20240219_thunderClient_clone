function fetchdata() {
  const url = document.getElementById('url').value;
  console.log("working");
  fetch(url)
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      // Parse the JSON data
      return response.json();
    })
    .then((data) => {
      // Convert the JSON data to a string
      const jsonDataString = JSON.stringify(data, null, 2);
      // Display the JSON data in the textarea
      document.querySelector('.response').value = jsonDataString;
    })
    .catch((err) => console.error(err.message));
}

// function appendinput() {
//   const inputObjectName = document.querySelector('.apend-input');
//   const 
// }