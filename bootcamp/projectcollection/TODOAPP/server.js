const express = require('express')
const app = express()
const requrest = require('request')
const logger = require('morgan')

app.use(logger('dev'));

const PORT = process.env.PORT || 3000

let toDoArray = [
  {
    id:1,
    description: 'call mom',
    isComplete: false
  },
  {
    id:2,
    description: 'buy groceries',
    isComplete: false
  },
  {
    id:3,
    description: 'go to the movie',
    isComplete: false
  }
]


app.get('/', (req, res)=>{
  res.send('root route')
})


// /todos
// /todos/:id


// CRUD
// C - Create - POST method
// R - Read - GET method
// U - Update - PUT method   (using the find/put methods? look at how it works and what you get back!!)
// D - Delete - DELETE method




// R - Read - GET method
app.get('/todos', (req, res)=>{
  res.status(200).json(toDoArray)
})

// C - Create - POST method
app.post('/todos', (req,res)=>{

  let newTodo = 
      {
          id: 4,
          description: 'buy more stuff',
          isComplete: false,
      }

  toDoArray.push(newTodo)

  res.send(toDoArray)

})


// D - Delete - DELETE method
app.delete('/todos/:id', (req,res)=>{
    let requestedTodoId = parseInt(req.params.id)
    let requestedTodoIndex = toDoArray.findIndex(function(todo){
    // toDoArray.findIndex(function(todo){
      return todo.id === requestTodoId
    })

    if(requestedTodoIndex >= 0){
      let deletedTodo = toDoArray.splice(requestedTodoIndex, 1)
      res.send(deletedTodo)
    } else {
      res.send('id does not exist')
    }


})





app.listen(PORT, ()=> console.log(`app listening on port ${PORT}.`))