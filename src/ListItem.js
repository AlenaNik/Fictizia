import React from 'react'

const ListItem = ({ todo, props }) => {
    return (
        <li>
                        {todo.text}
                        <button onClick={() => props.handledelete(todo)}>Delete todo</button>
                        <button onClick={() => props.handleedit(todo)}>Edit todo</button>
                    </li>
                  
    )
}

export default ListItem