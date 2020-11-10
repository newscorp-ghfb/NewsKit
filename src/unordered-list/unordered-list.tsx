import React from 'react';
import {styled, getStylePreset} from '../utils/style';
import {isValidNode} from '../utils/component';
import {getSSRId} from '../utils/get-ssr-id';
import {TextBlock} from '../text-block';
import {Block} from '../block';

import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {UnorderedListProps} from './types';

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
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
    <StyledUl>
      {React.Children.map(children, node => {
        if (!isValidNode(node)) return null;

        return (
          <ListItem key={getSSRId()}>
            <StyledBlock overrides={{spaceStack: itemSpaceToken}}>
              {ListItemMarker && (
                <MarkerBlock
                  overrides={{spaceInline: markerSpaceToken}}
                  aria-hidden="true"
                >
                  <ListItemMarker overrides={{size: markerSizeToken}} />
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
