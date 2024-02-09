document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenDiv = document.getElementById("hiddenDiv");
  
    toggleButton.addEventListener("click", function() {
      hiddenDiv.classList.toggle("hidden");
    });
  });