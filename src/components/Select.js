import React from "react";

export const Select = (props) => {
    const {
        name,
        id,
        className = "",
        options = [],
        width = "w-1/3",
        label,
        register
    } = props
    return <div className={`${width} text-left flex-col flex pr-3 justify-start`}>
        <label>{label}</label>
        <select
            {...{ name, id }}
            {...register(name)}
            className={`border-2 border-gray-400 rounded px-3 py-3 text-sm bg-transparent text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 ${className}`}>
            <option value="">Select</option>
            {
                options.map((option, index) => <option key={index} value={option}>{option}</option>)
            }
        </select>
    </div>
}

export default Select