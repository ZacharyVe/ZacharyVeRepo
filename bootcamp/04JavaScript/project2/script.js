var name = prompt("Please tell me your name", "Name");
var number1 = prompt("Give me a number", "");
var number2 = prompt("Add another number", "");

function greeting(name) {
  document.write("Have a nice day " + name);
}
function numbers(a, b) {
  var a = parseInt(number1);
  var b = parseInt(number2);
  var c = (a + b);
  document.write(" your sum is " + c);
}

greeting (name);
numbers (number1, number2);