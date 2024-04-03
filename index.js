

// Remove the <main> element with ID 'main'
let mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to 'newHeader'
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body or another element in your HTML
document.body.appendChild(newHeader);
