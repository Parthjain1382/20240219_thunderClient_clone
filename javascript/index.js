function fetchdata() {
  const url = document.getElementById('url').value;
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



// Function to add a question mark to the URL input field when the parameter input field is clicked

function questionmarkadd() {
  var urlInput = document.getElementById("url");
  if (urlInput.value === "") {
      // If the URL input is empty, just append the question mark
      urlInput.value = "?";
  } else if (!urlInput.value.endsWith("?")) {
      // If the URL input doesn't end with a question mark, append it
      urlInput.value += "?";
  }
}

function equalToAdd() {
  var urlInput = document.getElementById("url");
  if (urlInput.value === "") {
      // If the URL input is empty, just append the question mark
      urlInput.value = "=";
  } else if (!urlInput.value.endsWith("?")) {
      // If the URL input doesn't end with a question mark, append it
      urlInput.value += "=";
  }
}




// temporary variable to store the old value
let tempInputParam = '';

/** Adding the text to the parameter and appending it to
 * URL INPUT
*/
function addParam() {
  let  urlInput = document.getElementById('url');  
    let  InputParam = document.getElementById('append-input');
    const newChar = urlInput.value;
    
    //difference between input and old temp input
    const diff = difference(InputParam.value, tempInputParam);
    // for deleting a character
    if (diff.startsWith('-')) {
      // Remove the deleted characters from .inputUrl
      const deletedChars = diff.slice(1); // Exclude the '-' indicating deletion
      const regex = new RegExp(deletedChars + '$');
      urlInput.value = newChar.replace(regex, '');
     }
    else {
        //adding new character to url  
        urlInput.value = newChar + diff;
    }

    // for next checking i.e, the differen
    tempInputParam = InputParam.value;
}


let tempInputValue = ''
/** Adding the text to the parameter and appending it to
 * URL INPUT
*/
function addValue() {
  let  urlInput = document.getElementById('url');  
    let  InputParam = document.getElementById('append-value');
    const newChar = urlInput.value;
    
    //difference between input and old temp input
    const diff = difference(InputParam.value, tempInputValue);
    // for deleting a character
    if (diff.startsWith('-')) {
      // Remove the deleted characters from .inputUrl
      const deletedChars = diff.slice(1); // Exclude the '-' indicating deletion
      const regex = new RegExp(deletedChars + '$');
      urlInput.value = newChar.replace(regex, '');
     }
    else {
        //adding new character to url  
        urlInput.value = newChar + diff;
    }

    // for next checking i.e, the differen
    tempInputValue = InputParam.value;
}



// Function to calculate the difference between two strings
function difference(string1, string2) {
  let diff = '';
  for (let i = 0; i < string1.length || i < string2.length; i++) {
      if (string1[i] !== string2[i]) {
          if (i < string2.length) {
              diff += '-' + string2[i]; // Indicates deletion and append the deleted character
          } else {
              diff += string1[i];
          }
      }
  }

  return diff;
}


