import { data } from "../data/data.jsx";

function Card({ onCardClick }) {
  return (
    <>
      <div className="card-container">{data.map((country) => getCard(country, onCardClick))}</div>
    </>
  );
} 

export const getCountryIndex = (country) => data.indexOf(data.find((item) => item.name.common === country.name.common));

function getCard(country, onCardClick) {
  return (
    <div onClick={() => onCardClick(getCountryIndex(country))} className="card" key={country.cca3}>
      <img src={country.flags.png} alt="flag" />
      <div className="card-info">
        <h2>{country.name.common}</h2>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
