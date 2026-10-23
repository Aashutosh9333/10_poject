const form =document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const email =document.getElementById ("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const strengthBar = document.getElementById("strenghtBar");
const strenghtText = document.getElementById("strengthText");
const succrssMessage = document.getElementById("successMessage");

// Display an error message
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

// Clear all error messages
function clearErrors() {
  document.querySelectorAll(".error").forEach((element) => {
    element.textContent = "";
  });

  successMessage.textContent = "";
}


// show of hide password
document.querySelectorAll(".toggle-password").forEach((button) => {
    button.addEventListener("click",() => {
        const input = document.getElementById(button.dataset.target);
        const isHidden = input.type === "password";
        input.type = isHidden ? "text ":"password";
        button.textContent = isHidden ? "Hide" : "Show";
    });
});

// password strenth checker
password.addEventListener("input", () => {
    const value = password.value;
    let score = 0;

    if (value.length >= 8) score++;
    if (/[a-z]/.test(value)&& / [A-z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    const levels =[
        { width: "0%", color: "#e5e7eb", text: "Enter a password" },
    { width: "25%", color: "#ef4444", text: "Weak password" },
    { width: "50%", color: "#f97316", text: "Fair password" },
    { width: "75%", color: "#eab308", text: "Good password" },
    { width: "100%", color: "#16a34a", text: "Strong password" }
    ];
    const level = value.length === 0 ? 0 : score;
    
    
    strengthBar.style.width = levels[level].width;
    strengthBar.style.backgroundColor = levels[level].color;
    strenghtText.textContent = levels[level].text;
});

// Validate and submit the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let isValid = true;

  if (fullName.value.trim().length < 2) {
    showError("nameError", "Please enter your full name.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  if (password.value.length < 8) {
    showError("passwordError", "Password must be at least 8 characters.");
    isValid = false;
  }

  if (confirmPassword.value !== password.value) {
    showError("confirmError", "Passwords do not match.");
    isValid = false;
  }

  if (!terms.checked) {
    showError("termsError", "Please accept the terms to continue.");
    isValid = false;
  }

  if (!isValid) return;

  successMessage.textContent =
    "Form validated successfully! Your frontend signup demo is complete.";

  form.reset();

  strengthBar.style.width = "0%";
  strengthText.textContent = "Use 8+ characters with letters and numbers.";

  document.querySelectorAll(".toggle-password").forEach((button) => {
    button.textContent = "Show";
  });
});

// Demo login link
document.getElementById("loginLink").addEventListener("click", (event) => {
  event.preventDefault();
  alert("step:2 Login page will be added in the next step.");
});