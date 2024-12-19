import moon from "../img/moon.svg";

function Header() {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button>
        <img src={moon} alt="moon" />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
