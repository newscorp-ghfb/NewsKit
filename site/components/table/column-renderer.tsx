import React from 'react';
import {Block, getSSRId, Link} from 'newskit';
import {SwatchCard} from '../swatch-card';
import {TokenFlag} from '../flags/token-flag';
import {BorderCard} from '../border-card';
import {getByTitle} from '../../utils/get-route-object';
import {StyledDataCell} from './styled';
import {TableProps, TableRow, TableRowValue} from './types';
import {columnMap} from './column-map';
import {
  IconFilledCheckCircle,
  IconFilledCrossCircle,
  IconFilledNullDot,
} from '../icons';
import {MonoPath, MonoKeyboard, CircleFlag, Mono} from '../flags';

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
            v => <Mono minimal>{v}</Mono>,
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
            return route ? (
              <Link
                overrides={{typographyPreset: 'utilityButton020'}}
                href={route.id}
              >
                {v}
              </Link>
            ) : (
              v
            );
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

      case 'colorToken': {
        cellContent = cellValue && (
          <TokenFlag color={cellValue.toString()}>{cellValue}</TokenFlag>
        );
        break;
      }

      case 'token': {
        cellContent = cellValue && <TokenFlag>{cellValue}</TokenFlag>;
        break;
      }

      case 'borderRadius': {
        cellContent = cellValue && (
          <BorderCard borderRadiusToken={cellValue.toString()}>
            {cellValue}
          </BorderCard>
        );
        break;
      }

      case 'borderWidth': {
        cellContent = cellValue && (
          <BorderCard borderWidthToken={cellValue.toString()}>
            {cellValue}
          </BorderCard>
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
