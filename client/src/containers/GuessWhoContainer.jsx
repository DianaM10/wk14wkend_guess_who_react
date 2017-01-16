import React from 'react'
import Board from '../components/Board'
import Character from '../components/Character'

class GuessWhoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [
        {
          image: '/images/alex.jpg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/alfred.jpg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/anita.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/anne.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/bernard.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/bill.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/charles.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/claire.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/david.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/eric.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/george.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/herman.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/joe.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/maria.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/max.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/philip.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/richard.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/robert.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/sam.png',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/susan.jpeg',
          cross: '/images/cross.png',
          claimed: false 
        },
        {
          image: '/images/tom.png',
          cross: '/images/cross.png',
          claimed: false 
        }
       ],
       P1Character: '-' ,
       P2Character: '-',
       grid2: [
         {
           image: '/images/alex.jpg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/alfred.jpg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/anita.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/anne.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/bernard.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/bill.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/charles.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/claire.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/david.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/eric.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/george.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/herman.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/joe.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/maria.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/max.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/philip.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/richard.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/robert.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/sam.png',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/susan.jpeg',
           cross: '/images/cross.png',
           claimed: false 
         },
         {
           image: '/images/tom.png',
           cross: '/images/cross.png',
           claimed: false 
         }
        ]
    }
    this.handleCharacterClick =this.handleCharacterClick.bind(this)
    console.log('grid2', this.state.grid2)
  }

  handleCharacterClick (event) {
    console.log("clicked", this.handleCharacterClick)
    const index = event.target.value
    const crosses = document.getElementsByClassName('cross')
    // const cross
    for (const cross of crosses) {
      if (cross === index) {
        cross.style.display = "initial"
      }
    }
    // console.log('cross', cross)
    
    this.setState({
      grid: [
        image: index,
        claimed: true
      ]
    })
  }
  render() {
    return (
      <div>
        <Board
          grid={this.state.grid}
          grid={this.state.grid2}
          handleCharacterClick={this.handleCharacterClick}/>
          
      </div>
    )
  }


}

export default GuessWhoContainer