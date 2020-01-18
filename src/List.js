import React from 'react'
import ListItem from './ListItem'

const List = ( props ) => {
    
    
return (
    <ul>
                {props.todos.map((todo) => 
                    <li>
                        {todo.text}
                        <button onClick={() => props.handledelete(todo)}>Delete todo</button>
                    </li>
                )}
                </ul>

)
}
export default List