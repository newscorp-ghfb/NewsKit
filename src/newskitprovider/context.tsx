import React from 'react';

// This provider is internal and is used only to detect when NewskitProvider is used inside NewskitProvider
// On the very first Provider we set value of {initialized: true} based on that we know if NewskitProvider is already used
export const NewskitInternalContext = React.createContext({});

export const useNewskitContext = () => React.useContext(NewskitInternalContext);
