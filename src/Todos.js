import React from 'react'
import Button from './Button'
import ListItem from './ListItem'

const Todos = ({ todos, deleteTodo, editTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <ListItem key={todo.id}>
                    <span>{todo.text}</span>
                    <Button handleSomething={() => deleteTodo(todo.id)}>Delete</Button>
                    <Button handleSomething={() => editTodo(todo.id)}>Edit</Button>
                </ListItem>
            )
        })
    ) : (
        <p>No todos left</p>
    )

    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos
