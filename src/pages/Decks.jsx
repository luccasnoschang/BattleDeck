import React from 'react'
import Navbar from '../components/Navbar'
import './Decks.css'

function Decks() {
  return (
    <div className='containerDecks'>
      <Navbar />

      <div className='principa'>

        <div className='decks'>

        <img className='DeckCartas' src="./src/assets/images/DeckBruxo.png" alt="" />
        <img className='DeckCartas' src="./src/assets/images/DeckDemonio.png" alt="" />
        <img className='DeckCartas' src="./src/assets/images/LogoShadowDuel.png" alt="" />


          <div className='cartasTotais'>


          </div>



        </div>


      </div>


    </div>
  )
}

export default Decks
