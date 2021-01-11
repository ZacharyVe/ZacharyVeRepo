// var examples = ["APPLE", "Apple Cider", "   applesauce", "apple pie", "green apples"];
// var test1 = examples.map(function(data){
//   return data.toLowerCase();
// });

// test1 = test1.map(function(data){
//   return data.trim();
// });

// test1 = test1.filter(function(data){
//   return data.substr(0,5) === "apple";
// })

// var test1 = examples.map(function(data){
//   return data.trim().toLowerCase();
// })
// .filter(function(data){
//   return data.substr(0,5) === "apple";
// })
// .sort();


// // var test2 = examples.filter(function(lowercase) {
// //   var lowercase = ""
// //   examples.forEach();
// //   function removespaces(a,b){

// //   }

// //   return data == "apple";
// // })

// document.write(test1);
// document.write(test2);


// var words = "i love talking to animals.";
// var result = words.slice(7, 14);

// document.write(result);

// var question = "What you ask? What is my name?";
// var result = question.indexOf("name");
// var newResult = question.indexOf("george");
// var lastResult = question.indexOf("What", 3);

// var name = "my name is Susan Jones.";

// var result = name.substr(11,5);
// var newresult = name.substr(11,11);
// var lastresult = name.substr(11);
// var finalresult = name.substring(11,22);


// var name = "my name is robert jordan, jr.";
// var result =  name.substring(11, name.length - 1);

// document.write (result)


// var person = {
//   name: "Walter White",
//   age: 50,
//   family: ["Skylar", "Flynn", "Holly"],
//   associates: {
//     friend: "Jesse",
//     enemy: "Gus",
//   },
//   city: "Austin",
//   smart: true,
//   hobbies: "Cooking"
// };

// var person = {};

// person.name = "Walter White";
// person.age = 50;
// person.city = "Austin";
// person.hobbies = "Cooking";






// var posts = [
//   {
//     title: "how to cook...",
//     author: "Bob Odinkirk",
//     comment: ["The secret is butter", "Will this make me fat?"]
//   },
//   {
//     title: "Eggs are cheap...",
//     author: "Bryan Cranston",
//     comments: ["what if i dont have spatula", "I love butter", "salt and pepper"]
//   }
// ]

// var eggs = {
//   butter: "sure, lots of it",
//   saltNpepper: true,
//   cooking: [
//     {recipie: "scrambled"},
//     {recipie: "fried"},
//     {recipie: "soft boiled"}
//   ],
//   tasty: true
// }






// var food = document.getElementById("fruit");
// var food2 = document.getElementsByClassName("breakfast");
// var food3 = document.getElementsByTagName("li");
// var food4 = document.querySelector("#fruit");
// var food5 = document.querySelectorAll("h1");

// // document.getElementById("fruit").style.color = "green";
// // document.getElementById("fruit").style.border = "10px solid orange";
// // document.getElementById("fruit").style.fontSize = "36px";
// // document.getElementById("fruit").style.background = "blue";
// // document.getElementById("fruit").style.marginTop = "150px";

// // document.getElementById("breakfast").style.color = "green";
// // document.getElementById("breakfast").style.border = "10px solid orange";
// // document.getElementById("breakfast").style.fontSize = "36px";
// // document.getElementById("breakfast").style.background = "blue";
// // document.getElementById("breakfast").style.marginTop = "150px";

// var theBody = document.querySelector("body");
// var isOrange = false;

// setInterval(function(){
//   if(isOrange === true) {
//     theBody.style.background = "grey";
//   } else {
//     theBody.style.background = "violet";
//   }
//   isOrange = !isOrange;
// }, 3000);

// document.querySelector("li").textContent = "sold out check tomorrow";
// document.querySelector("li").innerHTML = "Chocolate <strong>Hazelnut</strong> Croissant";
// document.querySelector("a").setAttribute("href", "https://www.amazon.com/ref=nav_logo");
// document.querySelector("button").addEventListener("click",
// function (){
//   alert("how's it going");
// });

// document.querySelector("p").addEventListener("mouseout",
// function (){
//   document.querySelector("p").textContent = "I am a valid paragraph";
//   document.querySelector("p").style.background = "none";
// });
// document.querySelector("p").addEventListener("mouseover",
// function (){
//   document.querySelector("p").textContent = "Cheesecake";
//   document.querySelector("p").style.background = "green";
// });

// var sum = 10 
// sum = sum + 20


function changebuttoncolor1(){
  var button = document.querySelector("input");
  var current = document.getElementById("onoff");
  // button.style.background = "red";
  // button.value = "Turn Off";
  console.log(current, "outside if else");
  if(current.value == "Turn Off"){
    current.value = "Turn On";
    current.style.background = "green";
  } else {
    current.value = "Turn Off";
    current.style.background = "red";
  }
}

var displayNum = 10;
var num = document.getElementById("numDisplay")
num.innerHTML = displayNum;

// function upanddown() {
//   var x = 
//   if (button, 1) {
//     x=1;
//     decrement();
//   }
//   if (button, 2) {
//     x=2;
//     increment();
//   }
// }



// // function decrement(){
// //   displayNum--;
// //   otherWay(displayNum);
// //   num.innerHTML = displayNum;
// // }


// function increment(){
//   displayNum++;
//   otherWay(displayNum);
//   num.innerHTML = displayNum;
// }

function changecount(count){
  displayNum += count;
  otherWay(displayNum);
  num.innerHTML = displayNum;
}


function otherWay(num) {
  var error = "";
  if(num < 0 || num > 20){
    error = "sorry go the other way"
  } else {
    error = "";
  }
    warning.style.color = "red";
    warning.innerHTML = error;
  if (num < 0) {
    displayNum = 0;
  } else if (num > 20) {
    displayNum = 20;
  } else {
  return error;
}}


var time = document.getElementById("displayTime");

function showDate(){
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  time.innerHTML = hour + ":" + min + ":" + sec;
}

setInterval(showDate, 1000);