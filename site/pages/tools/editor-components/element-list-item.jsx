/* eslint-disable import/no-unresolved */
import React, {forwardRef} from 'react';
import {TextBlock, IconButton, Stack, toNewsKitIcon, styled} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const StyledDiv = styled.div`
  cursor: move;
  ${({opacity}) => opacity && `opacity: ${opacity};`}
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  margin: 4px;
`;

export const ElementListItem = forwardRef(
  ({type, opacity = 1, onSelect, onMouseOut, onMouseOver, name}, ref) => (
    <StyledDiv
      opacity={opacity}
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Stack stackDistribution="space-between" flow="horizontal-center">
        <TextBlock width="100%">{name || type}</TextBlock>
        <IconButton onClick={onSelect}>
          <IconFilledInfo overrides={{size: 'iconSize010'}} />
        </IconButton>
      </Stack>
    </StyledDiv>
  ),
);

ElementListItem.displayName = 'ElementListItem';
