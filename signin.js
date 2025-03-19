document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector("form");

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            alert(`Welcome back, ${email}!`);
        } else {
            alert("Invalid email or password!");
        }
    });
});
