import * as React from 'react';
import {Grid, Cell, useTheme, Theme, GridProps} from 'newskit';
import {palettes as newskitLightPaletteColors} from 'newskit/theme/foundations/colors';
import {ColorPalettesWrapper, ColorSetWrapper} from './styled';
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

  return (
    <div>
      <Grid {...gridProps} xsColumnGutter="space080">
        {colors.map((color, index, {length}) => (
          <Swatch
            key={color.name}
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
  const palletesNames = Object.keys(paletteObjects);

  return (
    <ColorPalettesWrapper>
      <Grid xsMargin="space000">
        {palettes.map((palette, index) => (
          <Cell xs={12} lg={12} xl={6} key={palletesNames[index]}>
            <ColorSetWrapper>
              <ColorSet
                gridProps={{xsMargin: 'sizing000', xsRowGutter: 'sizing000'}}
                Swatch={SwatchRow}
                colors={palette}
              />
            </ColorSetWrapper>
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
