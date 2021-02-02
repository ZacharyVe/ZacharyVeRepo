const pokemon = require('pokemon');
let pokearray = []

console.log(pokemon.random())

for(let i = 0; i < 5; i++){
  pokearray.push(pokemon.random())
}

console.log(pokearray)
