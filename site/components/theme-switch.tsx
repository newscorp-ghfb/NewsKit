import * as React from 'react';
import {IconButton} from 'newskit';
import {SunIcon, MoonIcon} from './icons';

interface ThemeSwitchProps {
  toggle: () => void;
  themeMode: string;
}
export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  toggle,
  themeMode,
}) => {
  const isDark = () => themeMode === 'dark';

  return (
    <IconButton
      data-testid="theme-switch-button"
      onClick={toggle}
      title={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
      aria-label={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
      aria-pressed={isDark() ? 'true' : 'false'}
      stylePreset="buttonLightDarkToggle"
    >
      {isDark() ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
