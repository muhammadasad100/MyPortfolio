// CounterContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { Reducerdata } from "../reducer/reducerdata";
import { Api } from "../Api";

// Create context
const Context = createContext();
const initialState = {
  education: [],
  experience: [],
  skills: [],
  services: [],
  portfolio: [],
};
// Create a provider component
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducerdata, initialState);

  console.log("state.api", state.Api);
  console.log("state.api", state.skills);

  useEffect(() => {
    dispatch({ type: "Api-Data", payload: Api });
  }, []);

  return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
};
const useglobalcontext = () => {
  return useContext(Context);
};

export { Context, Provider, useglobalcontext };
