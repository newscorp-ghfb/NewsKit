import React, {useState} from 'react';
import {getColorCssFromTheme, Theme, Switch, toNewsKitIcon} from 'newskit';
import {DarkMode, LightMode} from '@emotion-icons/material';
import {ThemeControlsProps} from './types';

export const IconFilledDarkMode = toNewsKitIcon(DarkMode);
export const IconFilledLightMode = toNewsKitIcon(LightMode);

export const ThemeControls = ({
  hexesObj,
  getThemeFromList,
  setIds,
  setSvgCodeGroup,
  currentThemeName,
  baseSvgCodeGroup,
}: ThemeControlsProps) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const switchThemeColors = (compiledTheme: Theme) => {
    if (baseSvgCodeGroup && baseSvgCodeGroup.length > 0) {
      const newSvgCodeGroup: Array<string> = [];

      baseSvgCodeGroup.forEach(svg => {
        let svgCopy = svg.figmaSvg;
        // Setting ids for "mask", "filter", and "clip" attributes
        svgCopy = setIds(svgCopy);

        Object.entries(hexesObj).forEach(hex => {
          const docsThemeColorsObj = getColorCssFromTheme(
            '',
            hex[1],
          )({theme: compiledTheme});

          const themeColorValue = Object.values(
            docsThemeColorsObj,
          )[0] as string;

          svgCopy = svgCopy?.replace(
            new RegExp(hex[0], 'gim'),
            themeColorValue,
          );
        });

        newSvgCodeGroup.push(svgCopy);
      });

      // @ts-ignore
      setSvgCodeGroup(newSvgCodeGroup);
    }
  };

  const handleSwitchThemeButtonClick = () => {
    const themeToSwitchTo = getThemeFromList(
      currentThemeName,
      isLightTheme ? 'dark' : 'light',
    );

    switchThemeColors(themeToSwitchTo);

    return setIsLightTheme(!isLightTheme);
  };
  const SwitchThemeButton = () => (
    <Switch
      checked={isLightTheme}
      onClick={handleSwitchThemeButtonClick}
      size="medium"
      overrides={{
        onIcon: IconFilledLightMode,
        offIcon: IconFilledDarkMode,
      }}
      label="Toggle Theme"
      tabIndex={-1}
    />
  );

  return <SwitchThemeButton />;
};
