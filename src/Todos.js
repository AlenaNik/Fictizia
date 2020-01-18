import React from 'react'

const Todos = ({ todos, deleteTodo, editTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onChange={() => editTodo(todo.id)}>Edit</button>
                </div>
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
