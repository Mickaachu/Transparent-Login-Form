//form validation

const btn = document.querySelector("#btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const msg = document.querySelector("#msg");
const login = document.querySelector("#formss");
const terms = document.querySelector("#terms");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value.length === 0 || password.value.length === 0) {
    msg.innerHTML = `<h4 class='error'>*please complete the required field</h4>`;
    setTimeout(() => document.querySelector(".error").remove(), 5000);
  } else {
    login.submit();
  }
});
