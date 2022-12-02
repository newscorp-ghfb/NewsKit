import React, {useEffect, useState} from 'react';
import {getColorCssFromTheme, getSSRId, P} from 'newskit';
import dompurify from 'isomorphic-dompurify';
import {themeList, ThemeNames} from './colors-theme-list';
import {
  StyledButtonsContainer,
  StyledSingleSvgWrapper,
  StyledSvgGroupContainer,
  StyledSvgPreviewerContainer,
} from './styled';
import {DownloadControls} from './controls/download-controls';
import {ThemeControls} from './controls/theme-controls';

export const SvgPreviewer: React.FC = () => {
  const {sanitize} = dompurify;

  // The name of the theme being currently used, the initial value will decide the default theme.
  const [currentThemeName, setCurrentThemeName] = useState<ThemeNames>(
    'Docs Theme',
  );

  // SVG coming from Figma - used as a base for some mutations.
  const [baseSvgCodeGroup, setBaseSvgCodeGroup] = useState<
    [{figmaSvg: string; name: string}]
  >();

  // SVGs to be displayed in the page
  const [svgCodeGroup, setSvgCodeGroup] = useState<[string]>();

  // Hexes obj sent by figma, used for switch theme logic.
  const [hexesObj, setHexesObj] = useState<Object>({});

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
      /filter\d+_d_\d+_\d+/g,
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

    return () => {
      window.removeEventListener('message', onmessage);
    };
  }, [onmessage]);

  return (
    <StyledSvgPreviewerContainer>
      <StyledButtonsContainer>
        <ThemeControls
          setSvgCodeGroup={setSvgCodeGroup}
          hexesObj={hexesObj}
          baseSvgCodeGroup={baseSvgCodeGroup}
          svgCodeGroup={svgCodeGroup}
          getThemeFromList={getThemeFromList}
          setIds={setIds}
          currentThemeName={currentThemeName}
          setCurrentThemeName={setCurrentThemeName}
        />

        <DownloadControls
          hexesObj={hexesObj}
          baseSvgCodeGroup={baseSvgCodeGroup}
          svgCodeGroup={svgCodeGroup}
        />
      </StyledButtonsContainer>

      {svgCodeGroup && baseSvgCodeGroup && (
        <StyledSvgGroupContainer>
          {svgCodeGroup.map((svgCode, index) => (
            <StyledSingleSvgWrapper key={baseSvgCodeGroup[index].name}>
              <P>{baseSvgCodeGroup[index].name}</P>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{__html: sanitize(svgCode)}} />
            </StyledSingleSvgWrapper>
          ))}
        </StyledSvgGroupContainer>
      )}
    </StyledSvgPreviewerContainer>
  );
};
