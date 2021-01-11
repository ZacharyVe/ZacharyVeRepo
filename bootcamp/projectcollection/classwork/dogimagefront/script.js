// alert('picture!!')

let image = document.getElementById('pic')

image.setAttribute('src', 'https://images.dog.ceo/breeds/mastiff-english/2.jpg')

let endPoint = 'https://dog.ceo/api/breeds/image/random'

let btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
  console.log('hey');
  fetch(endPoint)
  .then(function(response){   //reciving json
    console.log(response)
    if(response.ok){
    return response.json()    //parsing json into object AND sending to next function
  } throw Error('brittanny distracted me')
  .then(function(data){
    image.setAttribute('src', data.message)
  }).catch(function(error){
    console.error('there was an error', error)
  })//handle errors
})

//fetch(endPoint).then(function(response){}).then().catch(response)