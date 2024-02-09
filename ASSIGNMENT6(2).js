document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.getElementById("myDiv");

    myDiv.addEventListener("mouseenter", function() {
      myDiv.style.backgroundColor = "GREEN";
    });

    myDiv.addEventListener("mouseleave", function() {
      myDiv.style.backgroundColor = "";
    });
  });