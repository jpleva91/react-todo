import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render(){
    let todoArray = this.props.todos.map( (todo) => {
      return (
      	console.log('each todo map:',todo),
        <Todo
          key={todo._id}
          todo={todo}/>
      )
    })
    console.log("todo array:",todoArray)
    return(
      <div className="todos">
        {todoArray}
      </div>
    )
  }
}

export default TodoList;