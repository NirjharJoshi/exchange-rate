import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../store";

const Swap = () => {
  const dispatch = useDispatch();
  const baseCurrencyCode = useSelector(
    (state) => state.currencyState.baseCurrencyCode
  );
  const toCurrencyCode = useSelector(
    (state) => state.currencyState.toCurrencyCode
  );
  const conversionRate = useSelector(
    (state) => state.currencyState.conversionRate
  );

  const handleSwap = () => {
    dispatch(currencyActions.updateBaseCurrency(toCurrencyCode));
    dispatch(currencyActions.updateToCurrency(baseCurrencyCode));
  };
  return (
    <div className="d-flex justify-content-around align-items-center w-100 my-2">
      <button onClick={handleSwap} className="btn btn-primary">
        SWAP
      </button>
      <h6 className="text-primary">
        1 {baseCurrencyCode} = {conversionRate} {toCurrencyCode}
      </h6>
    </div>
  );
};

export default Swap;
