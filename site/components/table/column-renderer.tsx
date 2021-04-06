/* eslint-disable no-fallthrough */
import React from 'react';
import {Block, getSSRId} from 'newskit';
import {Link} from '../link';
import {getByTitle} from '../../utils/get-route-object';
import {arrayify} from '../../utils/arrayify';
import {StyledDataCell} from './styled';
import {TableProps, TableRow} from './types';
import {columnMap} from './column-map';
import {CheckIcon, CrossIcon, NullDotIcon} from '../icons';
import {MonoPath, MonoKeyboard, CircleFlag, Mono} from '../flags';

export const renderCols = (columns: TableProps['columns'], row: TableRow) =>
  columns.map(columnName => {
    const config = columnMap[columnName];
    const cellType = (config && config.cellType) || 'text';
    const cellValue = row[columnName.toLowerCase().replace(/\s/g, '')];
    let cellContent: React.ReactNode;

    switch (cellType) {
      case 'number': {
        cellContent = typeof cellValue !== 'undefined' && (
          <CircleFlag>{cellValue}</CircleFlag>
        );
        break;
      }

      case 'path': {
        cellContent = cellValue && <MonoPath>{cellValue.toString()}</MonoPath>;
        break;
      }

      case 'flag': {
        cellContent =
          cellValue &&
          arrayify(cellValue).map((v, i, arr) => (
            <Block
              key={getSSRId()}
              spaceStack={
                // The row spacing between multiple flags in the cell
                arr.length > 1 && i < arr.length - 1 ? 'space010' : undefined
              }
            >
              <Mono minimal>{v}</Mono>
            </Block>
          ));
        break;
      }

      case 'keyboardFlag': {
        cellContent = cellValue && (
          <MonoKeyboard>{cellValue as string | string[]}</MonoKeyboard>
        );
        break;
      }

      case 'componentLink': {
        const route = getByTitle(cellValue as string);
        cellContent = route ? (
          <Link
            href={route.id}
            overrides={{typographyPreset: 'utilityButton020'}}
          >
            {cellValue}
          </Link>
        ) : (
          cellValue
        );
        break;
      }

      case 'checkIcon': {
        // Fallthrough if checkIcon type and value is true (so we render the icon)
        if (cellValue !== true) {
          break;
        }
        // Fallthrough
      }
      case 'icon': {
        switch (cellValue) {
          case true:
            cellContent = <CheckIcon size="small" />;
            break;

          case false:
            cellContent = <CrossIcon size="small" />;
            break;

          case null:
          default:
            cellContent = <NullDotIcon />;
            break;
        }
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
