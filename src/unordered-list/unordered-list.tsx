import React from 'react';
import {isValidNode} from '../utils/component';
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
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessUnorderedList = React.forwardRef<
  HTMLUListElement,
  UnorderedListProps
>(({children, listItemMarker: ListItemMarker, markerAlign, overrides}, ref) => {
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
  const contentStylePresetToken = getToken(
    {theme, overrides},
    'unorderedList.content',
    'content',
    'stylePreset',
  );
  const markerStylePresetToken = getToken(
    {theme, overrides},
    'unorderedList.marker',
    'marker',
    'stylePreset',
  );

  return (
    <StyledUl ref={ref} overrides={overrides} role="list">
      {React.Children.map(children, node => {
        if (!isValidNode(node)) return null;

        return (
          <StyledListItem>
            <StyledBlock spaceStack={itemSpaceToken}>
              {ListItemMarker && (
                <StyledMarkerBlock
                  spaceInline={markerSpaceToken}
                  aria-hidden="true"
                  markerAlign={markerAlign}
                >
                  <ListItemMarker
                    overrides={{
                      size: markerSizeToken,
                      stylePreset: markerStylePresetToken,
                    }}
                  />
                </StyledMarkerBlock>
              )}
              <TextBlock
                typographyPreset={contentTypographyPresetToken}
                stylePreset={contentStylePresetToken}
              >
                {node}
              </TextBlock>
            </StyledBlock>
          </StyledListItem>
        );
      })}
    </StyledUl>
  );
});

export const UnorderedList = withOwnTheme(ThemelessUnorderedList)({
  defaults,
});
