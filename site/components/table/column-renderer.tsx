import React from 'react';
import {Block, getSSRId, P} from 'newskit';
import {Link} from '../link';
import {SwatchCard} from '../swatch-card';
import {MonoColor} from '../flags/mono-color';
import {BorderCard} from '../border-card';
import {OutlineCard} from '../outline-card';
import {getByTitle} from '../../utils/get-route-object';
import {StyledDataCell} from './styled';
import {TableProps, TableRow, TableRowValue, CellWithOverrides} from './types';
import {columnMap} from './column-map';
import {
  IconFilledCheckCircle,
  IconFilledCrossCircle,
  IconFilledNullDot,
} from '../icons';
import {MonoPath, MonoKeyboard, CircleFlag, Mono} from '../flags';
import {
  MotionDurationSwatch,
  MotionTimingSwatch,
} from '../theming-values/motions/swatches';
import {FontAttributes} from '../font-attributes';
import {SizeBox} from '../theming-values/size-box';
import {OverlayCards} from '../theming-values/overlays/swatches';

const renderIcon = (value?: TableRowValue) => {
  switch (value) {
    case true:
      return <IconFilledCheckCircle size="small" />;

    case false:
      return <IconFilledCrossCircle size="small" />;

    case null:
    default:
      return <IconFilledNullDot />;
  }
};

const remapComponents: {[id: string]: string} = {
  'Icon Button': 'Button',
  Icon: 'Icons',
  'Text Block (input)': 'Text Block',
};

const renderSingleOrMultiple = (
  renderer: (value: string) => React.ReactNode,
  value: string | string[],
): React.ReactNode =>
  Array.isArray(value)
    ? value.map((v, i, arr) => (
        <Block
          key={getSSRId()}
          spaceStack={
            // The row spacing between multiple flags in the cell
            arr.length > 1 && i < arr.length - 1 ? 'space010' : undefined
          }
        >
          {renderer(v)}
        </Block>
      ))
    : renderer(value);

