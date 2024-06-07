var emailSignInput = document.querySelector('#signup-email');
var passwordSignInput = document.querySelector('#signup-password');
var nameInput = document.querySelector('#name');
var signUpbtn = document.querySelector('#signup');
var logInAnchor = document.querySelector('#login');
var msg = document.querySelector('#msg');

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
    var user = {
      name: nameInput.value,
      email: emailSignInput.value,
      password: passwordSignInput.value,
    };
    if (emailSignInput.value === "" || passwordSignInput.value === "" || nameInput.value === "") {
        msg.textContent = "All inputs is required";
        msg.style.cssText = "color: red !important" 

        return;
      }
      if (isValidEmail(emailSignInput.value) && isNewEmail(emailSignInput.value)
      ) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        clearForm();
        console.log(users);
        msg.textContent = "Success"
        msg.style.cssText = "color: green !important" 

      } else {
  
        msg.textContent = "Invalid email or email already in use"
        msg.style.cssText = "color: red !important" 


      }
    }
    
    signUpbtn.addEventListener("click", function () {
        signUp();
      });

      function isValidEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }
      function isNewEmail(email) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].email === email) {
            return false;
          }
        }
        return true;
      }
      function clearForm() {
        nameInput.value = "";
        emailSignInput.value = "";
        passwordSignInput.value = "";
      }

      logInAnchor.addEventListener("click", function () {
        window.location.href = "index.html";
      });