import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  supportedCodes: [],
  baseCurrencyCode: "",
  toCurrencyCode: "",
  unitBaseCurrency: "1",
  unitToCurrency: "1",
  conversionRates: {},
  conversionRate: "1",
};

const currencyDataSlice = createSlice({
  name: "currencyData",
  initialState,
  reducers: {
    addSupportedCodes(state, action) {
      state.supportedCodes = action.payload;
      state.baseCurrencyCode = action.payload[0][0];
      state.toCurrencyCode = action.payload[0][0];
    },
    addConversionRates(state, action) {
      state.conversionRates = action.payload;
      state.conversionRate = action.payload[state.toCurrencyCode];
      state.unitToCurrency = (
        state.unitBaseCurrency * action.payload[state.toCurrencyCode]
      ).toFixed(2);
    },
    updateBaseCurrency(state, action) {
      state.baseCurrencyCode = action.payload;
    },
    updateToCurrency(state, action) {
      state.toCurrencyCode = action.payload;
      state.conversionRate = state.conversionRates[action.payload];
      state.unitToCurrency = (
        state.unitBaseCurrency * state.conversionRate
      ).toFixed(2);
    },
    updateUnitBaseCurrency(state, action) {
      state.unitBaseCurrency = action.payload;
      state.unitToCurrency = (action.payload * state.conversionRate).toFixed(2);
    },
  },
});

const store = configureStore({
  reducer: {
    currencyState: currencyDataSlice.reducer,
  },
});

export const currencyActions = currencyDataSlice.actions;

export default store;
