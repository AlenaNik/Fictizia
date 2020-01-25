import React from 'react'



const Select = (props) => {
    return (
        <div>
                <select
                className="text-black mt-5"
                onChange={props.onChange}
                value={props.value}
                >
                    {props.items.map((item, key) => (
                            <option
                            key={item.key}
                            value={item.id || item.text}
                            >{item.text}</option>

                    ))}

                </select>
        </div>
    )
}

export default Select
