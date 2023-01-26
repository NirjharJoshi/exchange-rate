import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyActions } from "../store";

const InputBaseCurrency = () => {
  const dispatch = useDispatch();
  const unitBaseCurrency = useSelector(
    (state) => state.currencyState.unitBaseCurrency
  );

  const handleInputChange = (e) => {
    dispatch(currencyActions.updateUnitBaseCurrency(e.target.value));
  };

  return (
    <input
      onChange={handleInputChange}
      className="form-control"
      type="number"
      value={unitBaseCurrency}
      style={{ margin: "0px 25px", maxWidth: "200px" }}
    />
  );
};

export default InputBaseCurrency;
