import React from "react";


export const Input = (props) => {
    const {
        type = "text",
        name,
        id, placeholder,
        width = "w-1/3",
        label,
        className = "",
        register
    } = props
    return <div className={`${width} text-left pr-3 flex-col flex justify-start`}><label>{label}</label> <input
        {...{ type, name, id, placeholder }}
        {...register(name)}
        className={`border-2 rounded border-gray-400 px-3 py-2 text-sm bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${className}`}

    />
    </div>
}

export default Input