import React from 'react'
import "./Cadastro.css"

function Cadastro() {
    return (
        <div className='container'>
            {/* <img className='imgFundo' src="./src/assets/images/imgCadastro.png" alt="" /> */}

            <div className='parteCima'>

                <div className='divLogo'>
                    <img className='Logo' src="./src/assets/images/LogoShadowDuel.png" alt="" />
                    <img className='shadowDuel' src="./src/assets/images/shadowDuel.png" alt="" />
                </div>
            </div>

            <div className='parteBaixo'>
                <div className='divCadastrar'>
                  
                  <div className='textoInicial'>
                    <h1 className='titulo'>Crie a sua conta</h1>
                    <p className='subTitulo'>Por favor, preencha seus dados para criar uma conta</p>
                  </div>

                    <div className='divDescricao'>
                        <p className='descricaoInput'>Seu apelido*</p>
                        <input type="text" />
                    </div>

                    <div className='divDescricao'>
                        <p className='descricaoInput'>Email*</p>
                        <input type="text" />
                    </div>

                    <div className='divDescricao'>
                        <p className='descricaoInput'>Senha*</p>
                        <input type="text" />
                    </div>

                    <a href="">Já tem uma conta?</a>
                    <button>Criar Conta</button>

                </div>
            </div>

        </div>
    )
}

export default Cadastro
