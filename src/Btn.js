import React from 'react'

export default props => {
    return (
        <button className={props.className}>
            {props.children}
        </button>
    )
}