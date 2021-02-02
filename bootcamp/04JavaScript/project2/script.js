const name = prompt("Please tell me your name", "Name");
const number1 = prompt("Give me a number", "0");
const number2 = prompt("Add another number", "0");

function greeting(a) {
  var a = name;
  document.write("Have a nice day " + a + ".");
}
function numbers(a, b) {
  var a = parseInt(number1);
  var b = parseInt(number2);
  var c = (a + b);
  document.write(" By the way, the sum of your numbers is " + c);
}

greeting(name);
numbers(number1, number2);