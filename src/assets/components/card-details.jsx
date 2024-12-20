import { data } from "../data/data.jsx";
import { getCountryIndex } from "./card.jsx";

function CardDetails({ countryIndex = 43, backToCard, onClickBorderCountry }) {
  return <GetCardDetails country={data[countryIndex]} backToCard={backToCard} onClickBorderCountry={onClickBorderCountry} />;
}

function GetCardDetails({ country, backToCard, onClickBorderCountry }) {
  return (
    <>
      <button onClick={backToCard} className="white-btn back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#111517">
          <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
        </svg>
        Back
      </button>
      <div className="card-details">
        <img src={country.flags.svg} alt={country.name.common} />
        <div className="card-details-info">
          <h1>{country.name.common}</h1>
          <main>
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
              <p>
                <strong>Sub Region:</strong> {country.subregion ? country.subregion : "-"}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital.join(", ")}
              </p>
            </div>

            <div className="card-details-second-info">
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
          </main>
          <p className="border-countries-p">
            <strong>Border Countries:</strong> <BorderCountries borders={country.borders} onClickBorderCountry={onClickBorderCountry} />
          </p>
        </div>
      </div>
    </>
  );
}

function BorderCountries({ borders, onClickBorderCountry }) {
  return borders
    ? borders.map((x) => {
        const countryData = data.find((y) => y.cca3 === x);
        return (
          <button onClick={() => onClickBorderCountry(getCountryIndex(countryData))} className="white-btn" key={x}>
            {countryData.name.common}
          </button>
        );
      })
    : "-";
}

export default CardDetails;
