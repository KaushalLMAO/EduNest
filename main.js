//reset home
let homelogo = document.querySelector("#stnav");

homelogo.addEventListener("click", function () {
  window.location.href = "index.html";
});
//details
let pd = document.querySelector("#personal-details");
let logdetail = localStorage.getItem("loggedin");
if (logdetail == "true") {
  pd.innerHTML = localStorage.getItem("name");
} else {
  pd.innerHTML = "Login/Signup";
  pd.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}
//profile
let profile = document.querySelector("#user");
profile.setAttribute("src", localStorage.getItem("profile"));
