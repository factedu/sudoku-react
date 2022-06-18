import React from 'react'

const Cell = ({ number,rIndex,cIndex,selected, setSelected }) => {
    let borderStyle='';
    if((rIndex+1)%3===0){
        borderStyle+='border-b-4 border-red-500'
    }
    if((cIndex+1)%3===0){
        borderStyle+=' border-r-4 border-red-500'
    }
    if(rIndex===0){
        borderStyle += ' border-t-4 border-red-500'
    }
    if(cIndex===0){
        borderStyle += ' border-l-4 border-red-500'
    }
    if(selected[0]===rIndex && selected[1]===cIndex){
        borderStyle += ' text-white bg-slate-700 border-blue-500 border-4 scale-120'
    }

    

    return (
        <div onClick={()=>{
            setSelected([rIndex,cIndex])
        }} style={{width:40,height:40}} className={`cursor-pointer hover:bg-blue-300 hover:border-blue-400 hover:border-4 hover:text-white relative bg-white px-3 py-2 shadow-xl ring-1 ring-gray-900/5 mx-auto my-auto ${borderStyle}`}>
            {/* {rIndex},{cIndex} */}
            {/* <input type="text" style={{width:20}} value={rIndex+1} /> */}
            {/* {rIndex+1} */}
            {number}
        </div>
    )
}

export default Cell