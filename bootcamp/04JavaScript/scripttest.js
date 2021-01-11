// var frozencoffee1 = "french vanilla";
// var frozencoffee2 = "hazelnut";
// var frozencoffee3 = "caramel";
// function customer1(flavor) {
//   var frozencoffee1 = "hazelnut";
//   console.log(frozencoffee1);
//   return flavor;
// }
// var theorder = customer1(frozencoffee1);
// document.write(theorder);
// function customer2(){
//   var theorder = "hazelnut";
//   var frozencoffee2 = "mocha";
//   console.log ("i need a " + theorder + " and an order of " + frozencoffee2 + " please.");
//   console.log ("also, can i get a " + frozencoffee3 + "?");
// }
// customer2();
// console.log(theorder);





// function theHello(name, question) {
//   alert("Hello " + name + "!");
//   question();
// }
// function help() {
//   alert("How can i assist you?");
// }
// theHello('garfield', help);





// setTimeout(function() {
//   alert("i love cookies!");
// }, 3000);





// var bakery = ["nut bread", "muffin", "croissant"];
// var doesitexist = bakery.includes("croissant");
// console.log(doesitexist);





// var bakery1 = ["thing1", "thing2", "thing3"];
// var bakery2 = ["thing4", "thing5", "thing6"];
// var newbakery = bakery1.concat(bakery2);





// var food = ["thing1", "thing2", "thing3", "thing4", "thing5"];
// // var foodreverse = food.reverse();
// console.log(foodreverse);





// var food = ["thing1", "thing2", "thing3", "thing4", "thing5"];
// food.push("thing6");
// console.log(food);





// var food = ["thing1", "thing2", "thing3", "thing4", "thing5"];
// var leftovers = food.pop();
// console.log(leftovers);
// console.log(food);





// var brunch = ["egg", "toast", "salmon", "yogurt"];
// var brunch2 = brunch.slice(1,3);
// var brunch3 = brunch.slice(2,3);
// console.log(brunch, brunch2, brunch3);





// var people = ["kim", "jim", "tim"];
// function letters(letter){
//   return letter.toUppercase();
// }
// var newpeople = people.map(letters);
// console.log(newpeople);





// var numbers = [1, 10, 13, 37];
// function over14(number){
//   return number > 14;
// }
// var check = numbers.filter(over14);
// console.log(check);





// var coffee = ["cafe1", "cafe2", "cafe3"];
// for (var i = 0; i < coffee.length; i++) {
//   document.write("<div>" + coffee[i] + "</div>");
// }





//*two ways to complete problem with new function or anonymous */
// var coffee = ["cafe1", "cafe2", "cafe3"];
// function thedrink(drink){
//   document.write("<div>" + drink + "</div>");
// }
// coffee.forEach(thedrink);
// coffee.forEach(function(drink){
//   document.write("<div>" + drink + "</div>");
// });



//class follow along***
//class follow along***
//class follow along***
//class follow along***
// function greetings(age) {
//   return "<div>So I understand you're " + age + " years old.</div>";
// }
// document.write(greetings(27));

// function fullgreeting(age, name) {
//   return "<div>Hi " + name + ", I believe you are " + age + " years old</div>";
// }
// document.write(
//   fullgreeting(27, "jenny")
// )


// function area(length, width) {
//   return (length * width);
// }
// var result = area(10, 2);

// document.write ("The area is " + result);
// const 
// var hello = function() {
//   console.log("how are you?");
// }
// hello();

// hello = "something else.";


// function evenodd(value) {
//     if (value % 2 == 0)
//         return true;
//       else 
//         return false;
// }

// document.write (evenodd(11))
// const blah = "its early"
// function hello() {
//   // const blah = "its early";
//   console.log(blah);
// }
// hello();
// console.log(blah);

// function hello() {
//   console.log("will you be my friend?");
//   console.log("please? ill give you money!");
// }
// setInterval(hello, 1000)

// setInterval(
//   function(){
//     alert("hello");
//   } 5000
// )


//**never got this to work */
// function isHighest(num1, num2, num3){ 
// var highestnum = Math.max(num1,num2,num3);
//   (Math.max(num1,num2,num3))
//  return highestnum;
// }

// isHighest(5,2,3)





// var names = ['reed', 'susan', 'ben', 'johnny', 'franklin'];

// var pets = ['moxxi', 'pickle', 'hootchie', 'dorglet'];

// pets.push('catf');

// var lastPet = pets[pets.length - 1];

// var family = pets.concat(names);

// var familylist = family.join(' , ');

// console.log("reed is " + family.lastIndexOf("reed") + " starting from zero")

// console.log(familylist)

// var kitty = pets.pop();

// console.log(kitty);

// // pets.shift();

// // var boof = pets.shift();

// // console.log(boof);

// var drinks = pets.slice(1,3);

// console.log(drinks)

// console.log(family)


// //*****ask why the order is not working*****
// pets.unshift("mornkuly");

// console.log(pets)

// console.log(family)
//  var numbers = [1, 2, 3, 4, 5];

//  for(var i = 0; i < numbers.length; i++) {
//    numbers[i] = numbers[i]*2;
//  }

// console.log(numbers)

// pets.forEach(function(element) {
//   console.log(element + ' says hi');
// });

// var numbers = [4, 9, 16, 25];
// var squarRoots = numbers.map(Math.sqrt);

// console.log(numbers);
// console.log(squarRoots);

// const array1 = [1, 4, 9, 16];

// // const map1 = array1.map(function(element){
// //   return Math.sqrt(element);
// // });

// const map1 = array1.map(Math.sqrt);

// console.log(map1);


// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// var longWords = words.filter(function(thisword){
//   return thisword.length > 6;
// });

// //*****ask why pets is changing even though its just consol log*****
// pets.reverse();
// console.log(longWords);
// console.log(pets)
// console.log(pets.reverse())
// console.log(pets.sort())

// var scores = [10, 1, 21, 2];
// scores.sort();
// console.log(scores)

// var points = ["40", "100", "1", "5", "25", "10"];
// console.log(points)
// console.log(points.sort(function(a,b){return a-b}))





// var onlineOrder = {
//   product: "banana nut bread",
//   quantity: 1,
//   delicious: true,
//   notes:"extra moist",
//   shippingCost: function(person) {
//     return "Thank you for your order " + person + "!";
//   }
// }






// var onlineOrders = [
//   {
//     name: "Bella",
//     order: "banana",
//     quantity: 3
//   },
//   {
//     name: "Lucy",
//     order: "cookie",
//     quantity: 4
//   },
// ]






// var onlineOrders2 = {
//   order1: ["bella", "banana nut bread", 3],
//   order2: ["lucy", "choc chip cook", 4],
//   order3: ["emily", "bluberry muff", 2],
// }
// document.write(onlineOrders2.order1[2])






function popup() {
  alert("how are you?")
}