const submitButton = document.querySelector("button");
let password = document.getElementById("password");
let passConfirm = document.getElementById("passconfirm");
let pAlert = document.getElementById("pass-alert");

submitButton.addEventListener("click", () => {
    console.log(password.value)
    if (password.value != passConfirm.value) {
        password.classList.add("invalid");
        passConfirm.classList.add("invalid");
        pAlert.textContent += "Passwords must match!"
    }
})