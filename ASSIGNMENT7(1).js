document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById("username");
      const username = usernameInput.value.trim();

      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  
      if (username.length < 5 || !alphanumericRegex.test(username)) {
        alert("Error: Username should be at least 5 characters long and contain only letters and numbers.");
      } else {
        alert("Success: Username is valid!");
      }
    });
  });  