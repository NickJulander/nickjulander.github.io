function home() {
  location.href = "home.html";
}

function aboutMe() {
  location.href = "aboutme.html";
}

function projects() {
  location.href = "projects.html";
}

function resume() {
  location.href = "resume.html";
}

function contactMe() {
  location.href = "contactme.html";
}

function submitForm() {
  var fs = require('fs');

  var email = document.getElementById("email");
  document.getElementById("email").setAttribute("placeholder", "Your email...");
  fs.writeFile('contacts.txt', email) ;

}
