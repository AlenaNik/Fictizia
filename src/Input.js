import React from 'react'

const Input = ({ inputChange, value }) => {
return (
  <input
                onChange={inputChange}
                value={value}
            />
)

}


export default Input
