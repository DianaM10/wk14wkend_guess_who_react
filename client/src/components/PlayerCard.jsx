import React from 'react'

const PlayerCard = (props) => {
  let player2card 
  const player1card = props.card.grid[Math.floor(Math.random() * props.card.grid.length)]
  if (props.card.grid.length > 1) {
    do {
      player2card = props.card.grid[Math.floor(Math.random() * props.card.grid.length)]
    } while (player1card === player2card)
  }
  console.log('player2card', player2card)
  console.log('player1card', player1card)
  // this.setState({
  //   P1Character: player1card ,
  //   P2Character: player2card,
  // }) not possible to set state from here?
  
  return (
    <div>
    <h1>Your Character is .... </h1>
    <img src={player1card.image}/>
    </div>
    )
}
  



export default PlayerCard