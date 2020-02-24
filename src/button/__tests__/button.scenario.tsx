import * as React from 'react';

import {Button, IconButton} from '..';
import {styled} from '../../utils/style';
import {ButtonSize} from '../types';
import {Pause, Email, CopyLink} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {newskitLightTheme, IconSizeKeys} from '../../themes';

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

enum ButtonStyle {
  Solid = 'buttonSolidPrimary',
  Outlined = 'buttonOutlinedPrimary',
  Minimal = 'buttonMinimalPrimary',
}

enum IconButtonStyle {
  Solid = 'iconButtonSolidPrimary',
  Outlined = 'iconButtonOutlinedPrimary',
  Minimal = 'iconButtonMinimalPrimary',
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
          <Email />
        </IconButton>
        <IconButton $size={ButtonSize.Medium}>
          <Email />
        </IconButton>
        <IconButton $size={ButtonSize.Large}>
          <Email />
        </IconButton>
      </Stack>
    </Container>

    <h1>Button preset types</h1>
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
      {Object.keys(IconButtonStyle).map(style => {
        const stylePreset =
          IconButtonStyle[style as keyof typeof IconButtonStyle];

        return (
          <Cell xs={12} sm={3}>
            <Stack
              space="sizing020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{style}</h3>
              <Block theme={newskitLightTheme} data-state="Default">
                <IconButton
                  $stylePreset={stylePreset}
                  $size={ButtonSize.Medium}
                >
                  <Pause />
                </IconButton>
              </Block>

              <Block theme={newskitLightTheme} data-state="Focused">
                <IconButton
                  autoFocus
                  $stylePreset={stylePreset}
                  $size={ButtonSize.Medium}
                >
                  <CopyLink />
                </IconButton>
              </Block>

              <Block theme={newskitLightTheme} data-state="Disabled">
                <IconButton
                  disabled
                  $stylePreset={stylePreset}
                  $size={ButtonSize.Medium}
                >
                  <Email />
                </IconButton>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </React.Fragment>
);
