import React from 'react'
import Navbar from '../components/Navbar'
import './Batalhas.css'

function Batalhas() {
  return (
    <div className='containerBattles'>
      <Navbar />

      <div className='divMapa'>

        <img className='mapa' src="./src/assets/images/mapaBatalhas.png" alt="" />

      </div>

    </div>
  )
}

export default Batalhas
