import React from 'react';
import {Block} from '../block';
import {handleResponsiveProp, MQ, styled} from '../utils/style';
import {
  AreasMap,
  GridLayoutProps,
  GridLayoutItemProps,
  GridLayoutRenderProps,
} from './types';
import {StyledGridLayout} from './styled';
import {areaToValidCSS, capitalize, getAreasList} from './utils';

function isGridLayoutRenderProps(
  children: React.ReactNode | GridLayoutRenderProps,
  areasNames: string[],
): children is GridLayoutRenderProps {
  return typeof children === 'function' && !!areasNames.length;
}

export const GridLayoutItem = styled(Block)<GridLayoutItemProps>`
  grid-area: ${props => props.area};
  ${handleResponsiveProp({order: undefined}, ({order}) => ({
    order,
  }))}
  ${handleResponsiveProp({justifySelf: undefined}, ({justifySelf}) => ({
    justifySelf,
  }))}
  ${handleResponsiveProp({alignSelf: undefined}, ({alignSelf}) => ({
    alignSelf,
  }))}
  ${handleResponsiveProp({column: undefined}, ({column}) => ({
    gridColumn: column,
  }))}
  ${handleResponsiveProp({row: undefined}, ({row}) => ({
    gridRow: row,
  }))}
`;

export const GridLayout = React.forwardRef<HTMLDivElement, GridLayoutProps>(
  ({children, ...props}, ref) => {
    const {areas} = props;

    const areasNames = getAreasList(areas || '');
    const Areas = {} as AreasMap;

    const isFunctionWithAreas = isGridLayoutRenderProps(children, areasNames);

    if (isFunctionWithAreas) {
      areasNames.forEach(area => {
        const componentName = capitalize(area);
        Areas[componentName] = (itemProps: GridLayoutItemProps) => (
          <GridLayoutItem area={area} {...itemProps} />
        );
      });
    }

    let validCSSAreas: string | Record<string, string | undefined> | undefined;

    if (typeof areas === 'object') {
      validCSSAreas = {};
      Object.entries(areas).forEach(([key, value]) => {
        (validCSSAreas as Record<string, string | undefined>)[
          key
        ] = areaToValidCSS(value);
      });
    } else {
      validCSSAreas = areaToValidCSS(areas);
    }

    return (
      <StyledGridLayout
        ref={ref}
        {...props}
        areas={validCSSAreas as MQ<string>}
      >
        {isFunctionWithAreas ? children(Areas) : children}
      </StyledGridLayout>
    );
  },
);
