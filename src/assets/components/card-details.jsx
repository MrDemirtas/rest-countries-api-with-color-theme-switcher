import { data } from "../data/data.jsx";
import backImg from "../img/back.svg";

function CardDetails({ country = 43 }) {
  return <GetCardDetails country={data[country]} />;
}

function GetCardDetails({ country }) {
  return (
    <div className="card-details">
      <button className="white-btn back-btn">
        <img src={backImg} alt="back" /> Back
      </button>
      <img src={country.flags.svg} alt={country.name.common} />
      <h1>{country.name.common}</h1>
      <div className="card-details-first-info">
        <p>
          <strong>Native Name:</strong> {country.name.official}
        </p>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
      </div>

      <div className="card-details-second-info">
        <p>
          <strong>Sub Region:</strong> {country.subregion ? country.subregion : "-"}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Top Level Domain:</strong> {country.tld}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {Object.values(country.currencies)
            .map((x) => x.name)
            .join(", ")}
        </p>
        <p>
          <strong>Languages:</strong> {Object.values(country.languages).join(", ")}
        </p>
      </div>
      <p className="border-countries-p">
        <strong>Border Countries:</strong> <BorderCountries borders={country.borders} />
      </p>
    </div>
  );
}

function BorderCountries({ borders }) {
  return borders
    ? borders.map((x) => (
        <button onClick={() => setCountry(data.find((y) => y.cca3 === x))} className="white-btn" key={x}>
          {data.find((y) => y.cca3 === x).name.common}
        </button>
      ))
    : "-";
}

export default CardDetails;
