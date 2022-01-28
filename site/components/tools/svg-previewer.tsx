import React, {useEffect, useState} from 'react';
import {
  Button,
  getColorCssFromTheme,
  getSSRId,
  P,
  styled,
  Theme,
} from 'newskit';
import dompurify from 'dompurify';
import {themeList, ThemeNames} from './colors-theme-list';
import {
  StyledButtonsContainer,
  StyledSingleSvgWrapper,
  StyledSvgGroupContainer,
  StyledSvgPreviewerContainer,
} from './styled';
import {DownloadControls} from './controls/download-controls';

export const SvgPreviewer: React.FC = () => {
  const sanitizer = dompurify.sanitize;

  // The name of the theme being currently used, the initial value will decide the default theme.
  const [currentThemeName, setCurrentThemeName] = useState<ThemeNames>(
    'Docs Theme',
  );

  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  // SVG coming from Figma - used as a base for some mutations.
  const [baseSvgCodeGroup, setBaseSvgCodeGroup] = useState<
    [{figmaSvg: string; name: string}]
  >();

  // SVGs to be displayed in the page
  const [svgCodeGroup, setSvgCodeGroup] = useState<[string]>();

  // Hexes obj sent by figma, used for switch theme logic.
  const [hexesObj, setHexesObj] = useState<Object>({});

  // FUNCTIONS FOR DISPLAYING SVG ** START **

  const setIds = (figmaSvg: string) => {
    const regexList = [/mask\d{1,}/g, /filter\d{1,}/g, /clip\d{1,}/g];
    let figmaSvgCopy = figmaSvg;

    regexList.forEach(regex => {
      const matchList = figmaSvgCopy.match(regex);

      matchList?.forEach(match => {
        figmaSvgCopy = figmaSvgCopy.replace(
          new RegExp(match, 'g'),
          `${getSSRId()}`,
        );
      });
    });
    return figmaSvgCopy;
  };

  const testSvgCodeIsString = (data: Array<{code: string; name: string}>) => {
    data.forEach(svg => {
      if (typeof svg.code !== 'string') throw new Error();
    });
  };

  // This function simplify the IDs set by figma for clips, filters and masks.
  // It makes simpler the SVG manipulation especially when building the react component.
  // ** To be removed if Figma brings back short IDs (E.G: clip0 than clip0_12:1464). **
  const svgIdsShortener = (figmaSvg: string) => {
    let figmaSvgCopy = figmaSvg;
    const regexList = [
      /mask\d+_\d+_\d+/g,
      /filter\d+_df_\d+_\d+/g,
      /clip\d+_\d+_\d+/g,
    ];

    regexList.forEach(regex => {
      const matchList = figmaSvg.match(regex);

      matchList?.forEach(match => {
        const firstUnderscoreIndex = match.indexOf('_');

        figmaSvgCopy = figmaSvgCopy.replace(
          new RegExp(match, 'g'),
          match.substring(0, firstUnderscoreIndex),
        );
      });
    });
    return figmaSvgCopy;
  };

  const getThemeFromList = (
    themeName: ThemeNames,
    version: 'light' | 'dark',
  ) => {
    const newTheme = themeList.filter(theme => theme.name === themeName);

    if (version === 'light') {
      return newTheme[0].defaultLight;
    }
    return newTheme[0].dark;
  };

  const onmessage = (event: MessageEvent) => {
    if (event.data.pluginMessage?.action === 'FilesToUI') {
      testSvgCodeIsString(event.data.pluginMessage.data.svgdata);

      // Left console logs as can be useful for debugging SVG issues without
      // using the local version.
      // eslint-disable-next-line no-console
      console.log(event.data.pluginMessage.data.hexes, 'Hexes');
      // eslint-disable-next-line no-console
      console.log(event.data.pluginMessage.data, 'SVG data');

      setHexesObj(event.data.pluginMessage.data.hexes);

      const baseFigmaSvg: Array<{figmaSvg: string; name: string}> = [];
      // @ts-ignore
      const content = event.data.pluginMessage.data.svgdata.map(svg => {
        let figmaSvg: string = svg.code;
        figmaSvg = svgIdsShortener(figmaSvg);
        baseFigmaSvg.push({figmaSvg, name: svg.name});

        // Setting ids for "mask", "filter", and "clip" attributes
        figmaSvg = setIds(figmaSvg);

        // ** REPLACING RANDOM FIGMA COLORS
        Object.entries(event.data.pluginMessage.data.hexes).forEach(hex => {
          const colorToken = hex[1];
          const figmaRandomColour = hex[0];
          const defaultTheme = getThemeFromList(currentThemeName, 'light')!;

          const {lightThemeColorValue} = getColorCssFromTheme(
            'lightThemeColorValue',
            colorToken as string,
          )({theme: defaultTheme}) as {
            lightThemeColorValue: string;
          };

          // Replace hardcoded figma #colour with light theme token value
          figmaSvg = figmaSvg?.replace(
            new RegExp(figmaRandomColour, 'gim'),
            lightThemeColorValue,
          );
        });
        //  **

        return figmaSvg;
      });

      // @ts-ignore
      setBaseSvgCodeGroup(baseFigmaSvg);
      setSvgCodeGroup(content);
    }
  };

  useEffect(() => {
    window.addEventListener('message', onmessage);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

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

  const handleSwitchThemeButtonClick = () => {
    const themeToSwitchTo = getThemeFromList(
      currentThemeName,
      isLightTheme ? 'dark' : 'light',
    );

    switchThemeColors(themeToSwitchTo);

    return setIsLightTheme(!isLightTheme);
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
    <StyledSvgPreviewerContainer>
      <StyledButtonsContainer>
        <select
          data-testid="select-theme-element"
          onChange={handleThemeSelection}
          disabled={!svgCodeGroup}
          style={{height: '26px', fontSize: '16px'}}
        >
          {themeList.map(theme => (
            <option
              selected={theme.name === currentThemeName}
              value={theme.name}
            >
              {theme.name}
            </option>
          ))}
        </select>

        <SwitchThemeButton />

        <DownloadControls
          hexesObj={hexesObj}
          baseSvgCodeGroup={baseSvgCodeGroup}
          svgCodeGroup={svgCodeGroup}
        />
      </StyledButtonsContainer>

      {svgCodeGroup && baseSvgCodeGroup && (
        <StyledSvgGroupContainer>
          {svgCodeGroup.map((svgCode, index) => (
            <StyledSingleSvgWrapper>
              <P>{baseSvgCodeGroup[index].name}</P>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{__html: sanitizer(svgCode)}} />
            </StyledSingleSvgWrapper>
          ))}
        </StyledSvgGroupContainer>
      )}
    </StyledSvgPreviewerContainer>
  );
};
