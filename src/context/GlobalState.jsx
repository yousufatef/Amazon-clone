/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./AppReducer";

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ user: state.user, cart: state.cart, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

//custom hook provide data form context api
export const useAuth = () => {
  return useContext(GlobalContext);
};