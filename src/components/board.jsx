import React, { useState } from 'react'
import Square from './square'

const Board = () => {
    const [game , setGame ] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    // const [time , setTime] = useState(3)
    const [undoX , setundoX] = useState(1)
    const [undoO , setundoO] = useState(1)
    const  handlePlay = (position) => {
        const newGame = game.map((item , idex)=>{
            if (idex === position) {
                return  player ? "X" : "O"
            }
            return item
        })
        setGame(newGame)
        setPlayer(!player)     
    } 
    
    const undo = (position) => {
        if (game[position] !== "null" ) {
            const newGame = game.map((item , index)=>{
                if (player && game[position]=== "X" && undoX !== 0) {
                    if (index === position) {
                        setundoX(0)
                        return  null
                    }else{
                        return item
                    }
                }
                else if (!player && game[position]=== "O" && undoO !== 0) {
                    if (index === position) {
                        setundoO(0)
                        return  null
                    }else{
                        return item
                    }
                }
                else return item

                
            })
            setGame(newGame)
            setPlayer(player)  
        }     
    } 
    const listwin = [
        [0 ,1 ,2 ],[3 ,4 ,5 ],[6 ,7 ,8 ],
        [0 ,3 ,6 ],[1 ,4 ,7 ],[2 ,5 ,8 ],  
        [0 ,4 ,8 ],[2 ,4 ,6 ],
    ]
    const checkwin = ()=>{
        for(let i = 0; i < listwin.length; i++) {
            const [p1, p2, p3] = listwin[i]
            console.log(listwin[i] ,game[p1],game[p2],game[p3] );
            if (typeof game[p1] !== "null" && typeof game[p2] !== "null" ) {
                if (game[p1] === game[p2] && game[p2] === game[p3] ) {
                    return{ whowin : game[p1] , 
                        listwin : [p1, p2, p3]
                    } 
                }
            }
        }
        return { whowin : "" , 
            listwin : [null ,null ,null]
        } 
    }



const regame = ()=>{
    setGame([null, null, null, null, null, null, null, null, null])
}

  return (
    <div className='grid grid-cols-3 gap-2 mx-auto'>  
        <div className="col-span-3 text-3xl text-green-500">{checkwin().whowin?checkwin().whowin+" Winner" :"" } </div>
        <div className="col-span-3">Đến lượt : {player? "X":"O"}</div>
        <div className="col-span-3">Người Chơi X : undo {undoO} </div>
        <div className="col-span-3">Người Chơi O : undo {undoX}</div>
    {game.map((item , index)=>{
        if (checkwin().listwin) {
            for (let i = 0; i < checkwin().listwin.length; i++) {
                const element = checkwin().listwin[i];
                if (element === index) {
                    return <Square value={item} handlePlay = {()=> handlePlay(index)} undo = {()=> undo(index)} highlight={"bg-red-500"}></Square>
                }
            }
        }
        // console.log(index);
        return <Square value={item} handlePlay = {()=> handlePlay(index)} undo = {()=> undo(index)} highlight={false}></Square>
    })}
      <button onClick={regame} className="col-span-3 p-2 border bg-gray-300">Chơi Lại</button>
    </div>
  )
}

export default Board
