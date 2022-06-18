import React from 'react'

const Button = ({ title, setSelectedValue }) => {
    return (
        <button
            onClick={()=>{
                setSelectedValue(title)
            }}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
            {title}
        </button>
    )
}

export default Button