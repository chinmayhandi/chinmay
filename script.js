const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("pw");
const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("mail");

// Toggle password visibility
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

// Validate email and password fields before login
loginBtn.addEventListener("click", () => {
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill in both Email and Password.");
  } else {
    // Redirect to CH Bus.html
    window.location.href = "CH Bus.html";
  }
});
