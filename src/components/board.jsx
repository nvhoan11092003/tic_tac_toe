import React, { useState } from 'react'
import Square from './square'

const Board = () => {
    const [game , setGame ] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [time , setTime] = useState(3)
    const settimefn = ()=>{
        setTime(time-1)
    } 
    const  handlePlay = (position) => {
      
        const newGame = game.map((item , idex)=>{
            if (idex === position) {
                return  player ? "X" : "O"
            }
            return item
        })
        setGame(newGame)
        setPlayer(!player)
       
        const myInterval =  setInterval(settimefn,1000)
        clearInterval(myInterval)
        setTime(3)
        
    } 
    
    const listwin = [
        [0 ,1 ,2 ],[3 ,4 ,5 ],[6 ,7 ,8 ],
        [0 ,3 ,6 ],[1 ,4 ,7 ],[2 ,5 ,8 ],  
        [0 ,4 ,8 ],[2 ,4 ,6 ],
    ]

    const checkwin = ()=>{
        for(let i = 0; i < listwin.length; i++) {
            const [p1, p2, p3] = listwin[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        }
        return null
    }

const regame = ()=>{
    setGame([null, null, null, null, null, null, null, null, null])
}

const myInterval =  setInterval(settimefn,1000)


  return (
    <div className='grid grid-cols-3 gap-2 mx-auto'>
        <div className="col-span-3 text-3xl text-green-500">{checkwin()?checkwin()+" Winner" :"" } </div>
        <div className="col-span-3">Đến lượt : {player? "X":"O"}</div>
        <div className="col-span-3">Người Chơi X : {player? time+"s":""} </div>
        <div className="col-span-3">Người Chơi O : {player? "": time+"s"}</div>
      <Square value={game[0]} handlePlay = {()=> handlePlay(0)}></Square>
      <Square value={game[1]} handlePlay = {()=> handlePlay(1)}></Square>
      <Square value={game[2]} handlePlay = {()=> handlePlay(2)}></Square>
      <Square value={game[3]} handlePlay = {()=> handlePlay(3)}></Square>
      <Square value={game[4]} handlePlay = {()=> handlePlay(4)}></Square>
      <Square value={game[5]} handlePlay = {()=> handlePlay(5)}></Square>
      <Square value={game[6]} handlePlay = {()=> handlePlay(6)}></Square>
      <Square value={game[7]} handlePlay = {()=> handlePlay(7)}></Square>
      <Square value={game[8]} handlePlay = {()=> handlePlay(8)}></Square>
      <button onClick={regame} className="col-span-3 p-2 border bg-gray-300">Chơi Lại</button>
    </div>
  )
}

export default Board
