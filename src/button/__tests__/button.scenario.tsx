import * as React from 'react';

import {Button, IconButton} from '..';
import {styled} from '../../utils/style';
import {ButtonSize, RegularButtonSize} from '../types';
import {Pause, Email, CopyLink} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {newskitLightTheme, IconSizeKeys} from '../../themes';

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

  ${getMediaQueryFromTheme('xs')} {
    &::before {
      content: none;
    }
  }
`;

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

const regularButtonSizes: Array<{
  buttonSize: RegularButtonSize;
  iconSize: IconSizeKeys;
}> = [
  {buttonSize: ButtonSize.Small, iconSize: 'iconSize010'},
  {buttonSize: ButtonSize.Large, iconSize: 'iconSize020'},
];

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

export default {
  name: 'button',
  children: [
    {
      component: () => (
        <React.Fragment>
          <h2>Button Size</h2>
          <Container>
            <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
              <Button>Small button</Button>
              <Button size={ButtonSize.Large}>Large button</Button>
            </Stack>
          </Container>
        </React.Fragment>
      ),
      name: 'button-size',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button States</h2>
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
              const stylePreset =
                ButtonStyle[style as keyof typeof ButtonStyle];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    space="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block theme={newskitLightTheme} data-state="Default">
                      <Button stylePreset={stylePreset}>Button</Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Focused">
                      <Button autoFocus stylePreset={stylePreset}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Disabled">
                      <Button disabled stylePreset={stylePreset}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Loading">
                      <Button stylePreset={stylePreset} isLoading>
                        Button
                      </Button>
                    </Block>
                  </Stack>
                </Cell>
              );
            })}
          </Grid>
        </React.Fragment>
      ),
      name: 'button-states',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button with icon placed before text</h2>
          <Container>
            {[Pause, Email, CopyLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" space="sizing060">
                  {regularButtonSizes.map(button => (
                    <Button size={button.buttonSize}>
                      <IconType size={button.iconSize} />
                      Button
                    </Button>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
        </React.Fragment>
      ),
      name: 'button-with-icon-placed-before-text',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button with icon placed after text</h2>
          <Container>
            {[Pause, Email, CopyLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" space="sizing060">
                  {regularButtonSizes.map(button => (
                    <Button size={button.buttonSize}>
                      Button
                      <IconType size={button.iconSize} />
                    </Button>
                  ))}
                </Stack>
              </Spacer>
            ))}
          </Container>
        </React.Fragment>
      ),
      name: 'button-with-icon-placed-after-text',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Icon Button Size</h2>
          <Container>
            <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
              <IconButton size={ButtonSize.Small}>
                <Email />
              </IconButton>
              <IconButton size={ButtonSize.Medium}>
                <Email />
              </IconButton>
              <IconButton size={ButtonSize.Large}>
                <Email />
              </IconButton>
            </Stack>
          </Container>
        </React.Fragment>
      ),
      name: 'icon-button-sizes',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Icon Button States</h2>
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
                <Cell xs={4} sm={3}>
                  <Stack
                    space="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block theme={newskitLightTheme} data-state="Default">
                      <IconButton
                        stylePreset={stylePreset}
                        size={ButtonSize.Medium}
                      >
                        <Pause />
                      </IconButton>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Focused">
                      <IconButton
                        autoFocus
                        stylePreset={stylePreset}
                        size={ButtonSize.Medium}
                      >
                        <CopyLink />
                      </IconButton>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Disabled">
                      <IconButton
                        disabled
                        stylePreset={stylePreset}
                        size={ButtonSize.Medium}
                      >
                        <Email />
                      </IconButton>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Loading">
                      <IconButton
                        stylePreset={stylePreset}
                        size={ButtonSize.Medium}
                        isLoading
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
      ),
      name: 'icon-button-states',
      type: 'story',
    },
  ],
};
