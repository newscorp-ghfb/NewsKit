import * as React from 'react';

export const ThemeModeContext = React.createContext('light');
export const useThemeMode = () => React.useContext(ThemeModeContext);
