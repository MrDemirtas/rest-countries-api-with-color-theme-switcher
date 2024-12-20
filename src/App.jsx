import Header from "./assets/components/header.jsx";
import Input from "./assets/components/input.jsx";
import Card from "./assets/components/card.jsx";
import CardDetails from "./assets/components/card-details.jsx";
import { useState } from "react";

function App() {
  localStorage.getItem("theme") === "dark" && document.body.classList.add("dark");
  
  const [cardDetails, setCardDetails] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);

  const showCardDetails = (index) => {
    setCardDetails(true);
    setCountryIndex(index);
  };

  const backToCard = () => {
    setCardDetails(false);
  };

  const onClickBorderCountry = (index) => {
    setCardDetails(true);
    setCountryIndex(index);
  };

  return (
    <>
      <Header />
      <div className="container">
        {cardDetails ? (
          <CardDetails countryIndex={countryIndex} backToCard={backToCard} onClickBorderCountry={onClickBorderCountry} />
        ) : (
          <>
            <Input />
            <Card onCardClick={showCardDetails} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
