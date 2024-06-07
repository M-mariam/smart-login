var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var logInbtn = document.querySelector('#login');
var signUpAnchor = document.querySelector('#signup');
var msg = document.querySelector('#msg');

var users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
  }

    function signIn(){

    if(emailInput.value == "" || passwordInput.value == ""){
        msg.textContent = "All inputs are required"
        msg.style.cssText = "color: red !important" 

        return;
    }
    
    if (isCorrectEmailAndPassword(emailInput, passwordInput)) {
        window.location.href = "home.html";
      } else {
        msg.textContent = "Incorrect email or password"
        msg.style.cssText = "color: red !important" 

      }
}

  function isCorrectEmailAndPassword(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email.value && users[i].password === password.value) {
        localStorage.setItem("userName", users[i].name);
        return true;
      }
    }
    return false;
}


  logInbtn.addEventListener("click", function () {
    signIn();
  });
  
  signUpAnchor.addEventListener("click", function () {
    window.location.href = "signup.html";
  });

