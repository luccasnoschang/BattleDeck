import React from 'react'
import './Caminho.css'

function Caminho() {
  return (
    <div className='containerCaminho'>

        <div className='fundoTitulo'>
            <h1 className='titulo'>Escolha seu caminho</h1>
        </div>  

        <div className='caminhos'>
            
            <img className='cartas' src="./src/assets/images/caminhoCavaleiro.png" alt="" />
            <img className='cartas' src="./src/assets/images/caminhoBruxo.png" alt="" />
            <img className='cartas' src="./src/assets/images/caminhoMago.png" alt="" />
            <img className='cartas' src="./src/assets/images/caminhoDemonio.png" alt="" />

        </div>

        <div className='divBotao'>
            <button className='botaoComecar'>Começar!</button>
        </div>

    </div>
  )
}

export default Caminho
