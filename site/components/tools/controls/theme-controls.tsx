import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, getColorCssFromTheme, styled, Theme} from 'newskit';
import {themeList, ThemeNames} from '../colors-theme-list';

interface ThemeControlsProps {
  hexesObj: object;
  getThemeFromList: (themeName: ThemeNames, version: 'light' | 'dark') => Theme;
  setIds: (figmaSvg: string) => string;
  svgCodeGroup?: [string];
  setSvgCodeGroup: Dispatch<SetStateAction<[string] | undefined>>;
  baseSvgCodeGroup?: [{figmaSvg: string; name: string}];
  currentThemeName: ThemeNames;
  setCurrentThemeName: Dispatch<SetStateAction<ThemeNames>>;
}
export const ThemeControls = ({
  hexesObj,
  getThemeFromList,
  setIds,
  svgCodeGroup,
  setSvgCodeGroup,
  currentThemeName,
  baseSvgCodeGroup,
  setCurrentThemeName,
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
  const handleThemeSelection = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newSelectedThemeName = event.target.value as ThemeNames;
    const newSelectedTheme = getThemeFromList(newSelectedThemeName, 'light');

    switchThemeColors(newSelectedTheme);
    setIsLightTheme(true);
    // Used later for other features such as the SwitchThemeButton
    setCurrentThemeName(newSelectedThemeName);
  };
  const SwitchThemeButton = () => {
    const StyledSwitchThemeButton = styled(Button)`
      margin: 50px 20px 30px 20px;
    `;
    return (
      <StyledSwitchThemeButton
        disabled={!svgCodeGroup}
        onClick={handleSwitchThemeButtonClick}
      >
        SWITCH THEME: {isLightTheme ? 'LIGHT' : 'DARK'}
      </StyledSwitchThemeButton>
    );
  };

  return (
    <>
      <select
        data-testid="select-theme-element"
        onChange={handleThemeSelection}
        disabled={!svgCodeGroup}
        style={{height: '26px', fontSize: '16px'}}
      >
        {themeList.map(theme => (
          <option selected={theme.name === currentThemeName} value={theme.name}>
            {theme.name}
          </option>
        ))}
      </select>

      <SwitchThemeButton />
    </>
  );
};
