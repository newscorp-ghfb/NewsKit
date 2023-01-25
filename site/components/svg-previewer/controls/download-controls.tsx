/* eslint-disable no-useless-concat */
import React, {useRef} from 'react';
import {saveAs} from 'file-saver';
import JSZip from 'jszip';
import {Button, Select, SelectOption} from 'newskit';
import {StyledSingleSVGDownloadButton} from '../styled';
import {DownloadControlsProps} from './types';

export const DownloadControls = ({
  hexesObj,
  baseSvgCodeGroup,
  svgCodeGroup,
}: DownloadControlsProps) => {
  const selectSvgEl = useRef<HTMLSelectElement>(null);
  const [selectedIndexSvg, setSelectedIndexSvg] = React.useState('0');

  const buildSvgFileName = (svgName: string) =>
    svgName.replaceAll(' ', '-').toLowerCase();

  const replaceColorHashWithToken = (svgCode: string) => {
    let svgCodeCopy = svgCode;

    Object.entries(hexesObj).forEach(hex => {
      const name = `var(--color-${hex[1]})`;
      svgCodeCopy = svgCodeCopy.replaceAll(hex[0].toUpperCase(), name);
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

  const buildAndDownloadSingleSvgFile = () => {
    const selectElementValue = selectSvgEl.current?.value;
    const selectedSvg = selectElementValue
      ? parseInt(selectElementValue, 10)
      : undefined;

    if (selectedSvg !== undefined && baseSvgCodeGroup) {
      let svgCode: string;
      svgCode = replaceFigmaIdWithVariable(
        baseSvgCodeGroup[selectedSvg].figmaSvg,
      );
      svgCode = replaceColorHashWithToken(svgCode);

      const svgFileName = buildSvgFileName(baseSvgCodeGroup[selectedSvg].name);

      // add id to svg content
      svgCode = svgCode.replace('<svg ', '<svg id="nksvg" ');

      const fileBlob = new Blob([svgCode], {
        type: 'text/plain;charset=utf-8;',
      });
      saveAs(fileBlob, `${svgFileName}.svg`);
    } else {
      // eslint-disable-next-line no-console
      console.error('Please select an SVG from the dropdown');
    }
  };

  const buildAndDownloadAllSvgFile = () => {
    const zip = new JSZip();

    baseSvgCodeGroup?.forEach(svg => {
      let figmaSvgCopy = svg.figmaSvg;
      figmaSvgCopy = replaceFigmaIdWithVariable(figmaSvgCopy);
      figmaSvgCopy = replaceColorHashWithToken(figmaSvgCopy);

      // add id to svg content
      figmaSvgCopy = figmaSvgCopy.replace('<svg ', '<svg id="nksvg" ');

      const svgFileName = buildSvgFileName(svg.name);
      zip.file(`${svgFileName}.svg`, figmaSvgCopy);
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
      {baseSvgCodeGroup && (
        <Select
          /* @ts-ignore nextline */
          ref={selectSvgEl}
          disabled={!svgCodeGroup}
          value={selectedIndexSvg}
          onChange={e => setSelectedIndexSvg(e.target.value)}
        >
          {baseSvgCodeGroup &&
            baseSvgCodeGroup.map((svg, index) => (
              <SelectOption key={svg.name} value={`${index}`}>
                {svg.name.replace(' ', '')} .svg
              </SelectOption>
            ))}
        </Select>
      )}

      <StyledSingleSVGDownloadButton
        data-testid="single-svg-button"
        overrides={{stylePreset: 'buttonMinimalPrimary'}}
        onClick={handleDownloadButtonClick}
      >
        Download .svg
      </StyledSingleSVGDownloadButton>

      <Button onClick={buildAndDownloadAllSvgFile}>Download all .zip</Button>
    </>
  );
};
