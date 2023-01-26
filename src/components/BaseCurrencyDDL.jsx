import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../store";

const BaseCurrencyDDL = (props) => {
  const dispatch = useDispatch();
  const baseCurrencyCode = useSelector(
    (state) => state.currencyState.baseCurrencyCode
  );

  useEffect(() => {
    if (baseCurrencyCode === "") return;
    console.log(
      `FOR_CURRENCY: ${baseCurrencyCode} CONVERSION_RATES_ARE_FETCHED`
    );
    fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/${baseCurrencyCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(currencyActions.addConversionRates(data.conversion_rates));
      });
  }, [baseCurrencyCode, dispatch]);

  const handleCurrency = (e) => {
    const selectedBaseCurrency = [...e.target].find(
      (option) => option.selected
    );
    dispatch(currencyActions.updateBaseCurrency(selectedBaseCurrency.id));
  };

  return (
    <select
      value={baseCurrencyCode}
      onChange={handleCurrency}
      id="base"
      className="form-select"
      aria-label="Default select example"
      style={{ margin: "0px 50px" }}
    >
      {props.children}
    </select>
  );
};

export default BaseCurrencyDDL;
