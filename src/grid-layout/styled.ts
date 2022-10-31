import {Theme} from '../theme';
import {logicalProps} from '../utils/logical-properties';
import {
  getResponsiveSize,
  getResponsiveSpace,
  handleResponsiveProp,
  styled,
} from '../utils/style';
import {GridLayoutProps} from './types';

const GRID_DEFAULT_PROPS = {
  rowGap: undefined,
  columnGap: undefined,
  columns: undefined,
  rows: undefined,
  justifyContent: undefined,
  alignContent: undefined,
  justifyItems: undefined,
  alignItems: undefined,
  areas: undefined,
  inline: false,
};

const mapTemplate = (theme: Theme, templateString?: string) =>
  templateString
    ?.split(' ')
    .map(section => theme.sizing[section] || section)
    .join(' ');

export const StyledGridLayout = styled.div<GridLayoutProps>`
  margin: 0;
  padding: 0;

  ${handleResponsiveProp({inline: GRID_DEFAULT_PROPS.inline}, ({inline}) => ({
    display: inline ? 'inline-grid' : 'grid',
  }))}

  ${handleResponsiveProp(
    {rowGap: GRID_DEFAULT_PROPS.rowGap},
    ({rowGap}, {theme}) => ({
      rowGap: rowGap && (theme.spacePresets[rowGap] || rowGap),
    }),
  )}

  ${handleResponsiveProp(
    {columnGap: GRID_DEFAULT_PROPS.columnGap},
    ({columnGap}, {theme}) => ({
      columnGap: columnGap && (theme.spacePresets[columnGap] || columnGap),
    }),
  )}

  ${handleResponsiveProp(
    {columns: GRID_DEFAULT_PROPS.columns},
    ({columns}, {theme}) => ({
      gridTemplateColumns: mapTemplate(theme, columns),
    }),
  )}

  ${handleResponsiveProp(
    {rows: GRID_DEFAULT_PROPS.rows},
    ({rows}, {theme}) => ({
      gridTemplateRows: mapTemplate(theme, rows),
    }),
  )}

  ${handleResponsiveProp({areas: GRID_DEFAULT_PROPS.areas}, ({areas}) => ({
    gridTemplateAreas: areas,
  }))};

  ${handleResponsiveProp(
    {justifyContent: GRID_DEFAULT_PROPS.justifyContent},
    ({justifyContent}) => ({
      justifyContent,
    }),
  )}

  ${handleResponsiveProp(
    {alignContent: GRID_DEFAULT_PROPS.alignContent},
    ({alignContent}) => ({
      alignContent,
    }),
  )}

  ${handleResponsiveProp(
    {justifyItems: GRID_DEFAULT_PROPS.justifyItems},
    ({justifyItems}) => ({
      justifyItems,
    }),
  )}

  ${handleResponsiveProp(
    {alignItems: GRID_DEFAULT_PROPS.alignItems},
    ({alignItems}) => ({
      alignItems,
    }),
  )}



  ${/* LOGICAL_PROPS_TO_DO: spaceInset to be removed. */ ''}
  ${getResponsiveSpace('padding', '', '', 'spaceInset')};
  ${getResponsiveSize('width', 'gridLayout', '', 'width')};
  ${getResponsiveSize('minWidth', 'gridLayout', '', 'minWidth')};
  ${getResponsiveSize('maxWidth', 'gridLayout', '', 'maxWidth')};
  ${getResponsiveSize('height', 'gridLayout', '', 'height')};
  ${getResponsiveSize('minHeight', 'gridLayout', '', 'minHeight')};
  ${getResponsiveSize('maxHeight', 'gridLayout', '', 'maxHeight')};
  ${logicalProps('gridLayout')}
`;
