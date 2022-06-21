import React, { useEffect, useState } from 'react'
import { isValidNumber, isValidPlace } from '../services/game';

const Cell = ({board, number,rIndex,cIndex,selected, setSelected, disabled }) => {
    const [isValid,setIsValid]=useState(true);

    useEffect(()=>{
        // console.log(number);
        setIsValid(isValidNumber(board,rIndex,cIndex,number));
    },[number])
    let borderStyle='';
    let textStyle='text-black-500';
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
        borderStyle += ' bg-slate-700 border-blue-500 border-4 scale-120';
        textStyle = 'text-white';
    }
    if(disabled){
        borderStyle += ' bg-slate-100'
    }else{
        borderStyle += ' cursor-pointer hover:bg-blue-300 hover:border-blue-400 hover:border-4 hover:text-white';
        textStyle='text-blue-500'
    }

    if(!isValid){
        borderStyle += ' bg-red-500';
        textStyle='text-white';
    }

    

    return (
        <div onClick={()=>{
            if(disabled)return;
            setSelected([rIndex,cIndex])
        }} style={{width:40,height:40}} className={`relative bg-white px-3 py-2 shadow-xl ring-1 ring-gray-900/5 mx-auto my-auto ${borderStyle} ${textStyle}`}>
            {/* {rIndex},{cIndex} */}
            {/* <input type="text" style={{width:20}} value={rIndex+1} /> */}
            {/* {rIndex+1} */}
            {number}
        </div>
    )
}

export default Cell