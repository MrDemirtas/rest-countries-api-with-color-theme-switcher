import search from "../img/search.svg";

function Input() {
  return (
    <>
      <div className="input-container">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className="select-container">
        <select className="region">
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
}

export default Input;
