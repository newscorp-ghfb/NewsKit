import React from 'react';
import {isValidNode} from '../utils/component';
import {getSSRId} from '../utils/get-ssr-id';
import {TextBlock} from '../text-block';

import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {UnorderedListProps} from './types';
import {
  StyledUl,
  StyledBlock,
  StyledMarkerBlock,
  StyledListItem,
} from './styled';

export const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  listItemMarker: ListItemMarker,
  markerAlign,
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
    <StyledUl role="list">
      {React.Children.map(children, node => {
        if (!isValidNode(node)) return null;

        return (
          <StyledListItem key={getSSRId()}>
            <StyledBlock spaceStack={itemSpaceToken}>
              {ListItemMarker && (
                <StyledMarkerBlock
                  spaceInline={markerSpaceToken}
                  aria-hidden="true"
                  markerAlign={markerAlign}
                >
                  <ListItemMarker overrides={{size: markerSizeToken}} />
                </StyledMarkerBlock>
              )}
              <TextBlock typographyPreset={contentTypographyPresetToken}>
                {node}
              </TextBlock>
            </StyledBlock>
          </StyledListItem>
        );
      })}
    </StyledUl>
  );
};
