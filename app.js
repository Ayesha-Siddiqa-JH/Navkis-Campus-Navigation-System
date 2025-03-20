document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Fetch the email and password entered by the user
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Perform a simple validation (you can add more advanced checks or server-side logic)
    if (email === "navkis@email.com" && password === "12345") {
        // Redirect to categories.html if credentials are correct
        window.location.href = "categories.html";
    } else {
        // Show an alert if the credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
});