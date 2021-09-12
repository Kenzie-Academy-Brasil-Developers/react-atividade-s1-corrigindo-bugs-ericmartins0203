import { useState } from "react";
import Card from "./../card";
import "./style.css";

function CardsList({ cardsList }) {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    console.log(e.target.id);
    if (e.target.id === suitFilter) {
      setSuitFilter(false);
      e.target.checked = false;
    } else {
      setSuitFilter(e.target.id);
    }
  };
  console.log(cardsList, "cardsList", suitFilter);
  return (
    <>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={(e) => handleSuitFilter(e)}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label for="SPADES">Espadas</label>

          <input
            onClick={(e) => handleSuitFilter(e)}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label for="HEARTS">Copas</label>

          <input
            onClick={(e) => handleSuitFilter(e)}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label for="CLUBS">Paus</label>

          <input
            onClick={(e) => handleSuitFilter(e)}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label for="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div>
        {!suitFilter &&
          cardsList.map((actual, index) => {
            return <Card card={actual} key={index} />;
          })}

        {suitFilter &&
          cardsList
            .filter((actual) => actual.suit === suitFilter)
            .map((actual, index) => {
              return <Card card={actual} key={index} />;
            })}
      </div>
    </>
  );
}

export default CardsList;
