import {Grid} from '../grid';
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

export const StyledGrid = styled(Grid)<
  Pick<StructuredListItemProps, 'overrides'>
>`
  ${getStylePreset('structuredListItem', '')};
  ${getResponsiveSpace('padding', 'structuredListItem', '', 'spaceInset')}
  ${getResponsiveSize('minHeight', 'structuredListItem', '', 'minHeight')}
`;
export const StyledWrapper = styled.div<StructuredListCellProps>`
  height: 100%;
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
`;
