import './Login.css'

function Login() {
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
            <div className='divLogar'>
              
              <div className='textoInicial'>
                <h1 className='titulo'>Bem vindo de volta!</h1>
                <p className='subTitulo'>Estamos felizes em ter você de volta</p>
              </div>

                <div className='divDescricao'>
                    <p className='descricaoInput'>Email*</p>
                    <input type="text" />
                </div>

                <div className='divDescricao'>
                    <p className='descricaoInput'>Senha*</p>
                    <input type="text" />
                </div>

                <a href="./src/pages/Cadastro.jsx">Não tem uma conta?</a>
                <button>Entrar</button>

            </div>
        </div>

    </div>
    )
}

export default Login
