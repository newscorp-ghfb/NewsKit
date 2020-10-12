import * as React from 'react';
import {
  getSizingFromTheme,
  getColorFromTheme,
  newskitLightTheme,
  styled,
} from 'newskit';
import {LegacyBlock} from '../legacy-block';
import {Header, ExampleWrapper} from './common';

interface StyledSizeBox {
  size: string;
}

interface SizePreviewProps {
  name: string;
  size: string;
}

const StyledSizeBox = styled.div<StyledSizeBox>`
  background-color: ${getColorFromTheme('inkContrast')};
  margin-top: ${getSizingFromTheme('sizing010')};
  ${({size}) => size && `height: ${size};`}
  ${({size}) => size && `width: ${size};`}
`;

function SizePreview({name, size}: SizePreviewProps): JSX.Element {
  return (
    <LegacyBlock width="250px">
      <LegacyBlock font="utilityBody030">
        {name} ({size})
      </LegacyBlock>
      <StyledSizeBox size={size} />
    </LegacyBlock>
  );
}

function Sizing(): JSX.Element {
  const sizingMap = {
    sizing010: newskitLightTheme.sizing.sizing010,
    sizing020: newskitLightTheme.sizing.sizing020,
    sizing030: newskitLightTheme.sizing.sizing030,
    sizing040: newskitLightTheme.sizing.sizing040,
    sizing050: newskitLightTheme.sizing.sizing050,
    sizing060: newskitLightTheme.sizing.sizing060,
    sizing070: newskitLightTheme.sizing.sizing070,
    sizing080: newskitLightTheme.sizing.sizing080,
  };

  return (
    <div>
      <Header>Sizing</Header>
      <ExampleWrapper>
        {Object.keys(sizingMap).map(sizeKey => (
          <SizePreview
            key={sizeKey}
            name={sizeKey}
            size={sizingMap[sizeKey as keyof typeof sizingMap]}
          />
        ))}
      </ExampleWrapper>
    </div>
  );
}

export default Sizing;
