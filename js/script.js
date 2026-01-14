// Function to replace the name dynamically
function replaceName() {
    let name = prompt("Please enter your name:", "Guest");
    if (!name || name.trim() === "") {
        name = "Guest";
    }
    document.getElementById("user-name").textContent = name;
}

// Function to validate form and display output
function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const dobInput = document.getElementById("dob");
    const genderInput = document.getElementById("gender");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const dobError = document.getElementById("dob-error");
    const genderError = document.getElementById("gender-error");
    const messageError = document.getElementById("message-error");

    const feedbackDisplay = document.getElementById("feedback-display");
    const feedbackContent = document.getElementById("feedback-content");

    let isValid = true;

    // Reset errors
    resetErrors([nameInput, dobInput, genderInput, messageInput], [nameError, dobError, genderError, messageError]);

    // Validate Name
    if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Name is required");
        isValid = false;
    }

    // Validate Date of Birth
    if (dobInput.value.trim() === "") {
        showError(dobInput, dobError, "Date of Birth is required");
        isValid = false;
    }

    // Validate Gender
    if (genderInput.value.trim() === "") {
        showError(genderInput, genderError, "Gender is required");
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
        showError(messageInput, messageError, "Message is required");
        isValid = false;
    }

    if (isValid) {
        // Display the submitted values
        const currentTime = new Date().toLocaleString();
        feedbackContent.innerHTML = `
            <p><strong>Current Time:</strong> ${currentTime}</p>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Date of Birth:</strong> ${dobInput.value}</p>
            <p><strong>Gender:</strong> ${genderInput.value}</p>
            <p><strong>Message:</strong> ${messageInput.value}</p>
        `;
        feedbackDisplay.style.display = "block";

        // Optional: clear form
        document.getElementById("message-form").reset();
    }
}

function showError(input, errorElement, message) {
    input.classList.add("invalid");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function resetErrors(inputs, errorElements) {
    inputs.forEach(input => input.classList.remove("invalid"));
    errorElements.forEach(error => {
        error.textContent = "";
        error.style.display = "none";
    });
    document.getElementById("feedback-display").style.display = "none";
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    replaceName();

    const form = document.getElementById("message-form");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});
