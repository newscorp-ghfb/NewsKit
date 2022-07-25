import React from 'react';

// This provider is internal and is used only to detect when NewsKitProvider is used inside NewsKitProvider
// On the very first Provider we set value of {initialized: true} based on that we know if NewsKitProvider is already used
export const NewsKitInternalContext = React.createContext({});

export const useNewsKitContext = () => React.useContext(NewsKitInternalContext);
