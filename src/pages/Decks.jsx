import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Decks.css';

function Decks() {
  // Estados para guardar o deck selecionado e o número de cartas
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cardsCount, setCardsCount] = useState(0);

  // Função de clique para atualizar o estado com o deck e número de cartas
  const handleDeckClick = (deck) => {
    setSelectedDeck(deck);

    // Quantidade de cartas fictícia para cada deck
    const count = deck === 'Bruxo' ? 10 : deck === 'Demonio' ? 15 : 20;
    setCardsCount(count);
  };

  return (
    <div className="containerDecks">
      <Navbar />

      <div className="principal">
        <div className="decks">
          <img
            onClick={() => handleDeckClick('Bruxo')}
            className="DeckCartas"
            src="./src/assets/images/DeckBruxo.png"
            alt="Deck Bruxo"
          />
          <img
            onClick={() => handleDeckClick('Demonio')}
            className="DeckCartas"
            src="./src/assets/images/DeckDemonio.png"
            alt="Deck Demonio"
          />
          <img
            onClick={() => handleDeckClick('Mago')}
            className="DeckCartas"
            src="./src/assets/images/DeckMago.png"
            alt="Deck Mago"
          />

          <div className="cartasTotais">
            {selectedDeck && (
              <p>
                Deck Selecionado: {selectedDeck} - Cartas Totais: {cardsCount}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decks;
