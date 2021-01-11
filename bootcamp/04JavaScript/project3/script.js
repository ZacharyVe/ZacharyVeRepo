var numbers = [prompt("Choose first number") , prompt("Choose second number"), prompt("Choose last number")]
var sum = 0;


function add(arr) {
  for(var i=0; i < arr.length; i++){
  sum += parseInt(arr[i]);
}
  return sum;
}



var result = add(numbers);
document.write("The sum of all your numbers is " + result);
