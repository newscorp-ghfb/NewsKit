/* eslint-disable no-template-curly-in-string */
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
import {
  compiledDocsThemeLightColors,
  compiledDocsThemeDarkColors,
} from './colors-docs-theme';

export const SvgPreviewer: React.FC = () => {
  const sanitizer = dompurify.sanitize;

  const selectSvgEl = useRef<HTMLSelectElement>(null);

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
    const regexList = [/mask\d{1,}/g, /filter\d{1,}_d/g, /clip\d{1,}/g];
    let figmaSvgCopy = figmaSvg;

    regexList.forEach(regex => {
      const matchList = figmaSvgCopy.match(regex);
      // eslint-disable-next-line no-unused-expressions
      matchList?.forEach(match => {
        figmaSvgCopy = figmaSvgCopy.replace(
          new RegExp(match, 'g'),
          `${getSSRId()}`,
        );
      });
    });

    return figmaSvgCopy;
  };

  const testUint8Data = (data: Array<{code: Array<number>; name: string}>) => {
    let filtered = [];

    data.forEach(svg => {
      filtered = svg.code.filter((number: number) => {
        if (typeof number !== 'number') throw Error;
        return number < 0 || number > 255;
      });

      if (filtered.length > 0) throw Error;
    });
  };

  const onmessage = (event: MessageEvent) => {
    if (event.data.pluginMessage?.action === 'FilesToUI') {
      testUint8Data(event.data.pluginMessage.data.svgdata);
      // Left as can be useful for debugging SVG issues without
      // using the local version.
      console.log(event.data.pluginMessage.data.hexes, 'hexes');

      setHexesObj(event.data.pluginMessage.data.hexes);

      const baseFigmaSvg: Array<{figmaSvg: string; name: string}> = [];
      // @ts-ignore
      const content = event.data.pluginMessage.data.svgdata.map(svg => {
        let figmaSvg: string = String.fromCharCode.apply(null, svg.code);
        baseFigmaSvg.push({figmaSvg, name: svg.name});

        // Setting ids for "mask", "filter", and "clip" attributes
        figmaSvg = setIds(figmaSvg);

        // ** REPLACING RANDOM FIGMA COLORS
        Object.entries(event.data.pluginMessage.data.hexes).forEach(hex => {
          const colorToken = hex[1];
          const figmaRandomColour = hex[0];

          const {lightThemeColorValue} = getColorCssFromTheme(
            'lightThemeColorValue',
            colorToken as string,
          )({theme: compiledDocsThemeLightColors}) as {
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

  const handleSwitchThemeButtonClick = () => {
    switchThemeColors(
      isLightTheme ? compiledDocsThemeDarkColors : compiledDocsThemeLightColors,
    );
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
    svgName.replace(' ', '-').toLowerCase();

  const replaceColorHashWithToken = (svgCode: string) => {
    let svgCodeCopy = svgCode;

    Object.entries(hexesObj).forEach(hex => {
      svgCodeCopy = svgCodeCopy.replaceAll(hex[0].toUpperCase(), hex[1]);
    });

    return svgCodeCopy;
  };

  const toReactComponent = (figmaSvg: string) => {
    let figmaSvgCopy = figmaSvg;
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
      .replace(`id="mask0"`, 'id={mask0}')
      .replace(`id="mask1"`, 'id={mask1}')
      .replace(`id="mask2"`, 'id={mask2}')
      .replace(`id="mask3"`, 'id={mask3}')
      .replace(`mask="url(#mask0)"`, 'mask={`url(#${mask0})`}')
      .replace(`mask="url(#mask1)"`, 'mask={`url(#${mask1})`}')
      .replace(`mask="url(#mask2)"`, 'mask={`url(#${mask2})`}')
      .replace(`mask="url(#mask3)"`, 'mask={`url(#${mask3})`}')
      .replace(`id="clip0"`, 'id={clip0}')
      .replace(`id="clip1"`, 'id={clip1}')
      .replace(`id="clip2"`, 'id={clip2}')
      .replace(`id="clip3"`, 'id={clip3}')
      .replace(`id="clip4"`, 'id={clip4}')
      .replace(`id="clip5"`, 'id={clip5}')
      .replace(`clipPath="url(#clip0)"`, 'clipPath={`url(#${clip0})`}>')
      .replace(`clipPath="url(#clip1)"`, 'clipPath={`url(#${clip1})`}>')
      .replace(`clipPath="url(#clip2)"`, 'clipPath={`url(#${clip2})`}>')
      .replace(`clipPath="url(#clip3)"`, 'clipPath={`url(#${clip3})`}>')
      .replace(`clipPath="url(#clip4)"`, 'clipPath={`url(#${clip4})`}>')
      .replace(`clipPath="url(#clip5)"`, 'clipPath={`url(#${clip5})`}>')
      .replace(`clip-path="url(#clip0)"`, 'clipPath={`url(#${clip0})`}')
      .replace(`clip-path="url(#clip1)"`, 'clipPath={`url(#${clip1})`}')
      .replace(`clip-path="url(#clip2)"`, 'clipPath={`url(#${clip2})`}')
      .replace(`clip-path="url(#clip4)"`, 'clipPath={`url(#${clip4})`}')
      .replace(`clip-path="url(#clip5)"`, 'clipPath={`url(#${clip5})`}')
      .replace(`id="filter0_d"`, 'id={filter0}')
      .replace(`id="filter1_d"`, 'id={filter1}')
      .replace(`id="filter2_d"`, 'id={filter2}')
      .replace(`filter="url(#filter0_d)"`, 'filter={`url(#${filter0})`}')
      .replace(`filter="url(#filter1_d)"`, 'filter={`url(#${filter1})`}')
      .replace(`filter="url(#filter2_d)"`, 'filter={`url(#${filter2})`}')
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
    // Removing any extra empty lines added from the ternary above but leaving one ad the end.
    fileImportList = `${fileImportList.replace(/(^[ \t]*\n)/gm, '')}\n`;
    return fileImportList;
  };

  const buildReactSvgComponent = (
    svgComponentName: string,
    svgReactCode: string,
  ) => {
    let fileReactSvgComponent = `
        export const ${svgComponentName}: React.FC = () => {
        ${svgReactCode.includes('mask0') ? 'const mask0 = getSSRId();' : ''}
        ${svgReactCode.includes('mask1') ? 'const mask1 = getSSRId();' : ''}
        ${svgReactCode.includes('mask2') ? 'const mask2 = getSSRId();' : ''}
        ${svgReactCode.includes('mask3') ? 'const mask3 = getSSRId();' : ''}
        ${svgReactCode.includes('clip0') ? 'const clip0 = getSSRId();' : ''}
        ${svgReactCode.includes('clip1') ? 'const clip1 = getSSRId();' : ''}
        ${svgReactCode.includes('clip2') ? 'const clip2 = getSSRId();' : ''}
        ${svgReactCode.includes('clip3') ? 'const clip3 = getSSRId();' : ''}
        ${svgReactCode.includes('clip4') ? 'const clip4 = getSSRId();' : ''}
        ${svgReactCode.includes('clip5') ? 'const clip5 = getSSRId();' : ''}
        ${svgReactCode.includes('filter0') ? 'const filter0 = getSSRId();' : ''}
        ${svgReactCode.includes('filter1') ? 'const filter1 = getSSRId();' : ''}
        ${svgReactCode.includes('filter2') ? 'const filter2 = getSSRId();' : ''}
        return (
          ${svgReactCode}
        );
      };

      export default ${svgComponentName};`;

    // Removing any extra empty lines added from the ternary above.
    fileReactSvgComponent = fileReactSvgComponent.replace(/(^[ \t]*\n)/gm, '');
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
      console.error('Please select an SVG from the dropdown');
    }
  };

  const buildAndDownloadAllSvgFile = () => {
    const zip = new JSZip();

    // eslint-disable-next-line no-unused-expressions
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

  const SwitchThemeButton = () => {
    const StyledSwitchThemeButton = styled(Button)`
      margin: 50px 20px 30px 20px;
    `;

    return (
      <StyledSwitchThemeButton
        disabled={!svgCodeGroup}
        onClick={() => {
          handleSwitchThemeButtonClick();
        }}
      >
        SWITCH THEME: {isLightTheme ? 'LIGHT' : 'DARK'}
      </StyledSwitchThemeButton>
    );
  };

  const StyledSingleSVGDownloadButton = styled(Button)`
    margin-right: 20px;
  `;

  const StyledSvgGroupContainer = styled.div`
    max-width: 80vw;
    svg {
      max-width: 80vw;
      max-height: 80vh;
    }
  `;

  const StyledSvgPreviewerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  `;

  const StyledButtonsContainer = styled.div`
    position: fixed;
    top: 50px;
  `;

  const StyledSingleSvgWrapper = styled.div`
    margin-bottom: 20px;
  `;

  return (
    <StyledSvgPreviewerContainer>
      <StyledButtonsContainer>
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
              <div dangerouslySetInnerHTML={{__html: sanitizer(svgCode)}} />
            </StyledSingleSvgWrapper>
          ))}
        </StyledSvgGroupContainer>
      )}
    </StyledSvgPreviewerContainer>
  );
};
