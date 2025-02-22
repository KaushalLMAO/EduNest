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
    if (confirm("Are you sure you want to logout?")) {
      window.location.href = "login.html";
    }
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
            <input type="text" id="name" placeholder = "${localStorage.getItem(
              "name"
            )}" />
            <input type="email" id="email" placeholder = "${localStorage.getItem(
              "email"
            )}" />
            <input type="password" id="password" />
            <input type="file" id="profilepic" accept="image/*" />
          </section>
          <img src="${localStorage.getItem("profile")}" id="preview" />
        </div>
        <div id="buttons">
          <button type="button" id="save">Save Changes</button>
          <button type="button" id="cancel">Cancel</button>
          
        </div>`;
      let profile = document.getElementById("profilepic");
      let image = document.getElementById("preview");

      profile.addEventListener("change", () => {
        let file = profile.files[0]; // Get the selected file
        if (file) {
          let reader = new FileReader();

          reader.onload = function (e) {
            localStorage.setItem("profile", e.target.result);
            image.setAttribute("src", e.target.result);
          };

          reader.readAsDataURL(file);
        }
      });
      document.getElementById("save").addEventListener("click", () => {
        const newName = document.getElementById("name").value.trim();
        const newEmail = document.getElementById("email").value.trim();
        const newPassword = document.getElementById("password").value;

        if (
          !newName &&
          !newEmail &&
          !newPassword &&
          profile.files.length === 0
        ) {
          alert("No changes made");
          return;
        }

        if (newName && !newName.match(namep)) {
          alert(
            "Name can only contain letters (no spaces or special characters)."
          );
          return;
        }

        if (newEmail && !newEmail.match(emailp)) {
          alert("Invalid email format.");
          return;
        }

        if (newName) localStorage.setItem("name", newName);
        if (newEmail) localStorage.setItem("email", newEmail);
        if (newPassword) localStorage.setItem("password", newPassword);

        alert("Changes saved successfully!");
      });
    }
  });
}
// upgrade
let upgrade = document.body.querySelector("#upgrade");
if (upgrade) {
  upgrade.addEventListener("click", (e) => {
    if (localStorage.getItem("email") === null) {
      alert("Please login first");
    } else {
      content.innerHTML = `<div id="pricing">
          <div id="free">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-UjggpyNrpzG-ZfKD7d5UvvaQI45x4GkTg&s"
              alt="Free"
              id="freeimg"
            />
            <br />
            <h3>Free</h3>
            <p>Basic features for all users✔</p>
            <p>Unlimited access to all courses✔</p>

            <p>Access to all assignments✔</p>
            <p>Access to all projects❌</p>
            <p>Access to all webinars❌</p>
            <p>Access to all workshops❌</p>
            <p>Access to all events❌</p>
            <p>Access to all quizzes✔</p>
            <br />
            <button>In Use</button>
          </div>
          <div id="pro">
            <img
              src="https://t3.ftcdn.net/jpg/04/75/79/00/360_F_475790067_rfgcv3o1UuCbDxyPOb0RoZZd7a8TpGar.jpg"
              alt="Pro"
              id="freeimg"
            />
            <h2>Pro</h2>
            <p>Advanced features for professionals ✔</p>
            <p>Unlimited access to all courses ✔</p>
            <p>Access to all quizzes✔</p>
            <p>Access to all assignments✔</p>
            <p>Access to all projects✔</p>
            <p>Access to all webinars✔</p>
            <p>Access to all workshops✔</p>
            <p>Access to all events✔</p>
            <br />
            <button>Upgrade</button>
          </div>
        </div>`;
    }
  });
}
