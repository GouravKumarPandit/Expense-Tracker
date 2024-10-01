import React from 'react'

function SelectField({id, label, value, onChange, selectOptions}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id={id} value={value} onChange={onChange}>
                <option hidden>Select {label}</option>
                {selectOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
            </select>
        </div>
    )
}

export default SelectField