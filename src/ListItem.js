import React from 'react'


const ListItem = ({key, children}) => {
    return (
        <div
        key={key}
        >{children}</div>
    )
}

export default ListItem
