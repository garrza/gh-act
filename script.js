// Export the validation function for testing
export function validateForm(username, email, password, confirmPassword) {
  // Username validation
  if (username.length < 3) {
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Password validation
  if (password.length < 6) {
    return false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Reset message
    messageDiv.className = "";
    messageDiv.textContent = "";

    // Validate form
    if (!validateForm(username, email, password, confirmPassword)) {
      showError("Please check your input values");
      return;
    }

    // Simulate form submission
    simulateFormSubmission(username, email);
  });

  function showError(message) {
    messageDiv.textContent = message;
    messageDiv.className = "error";
  }

  function showSuccess(message) {
    messageDiv.textContent = message;
    messageDiv.className = "success";
  }

  function simulateFormSubmission(username, email) {
    // Simulate API call
    setTimeout(() => {
      showSuccess(`Registration successful! Welcome ${username}!`);
      form.reset();
    }, 1000);
  }
});
