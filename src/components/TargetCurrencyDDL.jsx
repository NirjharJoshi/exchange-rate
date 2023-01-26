import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../store";

const TargetCurrencyDDL = (props) => {
  const dispatch = useDispatch();
  const toCurrencyCode = useSelector(
    (state) => state.currencyState.toCurrencyCode
  );

  const handleCurrency = (e) => {
    const selectedToCurrency = [...e.target].find((option) => option.selected);
    dispatch(currencyActions.updateToCurrency(selectedToCurrency.id));
  };

  return (
    <select
      onChange={handleCurrency}
      value={toCurrencyCode}
      id="to"
      className="form-select"
      aria-label="Default select example"
      style={{ margin: "0px 20px", maxWidth: "200px" }}
    >
      {props.children}
    </select>
  );
};

export default TargetCurrencyDDL;
