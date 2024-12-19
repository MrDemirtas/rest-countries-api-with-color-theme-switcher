import Header from "./assets/components/header.jsx";
import Input from "./assets/components/input.jsx";
// import Card from "./assets/components/card.jsx";
import CardDetails from "./assets/components/card-details.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Input />
        <CardDetails />
      </div>
    </>
  );
}

export default App;
