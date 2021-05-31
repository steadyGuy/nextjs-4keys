import { createContext, useReducer, useEffect } from 'react'
import { UserApi } from '../api/UserApi';
import { UPDATE_BALANCE } from './actions';
import { rootReducer } from './reducer';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const initialState = { auth: {}, choosenCase: { price: 0, id: 0 } };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // useEffect(() => {

  // }, [])

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}