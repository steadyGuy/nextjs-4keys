import React from "react";


type SettingsContextProps = {
  volume: number;
  caseOpeningTime: number;
}


export const SettingsContext = React.createContext<SettingsContextProps>({} as SettingsContextProps);

export const SettingsContextProvider = ({ children }) => {
  return (
    <SettingsContext.Provider value={{
      volume: 0.1,
      caseOpeningTime: 4000,
    }}>
      {children}
    </SettingsContext.Provider>
  )
}