import React from "react";
import CurrencySelection from "./CurrencySelection";
import Swap from "./Swap";

const ConversionForm = () => {
  return (
    <>
      <CurrencySelection />
      <Swap />
      <CurrencySelection />
    </>
  );
};

export default ConversionForm;
