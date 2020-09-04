import * as React from 'react';
import {
  styled,
  ColorKeys,
  getSizingFromTheme,
  Colors as ColorFoundations,
} from 'newskit';
import {colors as colorFoundations} from 'newskit/theme/foundations';
import {LegacyBlock} from '../legacy-block';
import {Header, ExampleWrapper} from './common';

const getBrightness = (rgbString: string) => {
  const r = parseInt(rgbString.slice(1, 3), 16) / 255;
  const g = parseInt(rgbString.slice(3, 5), 16) / 255;
  const b = parseInt(rgbString.slice(5, 7), 16) / 255;
  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
};

export const CircleSwatch = styled.div<{color: string}>`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({color}) => color};
  border-style: solid;
  border-width: 1px;
  border-color: ${({color}) =>
    getBrightness(color) > 0.92 ? 'black' : 'transparent'};
`;

export const TextBoxSwatch = styled.span<{
  themeColor: ColorKeys;
  dark?: boolean;
}>`
  display: inline-block;
  width: 192px;
  height: ${getSizingFromTheme('sizing060')};
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  background-color: ${({theme, themeColor}) => theme.colors[themeColor]};
  color: ${({theme, dark}) =>
    dark ? theme.colors.white : theme.colors.inkContrast};

  ::before {
    content: '${({theme, themeColor}) => theme.colors[themeColor]}';
    padding: ${getSizingFromTheme('sizing030')};
    line-height: 1.9;
    text-transform: ${({theme, themeColor}) =>
      theme.colors[themeColor].startsWith('#') ? 'uppercase' : null};
  }
`;

const ColorPreview = ({colors}: {colors: ColorFoundations}): JSX.Element => (
  <LegacyBlock display="flex" flexWrap>
    {Object.entries(colors).map(([key, value]) => (
      <LegacyBlock
        key={key + value}
        width="15rem"
        margin="sizing050"
        display="flex"
        alignItems="center"
      >
        <CircleSwatch color={value} />
        <LegacyBlock display="inline" marginLeft="sizing030" color="inkBase">
          {key}
        </LegacyBlock>
      </LegacyBlock>
    ))}
  </LegacyBlock>
);

const Colors = (): JSX.Element => (
  <LegacyBlock font="body020">
    <Header>Color Foundations</Header>
    <ExampleWrapper>
      <ColorPreview colors={colorFoundations} />
    </ExampleWrapper>
  </LegacyBlock>
);

export default Colors;
