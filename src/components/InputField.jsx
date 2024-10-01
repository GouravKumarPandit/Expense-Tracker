import React from 'react'

function InputField({id, type, label, value, onChange}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} placeholder={label} />
        </div>
    )
}

export default InputField