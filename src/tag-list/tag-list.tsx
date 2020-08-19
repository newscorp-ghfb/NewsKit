import React from 'react';
import {styled, getSizingFromTheme} from '../utils/style';
import {SizingKeys} from '../theme';
import {TagListProps, TagListLayout} from './types';
import {Tag} from '../tag';
import {StyledUl as ListStyledUl} from '../list';

const layoutToJustifyContent = {
  [TagListLayout.Left]: 'flex-start',
  [TagListLayout.Center]: 'center',
  [TagListLayout.Right]: 'flex-end',
};

const StyledUl = styled(ListStyledUl)<{layout?: TagListLayout}>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({layout = TagListLayout.Center}) =>
    layoutToJustifyContent[layout]};
`;

const StyledLi = styled.li<{$spacing?: SizingKeys}>`
  box-sizing: border-box;
  display: inline-block;
  list-style-type: none;

  margin-right: ${getSizingFromTheme('sizing010', '$spacing')};
  margin-bottom: ${getSizingFromTheme('sizing010')};

  :last-child {
    margin-right: 0;
  }
`;

const ListItem: React.FC<{spacing?: SizingKeys}> = ({spacing, ...props}) => (
  <StyledLi {...props} $spacing={spacing} />
);

export const TagList: React.FC<TagListProps> = ({
  layout,
  size,
  stylePreset,
  spacing,
  tagData,
}) => (
  <StyledUl layout={layout}>
    {tagData.map(({label, href}, i) => (
      <ListItem
        // eslint-disable-next-line react/no-array-index-key
        key={`${label}-${href}-${stylePreset}-${size}-${i}`}
        spacing={spacing}
      >
        <Tag size={size} overrides={{stylePreset}} href={href}>
          {label}
        </Tag>
      </ListItem>
    ))}
  </StyledUl>
);
