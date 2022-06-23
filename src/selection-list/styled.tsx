import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {logicalProps} from '../utils/logical-properties';
import {SelectionListOptionProps, SelectionListProps} from './types';

export const StyledSelectionList = styled.div<
  Pick<SelectionListProps, 'overrides'>
>`
  box-sizing: border-box;
  ${logicalProps('selectionList')}
`;

export const StyledSelectionListOption = styled.button<SelectionListOptionProps>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${getStylePreset('selectionListOption', '')}
  ${getTypographyPreset('selectionListOption', '')}
  ${getResponsiveSize('minHeight', 'selectionListOption', '', 'minHeight')}
  ${getResponsiveSpace('columnGap', 'selectionListOption', '', 'spaceInline')}
  ${logicalProps('selectionListOption')}
`;
