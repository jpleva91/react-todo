// src/components/CreateTodoForm.js
import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      todo: ''
    }
  }

  onInputChange(event){
    console.log('create todo input changed')
  }

  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form>
        <input
          onChange={event => this.onInputChange(event)}
          placeholder='Write a todo here ...'
          type='text'
          value={this.state.todo} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm