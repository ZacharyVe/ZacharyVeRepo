import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  constructor(props){
    super(props)
    this.state = {name: ''}
  }

  render(){
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Child />
      </div>
    )
  }

} 

export default Parent