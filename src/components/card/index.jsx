import "./style.css";

const Card = ({ card }, { key }) => {
  return <img key={key} src={card.image} alt={card.code} className="card" />;
};

export default Card;
