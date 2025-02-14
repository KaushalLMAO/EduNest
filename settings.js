//logout && delete
const deletess = document.querySelector("#delete");
if (deletess) {
  deletess.addEventListener("click", (e) => {
    if (localStorage.getItem("email") === null) {
      alert("Please login first");
    } else {
      if (confirm("Are you sure you want to delete your account?")) {
        localStorage.clear();
        window.location.href = "login.html";
      }
    }
  });
}
const signout = document.querySelector("#signout");
signout.addEventListener("click", (e) => {
  if (localStorage.getItem("email") === null) {
    alert("Please login first");
  } else {
    confirm("Are you sure you want to logout?");
    window.location.href = "login.html";
  }
});

// profile settings
let profilesettings = document.getElementById("profile");
let content = document.getElementById("contents");
if (profilesettings) {
  profilesettings.addEventListener("click", (e) => {
    if (localStorage.getItem("email") === null) {
      alert("Please login first");
    } else {
      content.innerHTML = ` <div class="change">
          <section id="labels">
            <label for="name">Change Name :</label>
            <label for="email">Change Email :</label>
            <label for="password">Change Password :</label>
            <label for="profile">Change Profile:</label>
          </section>
          <section id="inputs">
            <input type="text" id="name" />
            <input type="email" id="email" />
            <input type="password" id="password" />
            <input type="file" id="profile" accept="image/*" />
          </section>
          <img src="default.png" id="preview" />
        </div>
        <div id="buttons">
          <button type="button" id="save">Save Changes</button>
          <button type="button" id="cancel">Cancel</button>
          <button type="button" id="show">Preview Profile</button>
        </div>`;
    }
  });
}
let prevprofile = document.getElementById("show");
prevprofile.addEventListener("click", () => {
  alert("You cannot perform this at the moment");
});
let save = document.getElementById("save");
save.addEventListener("click", () => {
  alert("You cannot perform this at the moment");
});
