import React, { useEffect, useState } from 'react'
import Button from './Button';
import Cell from './Cell';


const Board = ({board,setBoard}) => {
    
    
    const [selected,setSelected]=useState([0,0]);
    const setSelectedValue = (num)=>{
        setBoard((currBoard)=>{
            currBoard[selected[0]][selected[1]]=num+'';
            return [...currBoard];
        })
    }

    

    
  return (
    <div>
          <div style={{ width: 360, height: 360 }} className="mx-auto my-10">
              <div className="grid gap-x-0 gap-y-0 grid-cols-9 grid-rows-9">
                  {board.map((row, rIndex) => {
                      return row.map((col, cIndex) => {
                          return <Cell key={`${rIndex}${cIndex}+''`} number={col} rIndex={rIndex} cIndex={cIndex} selected={selected} setSelected={setSelected} />
                      })
                  })}
              </div>

          </div>
          <div className='grid grid-cols-9'>
              <Button title={1} setSelectedValue={setSelectedValue} />
              <Button title={2} setSelectedValue={setSelectedValue} />
              <Button title={3} setSelectedValue={setSelectedValue} />
              <Button title={4} setSelectedValue={setSelectedValue} />
              <Button title={5} setSelectedValue={setSelectedValue} />
              <Button title={6} setSelectedValue={setSelectedValue} />
              <Button title={7} setSelectedValue={setSelectedValue} />
              <Button title={8} setSelectedValue={setSelectedValue} />
              <Button title={9} setSelectedValue={setSelectedValue} />
          </div>
    </div>
    
  )
}

export default Board