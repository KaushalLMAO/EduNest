//dom
localStorage.setItem("loggedin", true);
let email = document.getElementById("email");
let names = document.getElementById("names");
let password = document.getElementById("pw");
let cpassword = document.getElementById("cpw");
let login = document.getElementById("login-btn");
let register = document.getElementById("signup-btn");
//patterns
let emailp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let namep = /^[a-zA-Z]+$/;
//code
register.addEventListener("click", function () {
  if (
    email.value == "" ||
    names.value == "" ||
    password.value == "" ||
    cpassword.value == ""
  ) {
    alert("Please fill all the fields");
  } else if (!email.value.match(emailp)) {
    alert("Please enter a valid email");
  } else if (!names.value.match(namep)) {
    alert("Name cannot contain spaces and special characters");
  } else if (password.value != cpassword.value) {
    alert("Password does not match");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("name", names.value);
    localStorage.setItem("password", password.value);
    window.location.href = "index.html";
    localStorage.setItem("loggedin", true);
  }
});
login.addEventListener("click", function () {
  let storedEmail = localStorage.getItem("email");
  let storedPw = localStorage.getItem("password");
  let storedName = localStorage.getItem("name");
  if (
    email.value == storedEmail &&
    password.value == storedPw &&
    names.value == storedName
  ) {
    alert("Welcome " + storedName);
    window.location.href = "index.html";
    localStorage.setItem("loggedin", true);
  }
});
