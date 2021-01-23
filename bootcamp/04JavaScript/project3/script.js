const numbers = [prompt("Choose first number","0") , prompt("Choose second number","0"), prompt("Choose last number","0")];


function add(arr) {
  var sum = 0;
  for(var i=0; i < arr.length; i++){
  sum += parseInt(arr[i]);
}
  return sum;
}

var result = add(numbers);



document.write("The sum of all your numbers is " + result);
