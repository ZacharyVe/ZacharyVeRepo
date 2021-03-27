const spicyTacos = {
  name: "Spicy Tacos",
  serves: 10,
  ingredients: ['Meat','Tomatoes']
}




document.getElementById('recipie').innerHTML= `<h1>${spicyTacos.name}
                                              <ul>
                                                <li>${Object.keys(spicyTacos[1])}: ${spicyTacos.serves}</li>
                                              </ul>