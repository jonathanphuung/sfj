document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "yourSecurePassword"; // Change this to your desired password

    function checkPassword() {
        let userPassword = document.getElementById("password-input").value;
        let errorMessage = document.getElementById("error-message");

        if (userPassword === correctPassword) {
            document.getElementById("password-screen").style.display = "none"; // Hide password screen
            document.getElementById("main-content").style.display = "block"; // Show main content
        } else {
            errorMessage.style.display = "block"; // Show error message if incorrect
        }
    }

    // Expose function to global scope so button can call it
    window.checkPassword = checkPassword;
});