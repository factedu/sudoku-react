import React from 'react'

const NumPadButtonClear = ({ title, setSelectedValue }) => {

    return (
        <button
            onClick={() => {
                setSelectedValue('')
            }}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white border-red-500 border-2 text-base font-medium text-red-700 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
            <div className='relative'>
                <div className='text-xl font-black'>{title}</div>
            </div>
        </button>
    )
}

export default NumPadButtonClear