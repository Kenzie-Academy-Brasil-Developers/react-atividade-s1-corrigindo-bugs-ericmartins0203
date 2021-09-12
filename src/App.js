import CardsList from "./components/cards-list";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [showDeck, setShowDeck] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [deck, setDeck] = useState("");

  const handleDeckRequest = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
      .then((res) => res.json())
      .then((response) => setDeck(response.deck_id))
      .then((res) => console.log(res));
  };

  const handleCardsRequest = (deckid) => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=52`)
      .then((res) => res.json())
      .then((response) => setCardsList(response.cards))
      .then((res) => console.log(res));
  };

  const handleShowDeck = () => {
    setShowDeck(!showDeck);
  };

  useEffect(() => {
    handleDeckRequest();
  }, []);

  useEffect(() => {
    showDeck && handleCardsRequest(deck);
  }, [showDeck]);

  return (
    <div className="main-container">
      <h1 className="main-title">Debugue para ver o baralho</h1>
      <button onClick={() => handleShowDeck()} className="new-deck-button">
        Novo baralho
      </button>
      <CardsList cardsList={cardsList} />
    </div>
  );
};

export default App;
