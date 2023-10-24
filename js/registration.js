document.addEventListener("DOMContentLoaded", function () {
    // Select the registration form and elements
    const registrationForm = document.getElementById("registrationForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const termConCheckbox = document.getElementById("termCon");

    // Handle form submission
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from actually submitting

        // Retrieve the form data
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const acceptedTerms = termConCheckbox.checked;

        // Perform validation (you can add more validation as needed)
        if (password !== confirmPassword) {
            alert("Password and confirm password do not match.");
            return;
        }

        if (!acceptedTerms) {
            alert("You must accept the terms and conditions.");
            return;
        }

        // Create a data object to send to the server
        const formData = {
            name,
            email,
            password,
        };

        // Send the form data to your server for registration
        fetch("https://your-server-url.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                if (data.success) {
                    // Registration was successful
                    alert("Registration successful!");
                    registrationForm.reset(); // Reset the form
                } else {
                    // Registration failed, handle error
                    alert("Registration failed. Please try again.");
                }
            })
            .catch((error) => {
                // Handle any network or server errors
                console.error("Error:", error);
                alert("An error occurred. Please try again later.");
            });
    });
});
