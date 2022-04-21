import React from 'react'

const Input = ({label,type,name,placeholder,onChange}) => {
    
    return (
        <div>
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} required onChange={onChange} />
        </div>
    )
}

export default Input