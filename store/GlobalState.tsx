import { createContext, useReducer, useEffect } from 'react'
import { rootReducer } from './reducer';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const initialState = { auth: {} };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}