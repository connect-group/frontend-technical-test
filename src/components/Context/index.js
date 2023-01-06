import React, { useReducer } from 'react';

export const AppContext = React.createContext(null);

const initialState = { modal: { isOpen: false, data: null } };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLEMODAL':
      return { ...state, modal: { ...payload } };
    default:
      return state;
  }
};

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
