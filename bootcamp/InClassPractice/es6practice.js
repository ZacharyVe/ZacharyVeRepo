// var a = 1; var b = 2;
// {
//   var a =10;
//   let b =20;
//   console.log ("a is:", a)
//   console.log ("b is:", b)
// }
// const a =10;

// function myFn(){
//   a = 20;
// }

// myFn();

// const x = 1;
// const x = 2;

// var a = {name: "Univ Of Texas", place: "Austin"}
// var b = a

// if (a===b){
//   console.log("They are equal");
// } else {
//   console.log("They are NOT equal");
// }


// const b = {school: "ACC"}

// var name = 'Bob';
// var age = 36;
// var speak = 'WOOF';

// var text = 'Fred said, "' + name + "'s real age is " + age + ', and his dog says ' + speak + '"';

// document.write(text);

// var text2 = `Fred said, "${name}'s real age is " + ${age} + " and his dog said '" + ${speak} + "'!\""`;

// document.write(text2);

// const f1 = (arg1, arg2) => {
//   console.log("This is where stuff happens " + arg1 + arg2);
// }

// const double = arg => 'this is the double: (' + arg * 2 + ')';

// function buyAlchohol(age) {
//   let message = age >= 21 ? 'You can buy alchohol' : 'You are too young'
//   console.log(message)
// ;}
//  let areYouLying = (answer) => {
//    return answer ? "Guilty!" : "Innocent!";
//  }
//  document.write(areYouLying(true));

//  const buyAlchohol = age => (
//    age>=21?
//    'you can buy':
//    'you cant buy'
//  )

//  document.write(buyAlchohol());

const mySchool = {name: 'ACC', place: "Austin"};
// let {name} = mySchool;
// let {place} = mySchool;
// let {dogo} = mySchool;
let {object.keys(mySchool)} = mySchool;

console.log(name);
console.log(place);
console.log(dogo);

// let {object.key(object1)} = object1;