export const renderCols = (
  columns: TableProps['columns'],
  row: TableRow,
  rowIndex: number,
) =>
  columns.map(columnName => {
    const config = columnMap[columnName];
    const cellType = (config && config.cellType) || 'text';
    const cellValue =
      row[
        columnName
          .toLowerCase()
          .split(' ')
          .map((x, i) => (i > 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x))
          .join('')
      ];
    let cellContent: React.ReactNode;

    switch (cellType) {
      case 'typographyPreset': {
        const paragraph = (
          <P
            overrides={{
              typographyPreset: (cellValue as CellWithOverrides)
                ?.preset as string,
            }}
          >
            <div
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              The quick brown fox
            </div>
          </P>
        );
        cellContent = ((cellValue as CellWithOverrides)?.config
          ?.isItalic as boolean) ? (
          <i>{paragraph}</i>
        ) : (
          paragraph
        );
        break;
      }

      case 'number': {
        const v = typeof cellValue === 'undefined' ? rowIndex + 1 : cellValue;
        cellContent = <CircleFlag>{v}</CircleFlag>;
        break;
      }

      case 'path': {
        cellContent =
          cellValue &&
          renderSingleOrMultiple(
            v => <MonoPath>{v.toString()}</MonoPath>,
            cellValue as string | string[],
          );
        break;
      }

      case 'flag': {
        cellContent =
          cellValue &&
          renderSingleOrMultiple(
            v => <Mono>{v}</Mono>,
            cellValue as string | string[],
          );
        break;
      }

      case 'keyboardFlag': {
        cellContent = cellValue && (
          <MonoKeyboard>{cellValue as string | string[]}</MonoKeyboard>
        );
        break;
      }

      case 'componentLink': {
        cellContent =
          cellValue &&
          renderSingleOrMultiple(v => {
            const remapped = remapComponents[v];
            const route = getByTitle(remapped || v);

            if (!route) return v;

            const getLink = (value: string) => (
              <Link
                type="standalone"
                overrides={{typographyPreset: 'utilityButton020'}}
                href={route.id}
              >
                {value}
              </Link>
            );

            if (v.includes('(')) {
              const strArr = v.split('(');
              return (
                <>
                  {getLink(strArr[0])}
                  {` (${strArr[1]}`}
                </>
              );
            }
            return getLink(v);
          }, cellValue as string | string[]);
        break;
      }

      case 'checkIcon':
        cellContent = renderIcon(cellValue || null);
        break;

      case 'icon':
        cellContent = renderIcon(cellValue);
        break;

      case 'colorSwatch': {
        cellContent = cellValue && <SwatchCard color={cellValue.toString()} />;
        break;
      }

      case 'motionDurationSwatch': {
        cellContent = cellValue && (
          <MotionDurationSwatch duration={cellValue.toString()} />
        );
        break;
      }

      case 'motionTimingSwatch': {
        cellContent = cellValue && (
          <MotionTimingSwatch timing={cellValue.toString()} />
        );
        break;
      }

      case 'colorToken': {
        cellContent = cellValue && <MonoColor color={cellValue.toString()} />;
        break;
      }

      case 'borderRadius': {
        cellContent = cellValue && (
          <BorderCard borderRadiusToken={cellValue.toString()} />
        );
        break;
      }

      case 'borderWidth': {
        cellContent = cellValue && (
          <BorderCard borderWidthToken={cellValue.toString()} />
        );
        break;
      }

      case 'outlineStyle': {
        cellContent = cellValue && (
          <OutlineCard outlineStyleToken={cellValue.toString()} />
        );
        break;
      }

      case 'outlineWidth': {
        cellContent = cellValue && (
          <OutlineCard outlineWidthToken={cellValue.toString()} />
        );
        break;
      }

      case 'outlineOffset': {
        cellContent = cellValue && (
          <OutlineCard outlineOffsetToken={cellValue.toString()} />
        );
        break;
      }

      case 'safariOutlineStyle': {
        cellContent = cellValue && (
          <OutlineCard safariOutlineStyleToken={cellValue.toString()} />
        );
        break;
      }

      case 'safariOutlineOffset': {
        cellContent = cellValue && (
          <OutlineCard safariOutlineOffsetToken={cellValue.toString()} />
        );
        break;
      }

      case 'boxShadow': {
        cellContent = cellValue && (
          <BorderCard boxShadowToken={cellValue.toString()} />
        );
        break;
      }

      case 'boxOverlay': {
        cellContent = cellValue && (
          <OverlayCards overlayToken={cellValue.toString()} />
        );
        break;
      }

      case 'boxOpacity': {
        cellContent = cellValue && (
          <OverlayCards opacityToken={cellValue.toString()} />
        );
        break;
      }

      case 'boxGradient': {
        cellContent = cellValue && (
          <OverlayCards gradientToken={cellValue.toString()} />
        );
        break;
      }

      case 'sizeBox': {
        cellContent = cellValue && <SizeBox sideLength={cellValue as string} />;
        break;
      }

      case 'fontSize': {
        cellContent = cellValue && (
          <FontAttributes fontSizeToken={cellValue.toString()} />
        );
        break;
      }

      case 'fontWeight': {
        cellContent = cellValue && (
          <FontAttributes fontWeightToken={cellValue.toString()} />
        );
        break;
      }

      case 'fontLineHeight': {
        cellContent = cellValue && (
          <FontAttributes fontLineHeight={cellValue.toString()} />
        );
        break;
      }

      case 'fontLetterSpacing': {
        cellContent = cellValue && (
          <FontAttributes fontLetterSpacing={cellValue.toString()} />
        );
        break;
      }

      default:
        cellContent = cellValue;
        break;
    }

    return (
      <StyledDataCell key={getSSRId()} {...(config || {})}>
        {cellContent}
      </StyledDataCell>
    );
  });
