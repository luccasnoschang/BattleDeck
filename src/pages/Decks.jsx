import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Decks.css';

function Decks() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cards, setCards] = useState([]);

  const decks = {
    Bruxo: ['Carta 1', 'Carta 2', 'Carta 3'],
    Demonio: ['Carta 4', 'Carta 5', 'Carta 6', 'Carta 7'],
    Mago: ['Carta 8', 'Carta 9'],
    Cavaleiro: ['Carta 10', 'Carta 11', 'Carta 12', 'Carta 13']
  };

  const handleDeckClick = (deck) => {
    setSelectedDeck(deck);
    setCards(decks[deck] || []);
  };

  return (
    <div className="containerDecks">
      <Navbar />

      <div className="principal">
        {/* Div à esquerda para os decks */}
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
          <img
            onClick={() => handleDeckClick('Cavaleiro')}
            className="DeckCartas"
            src="./src/assets/images/DeckCavaleiro.png"
            alt="Deck Cavaleiro"
          />
        </div>

        {/* Div à direita para exibir as cartas do deck selecionado */}
        <div className="aparicaoCartas">
          <h2>{selectedDeck ? `Cartas do Deck: ${selectedDeck}` : 'Selecione um Deck'}</h2>
          <div className="cardsContainer">
            {cards.map((card, index) => (
              <div key={index} className="card">
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decks;
