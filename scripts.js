var email = document.getElementById("email");
var submit = document.getElementById("submit");
var errormsgs = document.getElementsByClassName("msg");
var errorimg = document.getElementById("errorimg");
var inputs = document.getElementsByClassName("inputs");

function validateEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let emailValue = email.value;

  if (emailValue === "") {
    errormsgs[0].style.display = "block";
    errormsgs[1].style.display = "none";
    errorimg.style.display = "block";
    inputs[0].style.border = "2px solid #f96262";
  } else {
    if (!validateEmail(emailValue)) {
      errormsgs[0].style.display = "none";
      errormsgs[1].style.display = "block";
      errorimg.style.display = "block";
      inputs[0].style.border = "2px solid #f96262";
    } else {
      errormsgs[0].style.display = "none";
      errormsgs[1].style.display = "none";
      errorimg.style.display = "none";
      inputs[0].style.border = "1px solid #ce9797";
      
    }
  }
});
