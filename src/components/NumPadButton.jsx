import React from 'react'

const NumPadButton = ({ title, setSelectedValue, numLeft }) => {
    if(!numLeft){
        return <div className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-white text-base font-medium sm:ml-3 sm:w-auto sm:text-sm">
            &nbsp;
        </div>
    }
  return (
      <button
          onClick={() => {
              setSelectedValue(title)
          }}
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white border-purple-500 border-2 text-base font-medium text-purple-700 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
      >
          <div className='relative'>
              <div className='text-xl font-black'>{title}</div>
              <div className='text-xs text-white absolute top-8 -left-1'>
                  <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-purple-500 rounded-full">{numLeft}</span>
              </div>
          </div>
      </button>
  )
}

export default NumPadButton