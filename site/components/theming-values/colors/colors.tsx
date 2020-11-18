import * as React from 'react';
import {Grid, Cell, useTheme, Theme, GridProps, P, Block} from 'newskit';
import {palettes as newskitLightPaletteColors} from 'newskit/theme/foundations/colors';
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
  isOverlay?: boolean;
}> = ({colors: unsortedColors, Swatch, gridProps, isOverlay}) => {
  const colors = unsortedColors;
  const groupTitle =
    colors[0].group[0].toUpperCase() + colors[0].group.substring(1);

  const description = {
    ink:
      'Ink is a colour applied to typography and iconography. As a default within the NewsKit design system, there are several variations of ink that are available, each associated with a specific purpose within the design system.',
    interface:
      'Interface background colours applied to fills and borders on background UI elements including screen background and card background.',
    interactive:
      'Interactive colours are used to indicate and display interactions of certain components such as buttons, links and switches. Each set of interactive colours are used in combination to apply the differing states needed. The base (resting) state uses the 030, the hover 040 and the active 050. The 010 and 020 are used for loading/progress states.',
  };

  return (
    <div>
      <Block spaceStack="space050">
        <H3>{groupTitle}</H3>
      </Block>
      <Block spaceStack="space050">
        <P>
          {description[groupTitle.toLowerCase() as keyof typeof description]}
        </P>
      </Block>
      <Grid {...gridProps}>
        {colors.map((color, index, {length}) => (
          <Swatch
            color={color}
            index={index}
            length={length}
            isOverlay={isOverlay}
          />
        ))}
      </Grid>
    </div>
  );
};

const getPaletteColorObjects = (theme: Theme) =>
  Object.entries(theme.colors)
    .filter(([name]) => paletteColorNames.includes(name))
    .map(mapColorObjects(theme));

const getPaletteOverlayObjects = (theme: Theme) =>
  Object.entries(theme.overlays).map(mapColorObjects(theme));

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
          <Cell xs={12} lg={6} xl={4}>
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

export const ColorFoundations = ({
  isOverlay,
}: {
  isOverlay: boolean;
}): JSX.Element => {
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

  const foundations = isOverlay ? theme.overlays : colorFoundations;
  const foundationObjects = Object.entries({...foundations})
    .map(
      mapColorObjects(
        theme,
        createPaletteColorMap(
          isOverlay
            ? getPaletteOverlayObjects(theme)
            : getPaletteColorObjects(theme),
        ),
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
            isOverlay={isOverlay}
          />
        </Cell>
      ))}
    </Grid>
  );
};
