const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// cross origin resource sharing.  module sends
//   cors headers that allow pulling data from
//   a url containing difference in any of 
//   protocol://hostname:port
const cors = require('cors')
app.use(cors())

// process environment setting takes priority which
// allows setting a different port if needed by the
// deployer of this code
const port = process.env.PORT || 3000;

app.use(express.static('../client'))

// we'll use pg (node-postgres) to connect to postgres
const {Client}= require('pg');

let connectionObject = {
  host : "pgdb.accsoftwarebootcamp.com",
  database : "accsoftwarebootcamp",
  port : 5432,
  user : "acc",
  password : "accrocks"
}

// create a connection handle to the db
const client = new Client(connectionObject);

//connect to db
client.connect()
.then(function(returnedData){
  console.log(`Connected to ${client.database} db`)
  console.log('returned data is ' + returnedData)
})
.catch(function(error){
  console.log(`connection error: ${err.stack}`)
})


// default root route.  this needs to be removed so that
// the client app can be launched from ./../client folder
app.get("/", function(req, res) {
  res.send("Hello");
});

// Read data
app.get("/todos", function(req, res) {
  let query = `SELECT id as _id,
                      id as id,
                      description,
                      iscomplete
                From  todos.todos;`
  client.query(query, function(err, todos){
    if(err) {
      console.log(`Error: ${err}`)
      res.status(404).send('Error happened while querying /todos: ' 
                           + JSON.stringify(err))
    }
    res.send(todos.rows)
  })
});

// Create data
app.post("/todos", function(req, res) {
  // get the text of the todo from body
  // trim incoming todo description
  let newDescription = (req.body.description).trim();
  // if todo description is "". or undefined or null, err
  if(!newDescription) {
    res.status(411).json({code:123455, message: "Empty todo recieved"})
  } else {
    // form a query
    let query = `INSERT INTO todos.todos
                (description, iscomplete, user_id)
                VALUES ('${newDescription}', false, 12)
                RETURNING *`
    // send the query to the database
    console.log('query is:', query)              
    client.query(query, function(err, todos){
      if(err) {
        console.log(err)
        res.status(404).json({message: 'Error while posting'})
      } else {
        // add a _id property just in case our client needs it
        todos.rows[0].id = todo.rows[0].id;
        console.log('todos returned are:', todos.rows[0])
        // pg returns array, we need the object within it
        res.json(todos.rows[0]);
      }
    })
  }
});





// Delete data
app.delete("/todos/:id", (req, res) => {
  let todoId = parseInt(req.params.id);
  let query = `
    DELETE FROM todos.todos
    WHERE id = ${todoID}
  `
  client.query(query, function(err, data){
    if(err) {
      console.log(err.stack)
        res.status(404).json({code:1236,
        message: `Error deleting todo: ${todoId}`
      })
    } else {
      res.end();
    }
  })







});

// Update
app.put("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id;
  TodoModel.findById(requestedToDoId, function(error, result){
    if(error){
      res.status(666).send('Id does not exist for updating')
    } else {
      result.isComplete = !result.isComplete
      result.save(function(err, updatedTodo){
        if(err){
          res.status(667).send('Cannot update document')
        } else {
          res.status(202).send(updatedTodo)
        }
      })
      
    }
  })
})

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
});