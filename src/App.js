import React, {Component} from 'react';
import Todos from './Todos'
import Input from './Input'

class App extends Component {
 state = {
     newItem: '',
     editItem: false,
     todos: [
         { id: 1, text: 'I\'m the first' },
         { id: 2, text: 'I\'m the second' },
     ],
 }

handleInputChange = (e) => {
    this.setState({
    newItem: e.target.value.trim(),
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
    this.setState({ todos,
     newItem: ''
     })
 }

editTodo = (id) => {
    const todos = this.state.todos
    const selectedItem = todos.find(item => item.id === id)
    console.log(selectedItem)
    this.setState({
    newItem: selectedItem.text,
    editItem: true,
    id: id,
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
            <Input
                inputChange={this.handleInputChange}
                value={this.state.newItem}
            />
            <button onClick={this.addTodo}> { !this.state.editItem ? 'add item' : 'finish editing'} </button>

           </div>
        )
    }

}

export default App;
