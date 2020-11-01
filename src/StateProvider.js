import React, { createContext, useContext, useReducer } from "react";

//prepare the dataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the information from dataLayer

export const useStatevalue = () => useContext(StateContext);
