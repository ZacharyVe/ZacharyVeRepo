import React, {Component} from 'react';
import './TodoApp.css';
import TodoItem from './TodoItem';


class TodoApp extends Component {
  constructor(props) {
    super(props);
      this.state = {
        todos:[],
        newTodo:''
       };
      // this.handleChange = this.handleChange.bind(this)
      // this.handleSubmit = this.handleChange.bind(this)
  }
  handleChange = (event) => {
    this.setState(
      {
       [event.target.name]: event.target.value
      }
    )
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState(
      {
        todos,
        newTodo:''
      }
    )
  }

  render(){
    const todosList = this.state.todos.map( (todo, i) => (
      <TodoItem text={todo} key={i}/>
      )
    )

      return( 
        <div className="App">
          <header className="App-header"/>
          <h1>I am the To Do App</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              placeholder="what is your todo..?"
              name="newTodo"
              onChange={this.handleChange} //every time user types, a change happens
              value={this.state.newTodo}
            />
            <button type="submit" className="save-button">SAVE</button>
          </form>

          <div className="todo-content">
            <ol>
              {todosList}
            </ol>
          </div>
        </div>
      )
  }
}




export default TodoApp;
