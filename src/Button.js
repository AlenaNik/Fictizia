import React from 'react'

const Button = ({handleSomething, children}) => {
return (
    <button onClick={handleSomething}>{children}</button>
)
}
export default Button
