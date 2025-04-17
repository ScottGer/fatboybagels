// Function to load an external HTML file and insert it into a target element
function loadHTML(targetId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      const target = document.getElementById(targetId);
      if (target) {
        target.innerHTML = data;
      } else {
        console.warn(`Element with ID "${targetId}" not found in the document.`);
      }
    })
    .catch(error => console.error(error));
}

// Wait until the DOM is fully loaded before inserting header and footer
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header-container", "../02.Components/header.html");
  loadHTML("footer-container", "../02.Components/footer.html");
});