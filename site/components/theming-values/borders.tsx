import * as React from 'react';
import {getSizingFromTheme, newskitLightTheme, styled} from 'newskit';
import {LegacyBlock} from '../legacy-block';
import {Header, ExampleWrapper} from './common';

type BorderPreviewProps = {
  name: string;
  border: {
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
  };
};

interface StyledBorderBoxProps {
  borderWidth?: string;
  borderStyle?: string;
}

const StyledBorderBox = styled.div<StyledBorderBoxProps>`
  margin-top: ${getSizingFromTheme('sizing010')};
  height: ${getSizingFromTheme('sizing070')};
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth};`}
  ${({borderStyle}) => borderStyle && `border-style: ${borderStyle};`}
`;

function BorderPreview({name, border}: BorderPreviewProps): JSX.Element {
  return (
    <LegacyBlock $width="250px" $margin="sizing070">
      <LegacyBlock $font="body030">
        {name} ({border.borderWidth} {border.borderStyle} {border.borderColor})
      </LegacyBlock>
      <StyledBorderBox {...border} />
    </LegacyBlock>
  );
}

function Borders(): JSX.Element {
  const borders = {
    border100: newskitLightTheme.borders.borderWidth010,
    border200: newskitLightTheme.borders.borderWidth020,
    border300: newskitLightTheme.borders.borderWidth030,
  };

  return (
    <div>
      <Header>Borders</Header>
      <ExampleWrapper>
        {Object.keys(borders).map(bordersKey => (
          <BorderPreview
            key={bordersKey}
            name={bordersKey}
            border={{
              borderWidth: borders[bordersKey as keyof typeof borders],
              borderStyle: 'solid',
              borderColor: newskitLightTheme.colors.inkBase,
            }}
          />
        ))}
      </ExampleWrapper>
    </div>
  );
}

export default Borders;
