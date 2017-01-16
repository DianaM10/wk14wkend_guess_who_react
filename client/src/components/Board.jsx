import React from 'react'
import Character from './Character'
import PlayerCard from './PlayerCard'



const Board = (props) => {
  console.log("board props", props)
  return (
    <div>
    <h1>Guess Who?</h1>
    <Character characters={props} onClick={props.handleCharacterClick}/>
    <PlayerCard card={props}/>
    </div>
    )
}
  



export default Board