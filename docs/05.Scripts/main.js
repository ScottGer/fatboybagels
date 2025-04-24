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

// Function to handle scroll event and toggle 'scrolled' class on the header
function handleScroll() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Wait until the DOM is fully loaded before inserting header and footer
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header-container", "../02.Components/header.html");
  loadHTML("footer-container", "../02.Components/footer.html");

  // Add scroll event listener to handle the scroll effect
  window.addEventListener('scroll', handleScroll);

  // Initial check for header style on page load (in case the page is scrolled already)
  handleScroll();
});