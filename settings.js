let emailp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let namep = /^[a-zA-Z]+$/;

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
      document.getElementById("show").addEventListener("click", () => {
        alert("You cannot perform this at the moment");
      });
      document.getElementById("save").addEventListener("click", () => {
        const newName = document.getElementById("name").value;
        const newEmail = document.getElementById("email").value;
        const newPassword = document.getElementById("password").value;

        if (newName === "" && newEmail === "" && newPassword === "") {
          alert("Please fill all the fields");
        } else {
          if (newName.match(namep)) {
            localStorage.setItem("name", newName);
          } else if (newName === "") {
            return;
          } else {
            alert("Name cannot contain spaces and special characters");
          }
          if (newEmail.match(emailp)) {
            localStorage.setItem("email", newEmail);
          } else if (newEmail === "") {
            return;
          } else {
            alert("Invalid email format");
          }
        }
      });
    }
  });
}
