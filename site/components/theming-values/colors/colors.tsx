import * as React from 'react';
import {Grid, Cell, useTheme, Theme, GridProps, P} from 'newskit';
import {palettes as newskitLightPaletteColors} from 'newskit/theme/foundations/colors';
import {overlays} from 'newskit/theme/foundations/overlays';
import {H3} from '../../markdown-elements';
import {ColorPalettesWrapper} from './styled';
import {
  mapColorObjects,
  createPaletteColorMap,
  groupColorObjects,
} from './utils';
import {ThemeColor} from './types';
import {SwatchRow, SwatchComponent, SwatchCard} from './swatches';

const paletteColorNames = Object.keys(newskitLightPaletteColors);

const ColorSet: React.FC<{
  colors: ThemeColor[];
  Swatch: SwatchComponent;
  gridProps?: GridProps;
}> = ({colors: unsortedColors, Swatch, gridProps}) => {
  const colors = unsortedColors;
  const groupTitle =
    colors[0].group[0].toUpperCase() + colors[0].group.substring(1);

  const description = {
    ink:
      'Ink is a colour applied to typography and iconography. As a default within the NewsKit design system, there are several variations of ink that are available, each associated with a specific purpose within the design system. NOTE: Remember to update the text styles if making changes to the ink colours.',
    semantic:
      'Semantic colours have an assigned meaning and are used in the UI as a method of communicating with the user. Used sparingly and intentionally, as a way of reinforcing hierarchies and creating clear modes of communication with our users. Too much colour can create cognitive overload, affecting users’ ability to interact with our products efficiently.',
    interface:
      'Interface background colours applied to fills and borders on background UI elements including screen background and card background. As a default within the NewsKit design system, there are 9 variations of interface background colours.',
    interactive:
      'Interactive colours are used to indicate and display interactions of certain elements in the UI. Each set of interactive colours are used in combination to apply all the differing states needed for an interactive UI element.',
    skeleton:
      'The skeleton colours are used as a loading state for UI elements before the page has fully loaded.',
    inverse:
      'The inverse colour token is used on elements which need to be placed on a darker background (in the light theme) or lighter background (in the dark theme). An example of this would be an inverse progress bar where you need a white track indicator.',
  };

  return (
    <div>
      <H3>{groupTitle}</H3>
      <P>{description[groupTitle.toLowerCase() as keyof typeof description]}</P>
      <Grid {...gridProps}>
        {colors.map((color, index, {length}) => (
          <Swatch color={color} index={index} length={length} />
        ))}
      </Grid>
    </div>
  );
};

const getPaletteColorObjects = (theme: Theme) =>
  Object.entries(theme.colors)
    .filter(([name]) => paletteColorNames.includes(name))
    .map(mapColorObjects(theme));

export const ColorPalettes: React.FC = () => {
  const theme = useTheme();
  const paletteObjects = getPaletteColorObjects(theme).reduce(
    groupColorObjects,
    {} as Record<string, ThemeColor[]>,
  );

  const palettes = Object.values(paletteObjects);

  return (
    <ColorPalettesWrapper>
      <Grid xsMargin="sizing000">
        {palettes.map(palette => (
          <Cell xs={12} md={6} lg={4}>
            <ColorSet
              gridProps={{xsMargin: 'sizing000', xsRowGutter: 'sizing000'}}
              Swatch={SwatchRow}
              colors={palette}
            />
          </Cell>
        ))}
      </Grid>
    </ColorPalettesWrapper>
  );
};

export const ColorFoundations = (): JSX.Element => {
  const theme = useTheme();
  const colorFoundations = Object.entries(theme.colors).reduce(
    (acc, [key, value]) => {
      if (!paletteColorNames.includes(key)) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, string>,
  );

  const foundationObjects = Object.entries({...colorFoundations, ...overlays})
    .map(
      mapColorObjects(
        theme,
        createPaletteColorMap(getPaletteColorObjects(theme)),
      ),
    )
    .reduce(groupColorObjects, {} as Record<string, ThemeColor[]>);

  const palettes = Object.values(foundationObjects);

  return (
    <Grid xsMargin="sizing000">
      {palettes.map(palette => (
        <Cell xs={12}>
          <ColorSet
            gridProps={{xsMargin: 'sizing000'}}
            Swatch={SwatchCard}
            colors={palette}
          />
        </Cell>
      ))}
    </Grid>
  );
};
