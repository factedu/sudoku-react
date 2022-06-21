import React, { useEffect, useMemo, useState } from 'react'
import Button from './Button';
import Cell from './Cell';
import NumPadButton from './NumPadButton';
import NumPadButtonClear from './NumPadButtonClear';


const Board = ({ board, setBoard, disabledIndexes }) => {
    
    
    const [selected,setSelected]=useState([0,0]);
    const [numsLeft,setNumsLeft]=useState()
    // const [disabled,setDisabled]=useState(false);
    const setSelectedValue = (num)=>{
        setBoard((currBoard)=>{
            currBoard[selected[0]][selected[1]]=num+'';
            return [...currBoard];
        })
    }

    useEffect(()=>{
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board.length;j++){
                if(!disabledIndexes.includes(`${i},${j}`)){
                    setSelected([i,j]);
                    return;
                }
            }
        }
    }, [disabledIndexes])

    useMemo(()=>{
        if(!board)return;
        //numpad's number left 
        const tnumsLeft = {
            "1":9,
            "2":9,
            "3":9,
            "4":9,
            "5":9,
            "6":9,
            "7":9,
            "8":9,
            "9":9,
        };
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board.length;j++){
                let value = board[i][j];
                if(value){
                    tnumsLeft[value]=tnumsLeft[value]-1;
                }
            }
        }

        setNumsLeft(tnumsLeft);
        console.log(tnumsLeft);
    },[board])

    if(!board.length){
        return <div>Loading..</div>
    }

    
  return (
    <div>
          <div style={{ width: 360, height: 360 }} className="mx-auto my-10">
              <div className="grid gap-x-0 gap-y-0 grid-cols-9 grid-rows-9">
                  {board.map((row, rIndex) => {
                      return row.map((col, cIndex) => {
                            let disabled;
                            if(disabledIndexes.includes(`${rIndex},${cIndex}`)){
                                disabled=true;
                            }else{
                                disabled=false;
                            }
                          return <Cell key={`${rIndex}${cIndex}+''`} board={board} disabled={disabled} number={col} rIndex={rIndex} cIndex={cIndex} selected={selected} setSelected={setSelected} />
                      })
                  })}
              </div>

          </div>
          {numsLeft && <div className='grid grid-cols-5 gap-y-8'>
              <NumPadButton title={1} numLeft={numsLeft['1']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={2} numLeft={numsLeft['2']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={3} numLeft={numsLeft['3']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={4} numLeft={numsLeft['4']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={5} numLeft={numsLeft['5']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={6} numLeft={numsLeft['6']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={7} numLeft={numsLeft['7']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={8} numLeft={numsLeft['8']} setSelectedValue={setSelectedValue} />
              <NumPadButton title={9} numLeft={numsLeft['9']} setSelectedValue={setSelectedValue} />
              <NumPadButtonClear varient='clear' title={'X'}  setSelectedValue={setSelectedValue} />
          </div>}
    </div>
    
  )
}

export default Board