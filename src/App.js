import React, {Component} from 'react'
import './App.css'
import List from './List'

class App extends Component {
    state = {
        newInput: '',
        todos: [
            { id: 1, 
              text: 'call mom'
            },
            { id: 2, 
                text: 'feed cat'
            },
            { id: 3, 
            text: 'another'
            }
        ]}

    
    handleNameChange = e => {
        this.setState({ newInput: e.target.value.trim()})
        console.log(this.newInput)
    }

    addTodo = () => {
            let todos = [...this.state.todos]
            todos.push({
                id: Math.random(),
                text: this.state.newInput})
            this.setState({ todos })
            console.log(todos)
        }

    deleteTodo = (todoToDelete) => {
            let todos = this.state.todos.filter(todo => todo.id !== todoToDelete.id) 
             this.setState({ todos })
             console.log(todos)
            
            // tlter id = !id   
    }    
    editTodo = (todoToDelete) => {
            console.log(todoToDelete)
    }


    render() {
        return (
            <>
                <div>
                    name: 
                    <input
                    onChange={this.handleNameChange}
                    value={this.newInput}/>
                </div>
                <button onClick={this.addTodo}>Add to do</button>
                <List 
                handledelete={this.deleteTodo}
                handleedit={this.editTodo}
                todos={this.state.todos}
            />
            </>
        )
    }

}

export default App;
