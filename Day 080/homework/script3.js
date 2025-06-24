const form = document.getElementById("form");

    form.addEventListener("submit", function() {
      const password = document.getElementById("input-3");
      const confirmPassword = document.getElementById("input-4");

      if (password === "" || confirmPassword === "") {
        alert("Input fields cannot be empty.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match eachother. Try again.");
        return;
      }

      alert("Your login was successful");
})