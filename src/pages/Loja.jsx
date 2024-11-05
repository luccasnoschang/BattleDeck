import React from 'react'
import Navbar from '../components/Navbar'
import './Loja.css'

function Loja() {
  
  return (
    
    <div className='containerLoja'>
      <Navbar/>
      <div className='divMercador'>
        <img className='imgMercador' src="./src/assets/images/mercador.png" alt="Imagem Mercador" />

      </div>
      <div className='divDeck'>

        <div className='divDecks'><img className='imgDecks' src="./src/assets/images/carta 1.png" alt="" /></div>
        <div className='divDecks'><img className='imgDecks' src="./src/assets/images/carta 2.png" alt="" /></div>
        <div className='divDecks'><img className='imgDecks' src="./src/assets/images/carta 3.png"/></div>
        <div className='divDecks'><img className='imgDecks' src="./src/assets/images/carta 4.png"/></div>

      </div>
    </div>
  )
}

export default Loja
