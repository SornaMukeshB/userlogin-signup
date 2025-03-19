document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector("form");

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!fullName || !email || !password) {
            alert("All fields are required!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let userExists = users.some(user => user.email === email);
        if (userExists) {
            alert("Email already registered! Try logging in.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign-up successful! Redirecting to login...");
        window.location.href = "signin.html";
    });
});
