import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Loja.css';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';

// Definir o modal root para react-modal
Modal.setAppElement('#root');

function Loja() {
  const [isOpen, setIsOpen] = useState(false);

  // Animação de slide usando react-spring
  const slideIn = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="containerLoja">
      <Navbar />

      <div className="divMercador">
        <img className="imgMercador" src="./src/assets/images/mercador.png" alt="Imagem Mercador" />
      </div>

      <div className="divDeck">
        <div className="divDecks">
          <img onClick={toggleModal} className="imgDecks" src="./src/assets/images/carta 1.png" alt="Carta 1" />
        </div>
        <div className="divDecks">
          <img onClick={toggleModal} className="imgDecks" src="./src/assets/images/carta 2.png" alt="Carta 2" />
        </div>
        <div className="divDecks">
          <img onClick={toggleModal} className="imgDecks" src="./src/assets/images/carta 3.png" alt="Carta 3" />
        </div>
        <div className="divDecks">
          <img onClick={toggleModal} className="imgDecks" src="./src/assets/images/carta 4.png" alt="Carta 4" />
        </div>

  
      </div>

      {/* Modal de slide */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            padding: 0,
            width: '400px',
            height: '200px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {/* Caixa do modal com animação de slide */}
        <animated.div style={slideIn} className="slide-dialog">
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              height: '100%',
              overflowY: 'auto',
            }}
          >
            <h2>Este é o seu Slide Dialog</h2>
            <p>O conteúdo do seu modal vai aqui.</p>
            <button onClick={toggleModal}>Fechar</button>
          </div>
        </animated.div>
      </Modal>
    </div>
  );
}

export default Loja;


