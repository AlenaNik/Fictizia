import React from 'react'


const List = ( props ) => {
    
    
return (
    <ul>
                {props.todos.map((todo) => 
                    <li>
                        {todo.text}
                        <button onClick={() => props.handledelete(todo)}>Delete todo</button>
                        <button onClick={() => props.handleedit(todo)}>Edit todo</button>
                    </li>
                )}
                </ul>

)
}
export default List