import React from "react";

const CurrencySelection = () => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 my-4">
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ margin: "0px 50px" }}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input
        type="number"
        value={1}
        className="form-control"
        style={{ margin: "0px 100px" }}
      />
    </div>
  );
};

export default CurrencySelection;
