/* eslint-disable no-useless-concat */
import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  getColorCssFromTheme,
  getSSRId,
  P,
  styled,
  Theme,
} from 'newskit';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';
import dompurify from 'dompurify';
import {themeList, ThemeNames} from './colors-theme-list';
import {
  StyledButtonsContainer,
  StyledSingleSVGDownloadButton,
  StyledSingleSvgWrapper,
  StyledSvgGroupContainer,
  StyledSvgPreviewerContainer,
} from './styled';

export const SvgPreviewer: React.FC = () => {
  const sanitizer = dompurify.sanitize;

  const selectSvgEl = useRef<HTMLSelectElement>(null);

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

  // FUNCTIONS FOR DISPLAYING SVG ** END **

  // ** FUNCTIONS FOR DOWNLOAD HANDLING  ** START **

  const buildComponentName = (svgName: string) =>
    svgName
      .split(' ')
      .map(namePart => namePart[0].toUpperCase() + namePart.substring(1))
      .join('')
      .replace(' ', '');

  const buildSvgFileName = (svgName: string) =>
    svgName.replaceAll(' ', '-').toLowerCase();

  const replaceColorHashWithToken = (svgCode: string) => {
    let svgCodeCopy = svgCode;

    Object.entries(hexesObj).forEach(hex => {
      svgCodeCopy = svgCodeCopy.replaceAll(hex[0].toUpperCase(), hex[1]);
    });

    return svgCodeCopy;
  };

  const replaceFigmaIdWithVariable = (figmaSvg: string) => {
    let figmaSvgCopy = figmaSvg;
    const idTypeList = ['mask', 'filter', 'clip'];
    const escapeRegex = (string: string) =>
      // eslint-disable-next-line no-useless-escape
      string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    idTypeList.forEach(idType => {
      for (let i = 0; figmaSvgCopy.includes(`id="${idType}${i}"`); ++i) {
        figmaSvgCopy = figmaSvgCopy.replace(
          new RegExp(`id="${idType}${i}"`, 'g'),
          `id={${idType}${i}}`,
        );
      }
    });

    for (let i = 0; figmaSvgCopy.includes(`mask="url(#mask${i})"`); ++i) {
      const escapedRegex = escapeRegex(`mask="url(#mask${i})"`);
      figmaSvgCopy = figmaSvgCopy.replace(
        new RegExp(escapedRegex, 'g'),
        'mask={`url(#${mask' + `${i}` + '})`}',
      );
    }

    for (let i = 0; figmaSvgCopy.includes(`clip-path="url(#clip${i})"`); ++i) {
      const escapedRegex = escapeRegex(`clip-path="url(#clip${i})"`);
      figmaSvgCopy = figmaSvgCopy.replace(
        new RegExp(escapedRegex, 'g'),
        'clipPath={`url(#${clip' + `${i}` + '})`}',
      );
    }

    for (let i = 0; figmaSvgCopy.includes(`filter="url(#filter${i})"`); ++i) {
      const escapedRegex = escapeRegex(`filter="url(#filter${i})"`);
      figmaSvgCopy = figmaSvgCopy.replace(
        new RegExp(escapedRegex, 'g'),
        'filter={`url(#${filter' + `${i}` + '})`}',
      );
    }

    return figmaSvgCopy;
  };

  const toReactComponent = (figmaSvg: string) => {
    let figmaSvgCopy = figmaSvg;

    figmaSvgCopy = replaceFigmaIdWithVariable(figmaSvgCopy);
    figmaSvgCopy = figmaSvgCopy
      .replace(/<path/g, '<Path')
      .replace(/<rect/g, '<Rect')
      .replace(/<circle/g, '<Circle')
      .replace(/<ellipse/g, '<Ellipse')
      .replace('<svg', '<Svg')
      .replace('</svg', '</Svg')
      .replace(/color-interpolation-filters/g, 'colorInterpolationFilters')
      .replace(/flood-opacity/g, 'floodOpacity')
      .replace(/"mix-blend-mode:multiply"/g, "{{mixBlendMode: 'multiply'}}")
      .replaceAll(`style="mask-type:alpha"`, `mask-type="alpha"`)
      .replaceAll(`fill-rule`, `fillRule`)
      .replaceAll(`clip-rule`, `clipRule`);

    return figmaSvgCopy;
  };

  const buildImportList = (
    svgReactCode: string,
    fileReactSvgComponent: string,
  ) => {
    let fileImportList = `import React from 'react';
      ${
        fileReactSvgComponent.includes('getSSRId()')
          ? `import {getSSRId} from 'newskit';`
          : ''
      }
      ${svgReactCode.includes('Svg') ? `import {Svg} from '../../svg';` : ''}
      ${svgReactCode.includes('Path') ? `import {Path} from '../../path';` : ''}
      ${svgReactCode.includes('Rect') ? `import {Rect} from '../../rect';` : ''}
      ${
        svgReactCode.includes('Circle')
          ? `import {Circle} from '../../circle';`
          : ''
      }
      ${
        svgReactCode.includes('Ellipse')
          ? `import {Ellipse} from '../../ellipse';`
          : ''
      }
      `;

    // Removing any extra empty lines added from the ternary above but leaving one at the end.
    fileImportList = `${fileImportList.replace(/(^[ \t]*\n)/gm, '')}\n`;
    return fileImportList;
  };

  const buildReactSvgComponent = (
    svgComponentName: string,
    svgReactCode: string,
  ) => {
    const addSSRIdVariables = () => {
      let variables = '';
      const idTypeList = ['mask', 'clip', 'filter'];
      idTypeList.forEach(idType => {
        for (let i = 0; svgReactCode.includes(`${idType}${i}`); ++i) {
          variables += `const ${idType}${i} = getSSRId();\n`;
        }
      });
      return variables;
    };

    const fileReactSvgComponent = `
        export const ${svgComponentName}: React.FC = () => {
        ${addSSRIdVariables()}
        return (
          ${svgReactCode}
        );
      };

      export default ${svgComponentName};`;

    return fileReactSvgComponent;
  };

  const buildAndDownloadSingleSvgFile = () => {
    const selectElementValue = selectSvgEl.current?.value;
    const selectedSvg = selectElementValue
      ? parseInt(selectElementValue, 10)
      : undefined;

    if (selectedSvg !== undefined && baseSvgCodeGroup) {
      let svgReactCode: string;
      svgReactCode = toReactComponent(baseSvgCodeGroup[selectedSvg].figmaSvg);
      svgReactCode = replaceColorHashWithToken(svgReactCode);

      const svgComponentName = buildComponentName(
        baseSvgCodeGroup[selectedSvg].name,
      );

      const fileReactSvgComponent = buildReactSvgComponent(
        svgComponentName,
        svgReactCode,
      );
      const fileImportList = buildImportList(
        svgReactCode,
        fileReactSvgComponent,
      );
      const svgFileName = buildSvgFileName(baseSvgCodeGroup[selectedSvg].name);

      const fileBlob = new Blob([fileImportList + fileReactSvgComponent], {
        type: 'text/plain;charset=utf-8;',
      });
      saveAs(fileBlob, `${svgFileName}.tsx`);
    } else {
      // eslint-disable-next-line no-console
      console.error('Please select an SVG from the dropdown');
    }
  };

  const buildAndDownloadAllSvgFile = () => {
    const zip = new JSZip();

    baseSvgCodeGroup?.forEach(svg => {
      let figmaSvgCopy = svg.figmaSvg;
      figmaSvgCopy = toReactComponent(figmaSvgCopy);
      figmaSvgCopy = replaceColorHashWithToken(figmaSvgCopy);

      const svgComponentName = buildComponentName(svg.name);
      const svgFileName = buildSvgFileName(svg.name);

      const fileReactSvgComponent = buildReactSvgComponent(
        svgComponentName,
        figmaSvgCopy,
      );

      const fileImportList = buildImportList(
        figmaSvgCopy,
        fileReactSvgComponent,
      );

      zip.file(`${svgFileName}.tsx`, fileImportList + fileReactSvgComponent);
    });

    zip.generateAsync({type: 'blob'}).then(content => {
      saveAs(content, 'All_NK_SVGs');
    });
  };

  // Handle single SVGs download
  const handleDownloadButtonClick = () => {
    buildAndDownloadSingleSvgFile();
  };

  // ** FUNCTIONS FOR DOWNLOAD HANDLING  ** END **

  // TODO move SwitchThemeButton in its own file?
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

        <select
          ref={selectSvgEl}
          disabled={!svgCodeGroup}
          style={{height: '26px', fontSize: '16px'}}
        >
          <option>No SVG selected</option>
          {baseSvgCodeGroup &&
            baseSvgCodeGroup.map((svg, index) => (
              <option selected={index === 0} value={`${index}`}>
                {svg.name.replace(' ', '')} SVG
              </option>
            ))}
        </select>

        <StyledSingleSVGDownloadButton
          data-testid="single-svg-button"
          disabled={!svgCodeGroup}
          overrides={{stylePreset: 'buttonSolidPositive'}}
          onClick={handleDownloadButtonClick}
        >
          Download single SVG
        </StyledSingleSVGDownloadButton>

        <Button
          disabled={!svgCodeGroup}
          overrides={{stylePreset: 'buttonSolidPositive'}}
          onClick={buildAndDownloadAllSvgFile}
        >
          DOWNLOAD ALL SVGs
        </Button>
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
