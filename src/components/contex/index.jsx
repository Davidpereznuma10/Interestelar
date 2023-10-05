import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const prueba = 'logica de componentes';

  const obj = {
    prueba
  };

  return (
    <Context.Provider value={obj}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
