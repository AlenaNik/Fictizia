import React from 'react'



const Select = (props) => {
    return (
        <div>
                <select
                onChange={props.onChange}
                >
                    {props.items.map((item, key) => (
                            <option 
                            key={item.key}
                            value={item.text} 
                            >{item.text}</option>

                    ))}
                
                </select>
        </div>
    )
}

export default Select