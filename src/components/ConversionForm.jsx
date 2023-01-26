import React from "react";
import Swap from "./Swap";
import { useSelector } from "react-redux";
import InputBaseCurrency from "./InputBaseCurrency";
import { InputTargetCurrency } from "./InputTargetCurrency";
import BaseCurrencyDDL from "./BaseCurrencyDDL";
import TargetCurrencyDDL from "./TargetCurrencyDDL";

const ConversionForm = () => {
  const supportedCodes = useSelector(
    (state) => state.currencyState.supportedCodes
  );
  const optionsList = supportedCodes.map((code) => (
    <option
      id={code[0]}
      key={code[0]}
      value={code[0]}
    >{`${code[0]} (${code[1]})`}</option>
  ));

  return (
    <>
      <div className="d-flex justify-content-around align-items-center w-75 my-4">
        <BaseCurrencyDDL>{optionsList}</BaseCurrencyDDL>
        <InputBaseCurrency />
      </div>
      <Swap />
      <div className="d-flex justify-content-around align-items-center w-75 my-4">
        <TargetCurrencyDDL>{optionsList}</TargetCurrencyDDL>
        <InputTargetCurrency />
      </div>
    </>
  );
};

export default ConversionForm;
