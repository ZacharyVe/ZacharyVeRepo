// function required()
// {
// var empt1 = (document.getElementById("email").value);
// var empt2 = (document.getElementById("password").value);
// var empty = "";
//    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.emailAddr.value))
//     {
//       alert("That is not a valid email")
//       return (true)
//     }

//       alert("You have entered an invalid email address!")
//       return (false)
//   } else {

// alert('email and password accepted');
// return true; 
// }

// Function Validate
// Function ValidateEmail(inputText)
// {
// var empty = "";
// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if(inputText.value.match(mailformat)){
//   alert("Valid email address!");
//   document.form1.email.focus();
//   return true;
// }else if(/!inputTes.value.match(mailformat){
//   alert("You have entered an invalid email address!");
//   document.form1.email.focus();
//   return false;
// }

function checkForm(){
  //validate email is not blank
  if(form1.email.value == "") {
    alert("Error: Email cannot be blank!");
    form1.email.focus();
    return false;
  }
  //validate email format
  re = /^\w+$/;
  if(!re.test(form1.email.value)) {
    alert("Error: Email must contain only letters, numbers and underscores!");
    form1.email.focus();
    return false;
  }

  if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if(form.pwd1.value.length < 6) {
      alert("Error: Password must contain at least six characters!");
      form.pwd1.focus();
      return false;
    }
    if(form.pwd1.value == form1.email.value) {
      alert("Error: Password must be different from Email!");
      form.pwd1.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form1.pwd1.value)) {
      alert("Error: password must contain at least one number (0-9)!");
      form.pwd1.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form1.pwd1.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      form.pwd1.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(form1.pwd1.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      form.pwd1.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered and confirmed your password!");
    form1.pwd1.focus();
    return false;
  }

  alert("You entered a valid password: " + form.pwd1.value);
  return true;
}
