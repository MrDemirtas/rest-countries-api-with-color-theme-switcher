import { data } from "../data/data.jsx";

function Card() {
  return (
    <>
      <div className="card-container">
        {data.map((item) => getCard(item))}
      </div>
    </>
  );
}

function getCard(props) {
  return (
    <div className="card" key={props.name.common}>
      <img src={props.flags.png} alt="flag" />
      <div className="card-info">
        <h2>{props.name.common}</h2>
        <p><strong>Population: </strong>{props.population}</p>
        <p><strong>Region: </strong>{props.region}</p>
        <p><strong>Capital: </strong>{props.capital}</p>
      </div>
    </div>
  );
}

export default Card;