import React from "react";
import { useSelector } from "react-redux";

export const InputTargetCurrency = () => {
  const unitToCurrency = useSelector(
    (state) => state.currencyState.unitToCurrency
  );

  return (
    <input
      readOnly
      className="form-control"
      type="number"
      value={unitToCurrency}
      style={{ margin: "0px 25px", maxWidth: "200px" }}
    />
  );
};
