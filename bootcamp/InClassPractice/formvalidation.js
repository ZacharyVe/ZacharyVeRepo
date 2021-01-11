
var nameerror = document.getElementById("nameerror");
var nameinput = document.getElementById("name");


var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("passmessage").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("passmessage").style.display = "none";
}

// When the user starts to type something inside the password field

myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// When the user clicks on the name field, show the message box
nameinput.onfocus = function() {
  document.getElementById("namemessage").style.display = "block";
}

// When the user clicks outside of the name field, hide the message box
nameinput.onblur = function() {
  document.getElementById("namemessage").style.display = "none";
}

//validate name is entered
nameinput.onkeyup = function() {
  var x = document.getElementById("name").value;
  if (x == "") {
    nameerror.classList.add("invalid");
    nameerror.classList.remove("valid");
  } else {
    nameerror.classList.add("valid");
    nameerror.classList.remove("invalid");
  }
}
