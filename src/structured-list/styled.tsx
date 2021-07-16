import {Cell, CellProps, Grid} from '../grid';
import {
  StructuredListCellProps,
  StructuredListItemProps,
  StructuredListProps,
} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  styled,
} from '../utils';

const getAlign = (align: string) => {
  switch (align) {
    case 'center':
      return 'align-self: center';
    case 'end':
      return 'align-self: flex-end';
    default:
      return '';
  }
};

export const StyledGrid = styled(Grid)<
  Pick<StructuredListItemProps, 'overrides'> & {hasHref: boolean}
>`
  ${props =>
    getStylePreset(
      'structuredListItem',
      '',
      props.hasHref ? {} : {omitStates: ['active', 'hover', 'focus']},
    )(props)};
  ${getResponsiveSpace('padding', 'structuredListItem', '', 'spaceInset')}
  ${getResponsiveSize('minHeight', 'structuredListItem', '', 'minHeight')}
`;
export const StyledWrapper = styled.div<StructuredListCellProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const StyledListItemContainer = styled.li<
  Pick<StructuredListItemProps, 'overrides' | 'disabled'>
>`
  cursor: ${({disabled}) => disabled && 'not-allowed'};
  list-style: none;
  width: 100%;
  overflow: hidden;
`;

export const StyledLink = styled.a<StructuredListItemProps>`
  text-decoration: none;
`;

export const StyledListWrapper = styled.ul<StructuredListProps>`
  list-style: none;
  padding-left: 0;
  width: 100%;
  margin: 0;
`;

export const StyledCell = styled(Cell)<
  Pick<StructuredListCellProps, 'align'> & CellProps
>`
  ${({align}) => getAlign(align || 'start')}
`;
