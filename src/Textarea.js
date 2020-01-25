import React from 'react'

const Textarea = ({value, onChange, className, placeholder}) => {
    return (
        <textarea
        name="message"
        value={value}
        onChange={onChange}
        className="bg-gray-200"
        placeholder={placeholder}
    />
    )
}

export default Textarea;