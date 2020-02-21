import * as React from 'react';

import {Button, IconButton} from '..';
import {styled} from '../../utils/style';
import {ButtonSize} from '../types';
import {Pause, Email, CopyLink} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {
  borderRadiusPrimitives,
  BorderRadiusShape,
} from '../../themes/newskit-light/border-radius';
import {
  newskitLightTheme,
  IconSizeKeys,
  ThemeProvider,
  StylePresetStates,
  colorPrimitives,
  Theme,
  createTheme,
} from '../../themes';

export const name = 'button';

const Container = styled.div`
  margin: 24px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('sm')} {
    &::before {
      content: none;
    }
  }
`;

const Label = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const customTheme: Theme = createTheme('awesome-theme', {
  themeOverrider: () => ({
    stylePresets: {
      squaredStyle: {
        loading: {
          backgroundColor: colorPrimitives.red020,
          borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
          iconColor: colorPrimitives.green010,
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'blue',
        },
        base: {
          backgroundColor: colorPrimitives.blue040,
          borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
          iconColor: colorPrimitives.green040,
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'red',
        },
      } as StylePresetStates,
      semiRoundedStyle: {
        loading: {
          backgroundColor: colorPrimitives.red020,
          borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
          iconColor: colorPrimitives.green010,
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'blue',
        },
        base: {
          backgroundColor: colorPrimitives.blue040,
          borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
          iconColor: colorPrimitives.green040,
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'red',
        },
      } as StylePresetStates,
    },
  }),
});

enum ButtonStyle {
  Solid = 'buttonSolidPrimary',
  Outlined = 'buttonOutlinedPrimary',
  Minimal = 'buttonMinimalPrimary',
}

const states = ['Default', 'Focused', 'Disabled'];

export const component = () => (
  <React.Fragment>
    <h1>Buttons</h1>
    <h2>Size</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
        <Button>Small button</Button>
        <Button $size={ButtonSize.Medium}>Medium button</Button>
        <Button $size={ButtonSize.Large}>Large button</Button>
      </Stack>
    </Container>

    <h2>States</h2>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {Object.keys(ButtonStyle).map(style => {
        const stylePreset = ButtonStyle[style as keyof typeof ButtonStyle];

        return (
          <Cell xs={12} sm={3}>
            <Stack
              space="sizing020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{style}</h3>
              <Block theme={newskitLightTheme} data-state="Default">
                <Button $stylePreset={stylePreset}>Button</Button>
              </Block>

              <Block theme={newskitLightTheme} data-state="Focused">
                <Button autoFocus $stylePreset={stylePreset}>
                  Button
                </Button>
              </Block>

              <Block theme={newskitLightTheme} data-state="Disabled">
                <Button disabled $stylePreset={stylePreset}>
                  Button
                </Button>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>

    <h2>Icon with text</h2>
    <Container>
      {[Pause, Email, CopyLink].map(IconType => (
        <Spacer>
          <Stack flow="horizontal-center" space="sizing060">
            {[
              {buttonSize: ButtonSize.Small, iconSize: 'iconSize010'},
              {buttonSize: ButtonSize.Medium, iconSize: 'iconSize020'},
            ].map(button => (
              <Button $size={button.buttonSize}>
                <IconType $size={button.iconSize as IconSizeKeys} />
                Button
              </Button>
            ))}
          </Stack>
        </Spacer>
      ))}
    </Container>

    <h2>Icon placed after text</h2>
    <Container>
      {[Pause, Email, CopyLink].map(IconType => (
        <Spacer>
          <Stack flow="horizontal-center" space="sizing060">
            {[
              {buttonSize: ButtonSize.Small, iconSize: 'iconSize010'},
              {buttonSize: ButtonSize.Medium, iconSize: 'iconSize020'},
            ].map(button => (
              <Button $size={button.buttonSize}>
                Button
                <IconType $size={button.iconSize as IconSizeKeys} />
              </Button>
            ))}
          </Stack>
        </Spacer>
      ))}
    </Container>

    <h1>Icon Buttons</h1>
    <h2>Size</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
        <IconButton $size={ButtonSize.Small}>
          <Email $size="iconSize050" $color="amber100" />
        </IconButton>
        <IconButton $size={ButtonSize.Medium}>
          <Email $size="iconSize050" $color="amber100" />
        </IconButton>
        <IconButton $size={ButtonSize.Large}>
          <Email $size="iconSize050" $color="amber100" />
        </IconButton>
      </Stack>
    </Container>

    <ThemeProvider theme={customTheme}>
      <Container>
        <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
          <IconButton $size={ButtonSize.Small} $stylePreset="squaredStyle">
            <Email $size="iconSize050" $color="amber100" />
          </IconButton>
          <IconButton $size={ButtonSize.Medium} $stylePreset="squaredStyle">
            <Email $size="iconSize050" $color="amber100" />
          </IconButton>
          <IconButton $size={ButtonSize.Large} $stylePreset="squaredStyle">
            <Email $size="iconSize050" $color="amber100" />
          </IconButton>
        </Stack>
      </Container>
      <Container>
        <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
          <IconButton $size={ButtonSize.Small} $stylePreset="semiRoundedStyle">
            <Email $size="iconSize050" $color="amber100" />
          </IconButton>
          <IconButton $size={ButtonSize.Medium} $stylePreset="semiRoundedStyle">
            <Email $size="iconSize050" $color="amber100" />
          </IconButton>
          <IconButton $size={ButtonSize.Large} $stylePreset="semiRoundedStyle">
            <Email $size="iconSize050" $color="amber100" />
          </IconButton>
        </Stack>
      </Container>
    </ThemeProvider>

    <h2>States</h2>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {Object.keys(ButtonStyle).map(style => {
        const stylePreset = ButtonStyle[style as keyof typeof ButtonStyle];

        return (
          <Cell xs={12} sm={3}>
            <Stack
              space="sizing020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{style}</h3>
              <Block theme={newskitLightTheme} data-state="Default">
                <IconButton $stylePreset={stylePreset}>
                  <Pause $size="iconSize050" $color="amber100" />
                </IconButton>
              </Block>

              <Block theme={newskitLightTheme} data-state="Focused">
                <IconButton autoFocus $stylePreset={stylePreset}>
                  <CopyLink $size="iconSize050" $color="amber100" />
                </IconButton>
              </Block>

              <Block theme={newskitLightTheme} data-state="Disabled">
                <IconButton disabled $stylePreset={stylePreset}>
                  <Email $size="iconSize050" $color="amber100" />
                </IconButton>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </React.Fragment>
);
