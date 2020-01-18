import React, {Component} from 'react';
import Todos from './Todos'


class App extends Component {
 state = {
     newItem: '',
     todos: [
         { id: 1, text: 'I\'m the first' },
         { id: 2, text: 'I\'m the second' },
     ],
     editing: [],
 }

handleInputChange = (e) => {
    this.setState({
    newItem: e.target.value.trim()
    })
}

 deleteTodo = (id) => {
    const todos = [...this.state.todos]
     const updatedTodos = todos.filter(item => id !== item.id )
     this.setState({todos: updatedTodos})
 }

 addTodo = () => {
    const todos = [...this.state.todos]

    todos.push({
        id: Math.random(),
        text: this.state.newItem
    })
    this.setState({ todos })
 }

editTodo = (e, id) => {
    let todos = this.state.todos.map(todo => {
        if (todo.id === id)
        todo.text = e.target.value;
        return todo
    })
}

    render() {
        return (
           <div>
            <Todos
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
            />
            <input
                onChange={this.handleInputChange}
            />

            <button onClick={this.addTodo}> Add todo </button>
           </div>
        )
    }

}

export default App;
