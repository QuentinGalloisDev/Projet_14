import React from 'react'

export const InputForm = ({ labelFor, inputType, labelName, register, className }) => {
    return (
        <div className={className}>
            <label htmlFor={labelFor}>{labelName}</label>
            <input type={inputType} id={labelFor} {...register(labelName)} />
        </div>
    )
}
