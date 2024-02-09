function validateLogin() {
    var enteredUsername = document.getElementById("login__username").value;
    var enteredPassword = document.getElementById("login__password").value;
  
    if (enteredUsername === "user" && enteredPassword === "password") {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  
    return false;
  }
 
