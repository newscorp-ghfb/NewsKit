import {Block} from '../block';
import {logicalProps} from '../utils/logical-properties';
import {getStylePreset, styled} from '../utils/style';
import {UnorderedListProps} from './types';

const getMarkerAlign = (align: 'start' | 'center' | 'end') => {
  switch (align) {
    case 'start':
      return 'align-self: start;';
    case 'end':
      return 'align-self: end;';
    default:
      return 'align-self: center;';
  }
};

export const StyledUl = styled.ul<{overrides: UnorderedListProps['overrides']}>`
  margin: 0;
  padding: 0;
  list-style: none;
  ${logicalProps()}
`;

export const StyledListItem = styled.li`
  &:last-child + div {
    margin: 0;
  }
`;

export const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
`;

export const StyledMarkerBlock = styled(Block)<
  Pick<UnorderedListProps, 'markerAlign'>
>`
  ${getStylePreset('unorderedList.marker', 'marker')};
  ${({markerAlign}) => getMarkerAlign(markerAlign || 'center')}
  svg,
  img {
    display: block;
  }
`;
