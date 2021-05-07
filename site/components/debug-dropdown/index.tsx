import React, {useState} from 'react';
import {TextBlock, Visible} from 'newskit';
import {StyledDebugDropdown} from './styled';

export const DebugDropdown: React.FC = () => {
  const [left, setLeft] = useState<number | 'unset'>('unset');

  return (
    <StyledDebugDropdown
      left={left}
      onClick={() => {
        setLeft(left === 0 ? 'unset' : 0);
      }}
    >
      <Visible xs>
        <TextBlock typographyPreset="editorialHeadline050">XS</TextBlock>
      </Visible>
      <Visible sm>
        <TextBlock typographyPreset="editorialHeadline050">SM</TextBlock>
      </Visible>
      <Visible md>
        <TextBlock typographyPreset="editorialHeadline050">MD</TextBlock>
      </Visible>
      <Visible lg>
        <TextBlock typographyPreset="editorialHeadline050">LG</TextBlock>
      </Visible>
      <Visible xl>
        <TextBlock typographyPreset="editorialHeadline050">XL</TextBlock>
      </Visible>
    </StyledDebugDropdown>
  );
};
