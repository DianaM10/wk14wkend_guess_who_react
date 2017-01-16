import React from 'react'

const Character = (props) => {
  console.log('character props', props)

  const characters= props.characters.grid.map(function(character, index) {
    return (
      <tr>
     <img className='character' key={index} src={character.image} onClick={props.onClick}/>
     <img className='cross' src={character.cross}/>
     </tr>
     )
  })
    return (
      <div className='character_table'>
      {characters}

      </div>
      )
    }



export default Character