const login = document.getElementById("login");
const register = document.getElementById("register");
const btn = document.querySelector(".btn");
const registerBtn = document.querySelector(".register_btn");
const loginBtn = document.querySelector(".login_btn");

registerBtn.addEventListener("click", function () {
    login.style.left = "-440px";
    register.style.left = "50px";
    btn.style.left = "110px";
});

loginBtn.addEventListener("click", function () {
    login.style.left = "50px";
    register.style.left = "450px";
    btn.style.left = "0";
});
