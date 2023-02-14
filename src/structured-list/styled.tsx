import {Cell, CellProps, Grid} from '../grid';
import {
  StructuredListCellProps,
  StructuredListItemProps,
  StructuredListProps,
} from './types';
import {getResponsiveSize, getStylePreset, styled} from '../utils';
import {logicalProps} from '../utils/logical-properties';

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
  ${logicalProps('structuredListItem')}
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
`;

export const StyledLink = styled.a<StructuredListItemProps>`
  text-decoration: none;
  outline-offset: -1px;
`;

export const StyledListWrapper = styled.ul<StructuredListProps>`
  list-style: none;
  padding-left: 0;
  ${getResponsiveSize('width', 'structuredList', '', 'width')}
  margin: 0;
  ${logicalProps()}
`;

export const StyledCell = styled(Cell)<
  Pick<StructuredListCellProps, 'align'> & CellProps
>`
  ${({align}) => getAlign(align || 'start')}
`;
