"use strict";

(function() {
  
// // object literal
// var person = {fname: "John"}

// // object constructor
// var student = new Object();

// // property by dot notation
// person.age = 30


// // conputer member acess (dont remmber this)
// var lname = 'lname'
// person[lname] = 'Lue'
// person['City'] = 'Austin'
// var whatever = 'age'

// person.demographic = new Object();

// person.demographic.gender = 'M'

// person.demographic.postalcode = 78752

// console.log(person)
// console.log(person['age'])
// console.log(person[whatever])
// console.log(person.age)

// console.log(person['demographic']['postalcode'])
// console.log(person.demographic.gender)

// function greet(arg){
//   console.log('Hello ' + arg.fname)
// }

// greet(person)

// console.log(JSON.stringify(person))

// var myJSON = JSON.stringify(person)
// var myPerson = JSON.parse(myJSON)

// console.log(myJSON, myPerson)

// greet.author = 'Piyush'

// console.log(greet.name)
// console.log(greet.toString())

// // statements - code that does something
// // expressions - code that creates or modifies a value in memory


// // function statment
// function greet() {console.log('hello')}

// // function expression
// var hello = function() {console.log('hello')}
// hello();

// Immediately Invoked Function Expression (IIFE)

// (function(name){
//   var a = 10;
//   var b = 20;
//   console.log('Hello ' + (name||' friend') )
// })()

// // var _a = 12
// var a = {name: 'oranges', quantity: 12}; //Objects copy (or pass) by reference
// // var b = JSON.parse(JSON.stringify(a))
// // var b = {name: 'oranges', quantity: 12};
// var b = {...a}       //ES6

// a.quantity = 24;
// console.log("a's quantity is : ", a.quantity);
// console.log("b's quantity is : ", b.quantity);

// var b = {...a}



// var c = {}
// console.log(c.toString())

// var c = new Object()
// c.name = 'oranges'
// c.quantity = 12;

// console.log(c.quantity);



// var _b = _a;                             //primatives copy (or pass) by value
// var b = a;
// b.quantity = 24;

// function(arg){
//   console.log(arg)
// }

// test(_a) //pass by value
// test(a)  //pass by reference

// console.log(a.quantity);
// console.log(this)        //global

// function myfn(){            
//   console.log(this)         //global
//   this.myVar = "hee haw!!"
// }

// myfn();

// console.log(global.myVar)
// console.log(this)

// var myfn2 = function() {
  
// }

var myObj = {
    name: 'my object',
    myMethod: function(){
      console.log(this) // this === parent object
      console.log(this.name) // proves that
      function myInnerMethod() {
        console.log(this)
      }
      myInnerMethod();
   }
}
myObj.myMethod();




})()
