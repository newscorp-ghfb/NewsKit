import * as React from 'react';
import {getSizingFromTheme, newskitLightTheme, styled} from 'newskit';
import {Block} from '../block';
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
  margin-top: ${getSizingFromTheme('spacingSize010')};
  height: ${getSizingFromTheme('sizing070')};
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth};`}
  ${({borderStyle}) => borderStyle && `border-style: ${borderStyle};`}
`;

function BorderPreview({name, border}: BorderPreviewProps): JSX.Element {
  return (
    <Block $width="250px" $margin="sizing070">
      <Block $font="body030">
        {name} ({border.borderWidth} {border.borderStyle} {border.borderColor})
      </Block>
      <StyledBorderBox {...border} />
    </Block>
  );
}

function Borders(): JSX.Element {
  const borders = {
    border100: newskitLightTheme.borders.border100,
    border200: newskitLightTheme.borders.border200,
    border300: newskitLightTheme.borders.border300,
    border400: newskitLightTheme.borders.border400,
    border500: newskitLightTheme.borders.border500,
    border600: newskitLightTheme.borders.border600,
  };

  return (
    <div>
      <Header>Borders</Header>
      <ExampleWrapper>
        {Object.keys(borders).map(bordersKey => (
          <BorderPreview
            key={bordersKey}
            name={bordersKey}
            border={borders[bordersKey]}
          />
        ))}
      </ExampleWrapper>
    </div>
  );
}

export default Borders;
