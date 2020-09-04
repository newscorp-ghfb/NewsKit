import React from 'react';
import {styled} from '../utils/style';
import {isValidNode} from '../utils/component';
import {getBuiId} from '../utils/get-bui-id';
import {StyledLi, StyledUl} from './styled';
import {TextBlock} from '../text-block';
import {Block} from '../block';
import {getStylePreset} from '../utils/style-preset';
import {useTheme, IconSizeKeys, SpacePresetKeys} from '../theme';
import {getToken} from '../utils/get-token';
import {IconComponent} from '../icons';

export interface UnorderedListProps {
  listItemMarker?: IconComponent;
  overrides?: {
    spaceStack?: SpacePresetKeys;
    content?: {
      stylePreset?: string;
      typographyPreset?: string;
    };
    marker?: {
      stylePreset?: string;
      spaceInline?: SpacePresetKeys;
      size?: IconSizeKeys;
    };
  };
}

const ListItem = styled(StyledLi)`
  &:last-child + div {
    margin: 0;
  }
`;

const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
`;

const MarkerBlock = styled(Block)`
  ${getStylePreset('unorderedList.marker', 'marker')};

  svg,
  img {
    display: block;
  }
`;

export const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  listItemMarker: ListItemMarker,
  overrides,
}) => {
  const theme = useTheme();
  const itemSpaceToken = getToken(
    {theme, overrides},
    'unorderedList',
    '',
    'spaceStack',
  );
  const markerSpaceToken = getToken(
    {theme, overrides},
    'unorderedList.marker',
    'marker',
    'spaceInline',
  );
  const markerSizeToken = getToken(
    {theme, overrides},
    'unorderedList.marker',
    'marker',
    'size',
  );
  const contentTypographyPresetToken = getToken(
    {theme, overrides},
    'unorderedList.content',
    'content',
    'typographyPreset',
  );

  return (
    <StyledUl display="block">
      {React.Children.map(children, node => {
        if (!isValidNode(node)) return null;

        return (
          <ListItem key={getBuiId()}>
            <StyledBlock overrides={{spaceStack: itemSpaceToken}}>
              {ListItemMarker && (
                <MarkerBlock
                  overrides={{spaceInline: markerSpaceToken}}
                  aria-hidden="true"
                >
                  <ListItemMarker size={markerSizeToken} />
                </MarkerBlock>
              )}
              <TextBlock
                overrides={{typographyPreset: contentTypographyPresetToken}}
              >
                {node}
              </TextBlock>
            </StyledBlock>
          </ListItem>
        );
      })}
    </StyledUl>
  );
};
