import * as React from 'react';
import {ButtonSize, IconButton} from 'newskit';
import {IconFilledLight, IconFilledDark} from './icons';

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
      size={ButtonSize.Medium}
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
      {isDark() ? (
        <IconFilledLight overrides={{size: 'iconSize010'}} />
      ) : (
        <IconFilledDark overrides={{size: 'iconSize010'}} />
      )}
    </IconButton>
  );
};
