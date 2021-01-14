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
  let newTodo = new TodoModel({
      description: req.body.description
  })
  newTodo.save(function(error, result){
    if(error){
      console.log('Error: ', error)
      mongoose.disconnect()
    } else {
      console.log('Saved new todo: ', result)
      res.status(201).json(result);
    }
  })   
});

// Delete data
app.delete("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id;
  console.log(requestedToDoId)
  TodoModel.findByIdAndDelete(requestedToDoId, function(error, result){
    if(error){
      res.status(400).send('Id does not exist for deletion')
    } else {
      res.status(201).send(result)
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
  console.log(`Listen on port ${port}`);
});
