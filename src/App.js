import ConversionForm from "./components/ConversionForm";

function App() {
  return (
    <div
      className="d-flex flex-column align-items-center mx-auto mt-5"
      style={{ width: "500px", height: "600px" }}
    >
      <i
        className="fa-solid fa-indian-rupee-sign text-primary mt-3"
        style={{ fontSize: "80px" }}
      ></i>
      <h2 className="text-primary fw-bold mt-5">Exchange Rate Calculator</h2>
      <p className="text-dark mt-2">
        Choose the currency and the amounts to get the exchange rate
      </p>
      <div className="d-flex flex-column align-items-center mt-5 w-100">
        <ConversionForm />
      </div>
    </div>
  );
}

export default App;
