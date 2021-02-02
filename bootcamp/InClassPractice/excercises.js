
// var a = prompt("day of week number")

// var weekday=new Array(7);
// weekday[0]="Monday";
// weekday[1]="Tuesday";
// weekday[2]="Wednesday";
// weekday[3]="Thursday";
// weekday[4]="Friday";
// weekday[5]="Saturday";
// weekday[6]="Sunday";

// document.write("That day is " + weekday[3]);

// function printday(a){
//   document.write(weekday["a"]);
// };

// printday(weekday[]);



// //make a function that takes 1 argument
// function printDay(num){
//   var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//   return days[num];
// }
// //
// var arr = ([1,2,3,4]);
// function lastvalue(arr){
  
//   //return last value of array
//   return arr.pop()
// }
// document.write(lastvalue(arr));


// //
// var arr1 = [2, 3, 4];
// arr1.push (5, 6, 7);
// arr1.unshift (0, 1);

// document.write(arr1);


// //make function expects an array passed as argument

// function withoutfirst(arr){
//   //remove the first element
//   var newarr = arr.shift();
//   return(newarr);
// };

// withoutfirst(arr);

// newarr = withoutFirst(arr1);
// document.write(newarr);


//fucntion with two arguments
// var a = prompt("first string to compare");
// var b = prompt("second string to compare");


// function stringcompare(str1, str2) {
//   //compare if 1st is longer than 2nd
//   if (str1.length > str2.length){
//     result = "the first is longer";
//     return result;
//   }
//   else if (str2.length > str1.length){
//     result = "the second is longer";
//     return result;
//   }
//   else {
//     result = "equal length";
//     return result;
//   }
// }

// document.write (stringcompare (a,b));

// var food = ['onion rings', 'fries', 'burders', 'chili', 'hot dog']

// function thelastofus(arr) {
//   result = arr.slice(0, -1)
//   return result;
// }

// var result = thelastofus(food)
// document.write (result);



// function theflip(arr){
//   newarray = arr.reverse;
//   return newarray;
// }

// theflip([1,2,3]);

// document.write (newarray);



// var food = ['onion rings', 'fries', 'burders', 'chili', 'hot dog']

// food.forEach(showfood)

// function showfood(arr) {
//     for i += index + ":" + "<br>";
  
//   //display on page with styling and spacing
//     document.write()
// }

var food = ["sushi", "pizza", "icecream"]

function printToDoc(arr) {
  //make a for loop to go trough the size of array
  for(var i = 0; i < arr.length; i++){
    //Print element to DOM
    document.write("<p style='color: green', 'size: 100px'> "+ arr[i] + "</p>")
  }
}

printToDoc(food).style.color("green");