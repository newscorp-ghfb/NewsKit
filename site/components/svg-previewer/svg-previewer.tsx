import React, {useEffect, useState} from 'react';
import {
  getColorCssFromTheme,
  Scroll,
  P,
  ScrollSnapAlignment,
  GridLayout,
} from 'newskit';
import dompurify from 'dompurify';
import {themeList, ThemeNames} from './colors-theme-list';
import {StyledButtonsContainer, StyledSingleSvgWrapper} from './styled';
import {DownloadControls} from './controls/download-controls';
import {ThemeControls} from './controls/theme-controls';

export const SvgPreviewer: React.FC = () => {
  const sanitizer = dompurify.sanitize;

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

  const testSvgCodeIsString = (data: Array<{code: string; name: string}>) => {
    data.forEach(svg => {
      if (typeof svg.code !== 'string') throw new Error();
    });
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
        // figmaSvg = svgIdsShortener(figmaSvg);
        baseFigmaSvg.push({figmaSvg, name: svg.name});

        // Setting ids for "mask", "filter", and "clip" attributes
        // figmaSvg = setIds(figmaSvg);

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
    <GridLayout>
      <StyledButtonsContainer
        rows={{xs: 'sizing080'}}
        alignItems="center"
        justifyContent="sapce-between"
        columns="1fr 1fr"
        overrides={{
          paddingInline: '10%',
          paddingBlock: '8px',
          minWidth: '100%',
        }}
      >
        <GridLayout
          columns="1fr 1fr"
          alignItems="center"
          rows={{xs: 'sizing080'}}
        >
          <ThemeControls
            setSvgCodeGroup={setSvgCodeGroup}
            hexesObj={hexesObj}
            baseSvgCodeGroup={baseSvgCodeGroup}
            svgCodeGroup={svgCodeGroup}
            getThemeFromList={getThemeFromList}
            currentThemeName={currentThemeName}
            setCurrentThemeName={setCurrentThemeName}
          />
        </GridLayout>
        <GridLayout
          columns="1fr 1fr 1fr"
          alignItems="baseline"
          rows={{xs: 'sizing080'}}
        >
          <DownloadControls
            hexesObj={hexesObj}
            baseSvgCodeGroup={baseSvgCodeGroup}
            svgCodeGroup={svgCodeGroup}
          />
        </GridLayout>
      </StyledButtonsContainer>

      {svgCodeGroup && baseSvgCodeGroup && (
        <Scroll
          id="scroll"
          snapAlign="center"
          controls="static"
          stepDistance={window.innerWidth}
        >
          <GridLayout
            autoRows="1fr"
            autoFlow="column dense"
            overrides={{
              marginBlock: '10vh',
              maxHeight: '80vh',
            }}
          >
            {svgCodeGroup.map((svgCode, index) => (
              <ScrollSnapAlignment key={baseSvgCodeGroup[index].name}>
                <StyledSingleSvgWrapper>
                  <P>{baseSvgCodeGroup[index].name}</P>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div dangerouslySetInnerHTML={{__html: sanitizer(svgCode)}} />
                </StyledSingleSvgWrapper>
              </ScrollSnapAlignment>
            ))}
          </GridLayout>
        </Scroll>
      )}
    </GridLayout>
  );
};
