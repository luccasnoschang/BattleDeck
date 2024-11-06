import React from 'react'
import Navbar from '../components/Navbar'
import './Perfil.css'

function Perfil() {
  return (
    <div className='containerPerfil'>
      <Navbar />

      <div className='paginaPerfil'>

        <div className='conteudoPerfil'>


          <img className='imagemLogoPerfil' src="./src/assets/images/LogoShadowDuel.png" alt="" />

          <div className='usernameTexto'>
            <h1 className='TextoNomePerfil'> Username:</h1>
          </div>
          <div className='textoPerfil'>

            <h2 className='TextoMoeda'>Moeda:</h2>
            <h3 className='TextoDecks'>Decks:</h3>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Perfil
