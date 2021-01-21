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
      eventContext={{
        currentThemeMode: themeMode,
      }}
      eventOriginator="theme-switch-button"
      data-testid="theme-switch-button"
      onClick={toggle}
      title={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
      aria-label={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
      aria-pressed={isDark() ? 'true' : 'false'}
      overrides={{
        stylePreset: 'buttonLightDarkToggle',
      }}
    >
      {isDark() ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
