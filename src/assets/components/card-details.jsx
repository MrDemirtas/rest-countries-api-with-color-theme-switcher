import { data } from "../js/data.jsx";

function CardDetails() {
  return (getCardDetails(data))
}

function getCardDetails(item) {
  return (
    <div className="card-details">
      <img src={item.flags.svg} alt={item.name.common} />
      <h1>{item.name.common}</h1>
      <p>Native Name: {item.name.nativeName}</p>
      <p>Population: {item.population}</p>
      <p>Region: {item.region}</p>
      <p>Sub Region: {item.subregion}</p>
      <p>Capital: {item.capital}</p>
      <p>Top Level Domain: {item.tld}</p>
      <p>Currencies: {item.currencies}</p>
      <p>Languages: {item.languages}</p>
      <p>Border Countries: {item.borders}</p>
    </div>
  );
}

export default CardDetails;
