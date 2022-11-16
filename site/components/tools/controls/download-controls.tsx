/* eslint-disable no-useless-concat */
import React, {useRef} from 'react';
import {saveAs} from 'file-saver';
import JSZip from 'jszip';
import {Button} from 'newskit';
import {StyledSingleSVGDownloadButton} from '../styled';
import {DownloadControlsProps} from './types';

export const DownloadControls = ({
  hexesObj,
  baseSvgCodeGroup,
  svgCodeGroup,
}: DownloadControlsProps) => {
  const selectSvgEl = useRef<HTMLSelectElement>(null);
  const [selectedIndexSvg, setSelectedIndexSvg] = React.useState('0');

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
      .replace(/"mix-blend-mode:color-burn"/g, "{{mixBlendMode: 'color-burn'}}")
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

  return (
    <>
      <select
        ref={selectSvgEl}
        disabled={!svgCodeGroup}
        style={{height: '26px', fontSize: '16px'}}
        value={selectedIndexSvg}
        onChange={e => setSelectedIndexSvg(e.target.value)}
      >
        <option>No SVG selected</option>
        {baseSvgCodeGroup &&
          baseSvgCodeGroup.map((svg, index) => (
            <option key={svg.name} value={`${index}`}>
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
    </>
  );
};
