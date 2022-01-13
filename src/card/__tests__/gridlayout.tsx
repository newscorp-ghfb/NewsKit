import React from 'react';
import {Block} from '../..';
import {
  getResponsiveSize,
  handleResponsiveProp,
  MQ,
  styled,
} from '../../utils/style';

const GRID_DEFAULT_PROPS = {
  rowGap: 'space000',
  columnGap: 'space000',
  columns: undefined,
  rows: undefined,
  justifyContent: undefined,
  alignContent: undefined,
  justifyItems: undefined,
  alignItems: undefined,
  areas: undefined,
};

type GridLayoutProps = {
  rowGap?: MQ<string>;
  columnGap?: MQ<string>;
  columns?: MQ<string>;
  rows?: MQ<string>;
  justifyContent?: MQ<string>;
  alignContent?: MQ<string>;
  justifyItems?: MQ<string>;
  alignItems?: MQ<string>;
  areas?: MQ<string>;
  children?: React.ReactNode;
  overrides?: {
    width?: MQ<string>;
    minWidth?: MQ<string>;
    maxWidth?: MQ<string>;
    height?: MQ<string>;
    minHeight?: MQ<string>;
    maxHeight?: MQ<string>;
  };
};

const StyledGridLayout = styled.div<GridLayoutProps>`
  display: grid;
  ${handleResponsiveProp(
    {rowGap: GRID_DEFAULT_PROPS.rowGap},
    ({rowGap}, {theme}) => ({
      rowGap: theme.spacePresets[rowGap] || rowGap,
    }),
  )}
  ${handleResponsiveProp(
    {columnGap: GRID_DEFAULT_PROPS.columnGap},
    ({columnGap}, {theme}) => ({
      columnGap: theme.spacePresets[columnGap] || columnGap,
    }),
  )}
  ${handleResponsiveProp(
    {columns: GRID_DEFAULT_PROPS.columns},
    ({columns}) => ({
      gridTemplateColumns: columns,
    }),
  )}
  ${handleResponsiveProp({rows: GRID_DEFAULT_PROPS.rows}, ({rows}) => ({
    gridTemplateRows: rows,
  }))}

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
  
  ${getResponsiveSize('width', 'gridLayout', '', 'width')};
  ${getResponsiveSize('minWidth', 'gridLayout', '', 'minWidth')};
  ${getResponsiveSize('maxWidth', 'gridLayout', '', 'maxWidth')};
  ${getResponsiveSize('height', 'gridLayout', '', 'height')};
  ${getResponsiveSize('minHeight', 'gridLayout', '', 'minHeight')};
  ${getResponsiveSize('maxHeight', 'gridLayout', '', 'maxHeight')};
`;

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const extractAreas = ariaString =>
  ariaString
    .replaceAll('\n', '')
    .replaceAll('"', '')
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');

const makeUniq = (array: string[]) => [...new Set(array)];

const getAreasList = (areas: MQ<string>): string[] => {
  if (typeof areas === 'string') {
    return makeUniq(extractAreas(areas));
  } else if (typeof areas === 'object') {
    const list = Object.values(areas).reduce((acc, val) => {
      const filtered = extractAreas(val);
      acc.push(...filtered);
      return acc;
    }, []);

    return makeUniq(list).filter(Boolean);
  }

  return [];
};

const GridLayoutArea = styled(Block)<{
  area: string;
  justifySelf: MQ<string>;
  alignSelf: MQ<string>;
}>`
  grid-area: ${props => props.area};

  ${handleResponsiveProp({justifySelf: undefined}, ({justifySelf}) => ({
    justifySelf,
  }))}
  ${handleResponsiveProp({alignSelf: undefined}, ({alignSelf}) => ({
    alignSelf,
  }))}
`;

export const GridLayout = ({children, ...props}: GridLayoutProps) => {
  const {areas} = props;

  const areasNames = getAreasList(areas);
  const Areas = {};

  const isFunctionWithAreas =
    typeof children === 'function' && areasNames.length > 0;

  if (isFunctionWithAreas) {
    areasNames.forEach(area => {
      Areas[capitalize(area)] = props => (
        <GridLayoutArea area={area} {...props} />
      );
    });
  }

  return (
    <StyledGridLayout {...props}>
      {isFunctionWithAreas ? children(Areas) : children}
    </StyledGridLayout>
  );
};
