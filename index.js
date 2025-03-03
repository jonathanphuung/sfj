document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "Americus"; 

    function checkPassword() {
        let userPassword = document.getElementById("password-input").value;
        let errorMessage = document.getElementById("error-message");

        if (userPassword === correctPassword) {
            document.getElementById("password-screen").style.display = "none"; 
            document.getElementById("main-content").style.display = "block"; 
        } else {
            errorMessage.style.display = "block"; 
        }
    }

  
    window.checkPassword = checkPassword;
});