// function outer(){
//   console.log('outer')
//   inner()
// }

// function inner(){
//   console.log('inner')
// }

// outer();

// var myVar = 'value of myVar';
// function myFunc(){
//   console.log('output from myFunction')
// }
// console.log(myVar);

// var myVar = 'value of myVar';
// myVar = 'hello'

// if(myVar === undefined){
//   console.log('it is undefined')
// } else {
//   console.log('it is something else')
// }

// function myFunc(){
//   console.log('i love blue cars');
// }

// console.log(myVar); // should have reference error

// var myVar = 'i love red cars'

// console.log(myVar)

// myFunc();

// var a = 10;

const testFn = () => {
  a = 40; //please dont do this (declaring variables to global)
  console.log(`inside a: ${a}`);
}

testFn();

console.log(`outside a: ${a}`);

const test2Fn = () => {
  a = 20; //please dont do this (declaring variables to global)
  console.log(`another a; ${a}`);
}

test2Fn();
console.log(a)