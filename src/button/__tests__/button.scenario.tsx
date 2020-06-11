import * as React from 'react';

import {Button} from '..';
import {styled} from '../../utils/style';
import {ButtonSize} from '../types';
import {Pause, Email, CopyLink} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {newskitLightTheme, IconSizeKeys} from '../../themes';

const Container = styled.div`
  margin: 24px;
`;

const Border = styled.div`
  border: solid 1px red;
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

enum ButtonPrimaryStyles {
  Solid = 'buttonSolidPrimary',
  Outlined = 'buttonOutlinedPrimary',
  Minimal = 'buttonMinimalPrimary',
}

enum ButtonSecondaryStyles {
  Solid = 'buttonSolidSecondary',
  Outlined = 'buttonOutlinedSecondary',
  Minimal = 'buttonMinimalSecondary',
}

enum ButtonNegativeStyles {
  Solid = 'buttonSolidNegative',
  Outlined = 'buttonOutlinedNegative',
  Minimal = 'buttonMinimalNegative',
}

enum ButtonPositiveStyles {
  Solid = 'buttonSolidPositive',
  Outlined = 'buttonOutlinedPositive',
  Minimal = 'buttonMinimalPositive',
}

const buttonSizes: Array<{
  buttonSize: ButtonSize;
  iconSize: IconSizeKeys;
}> = [
  {buttonSize: ButtonSize.Small, iconSize: 'iconSize010'},
  {buttonSize: ButtonSize.Medium, iconSize: 'iconSize020'},
  {buttonSize: ButtonSize.Large, iconSize: 'iconSize030'},
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
              <Button size={ButtonSize.Small}>Small button</Button>
              <Button size={ButtonSize.Medium}>Medium button</Button>
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
          <h2>Full-Width Button</h2>
          <Container>
            <Border>
              <Spacer>
                <Button size={ButtonSize.Small} overrides={{width: '100%'}}>
                  Small full-width button
                </Button>
              </Spacer>
              <Spacer>
                <Button size={ButtonSize.Medium} overrides={{width: '100%'}}>
                  Medium full-width button
                </Button>
              </Spacer>
              <Button size={ButtonSize.Large} overrides={{width: '100%'}}>
                Large full-width button
              </Button>
            </Border>
          </Container>
        </React.Fragment>
      ),
      name: 'full-width-button',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Fixed-Width Button</h2>
          <Container>
            <Border>
              <Spacer>
                <Button
                  size={ButtonSize.Small}
                  overrides={{width: 'sizing120'}}
                >
                  Small fixed-width button
                </Button>
              </Spacer>
              <Spacer>
                <Button
                  size={ButtonSize.Medium}
                  overrides={{width: 'sizing120'}}
                >
                  Medium fixed-width button
                </Button>
              </Spacer>
              <Button size={ButtonSize.Large} overrides={{width: 'sizing120'}}>
                Large fixed-width button
              </Button>
            </Border>
          </Container>
        </React.Fragment>
      ),
      name: 'fixed-width-button',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button Intent Primary</h2>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(ButtonPrimaryStyles).map(style => {
              const stylePreset =
                ButtonPrimaryStyles[style as keyof typeof ButtonPrimaryStyles];
              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    space="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block theme={newskitLightTheme} data-state="Default">
                      <Button overrides={{stylePreset}}>Button</Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Focused">
                      <Button autoFocus overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Disabled">
                      <Button disabled overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Loading">
                      <Button overrides={{stylePreset}} isLoading>
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
      name: 'button-intent-primary',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button Intent Secondary</h2>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(ButtonSecondaryStyles).map(style => {
              const stylePreset =
                ButtonSecondaryStyles[
                  style as keyof typeof ButtonSecondaryStyles
                ];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    space="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block theme={newskitLightTheme} data-state="Default">
                      <Button overrides={{stylePreset}}>Button</Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Focused">
                      <Button autoFocus overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Disabled">
                      <Button disabled overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Loading">
                      <Button overrides={{stylePreset}} isLoading>
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
      name: 'button-intent-secondary',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button Intent Negative</h2>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(ButtonNegativeStyles).map(style => {
              const stylePreset =
                ButtonNegativeStyles[
                  style as keyof typeof ButtonNegativeStyles
                ];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    space="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block theme={newskitLightTheme} data-state="Default">
                      <Button overrides={{stylePreset}}>Button</Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Focused">
                      <Button autoFocus overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Disabled">
                      <Button disabled overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Loading">
                      <Button overrides={{stylePreset}} isLoading>
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
      name: 'button-intent-negative',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button Intent Positive</h2>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(ButtonPositiveStyles).map(style => {
              const stylePreset =
                ButtonPositiveStyles[
                  style as keyof typeof ButtonPositiveStyles
                ];
              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    space="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block theme={newskitLightTheme} data-state="Default">
                      <Button overrides={{stylePreset}}>Button</Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Focused">
                      <Button autoFocus overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Disabled">
                      <Button disabled overrides={{stylePreset}}>
                        Button
                      </Button>
                    </Block>

                    <Block theme={newskitLightTheme} data-state="Loading">
                      <Button overrides={{stylePreset}} isLoading>
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
      name: 'button-intent-positive',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button with leading icon</h2>
          <Container>
            {[Pause, Email, CopyLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" space="sizing060">
                  {buttonSizes.map(button => (
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
      name: 'button-with-leading-icon',
      type: 'story',
    },
    {
      component: () => (
        <React.Fragment>
          <h2>Button with trailing icon</h2>
          <Container>
            {[Pause, Email, CopyLink].map(IconType => (
              <Spacer>
                <Stack flow="horizontal-center" space="sizing060">
                  {buttonSizes.map(button => (
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
      name: 'button-with-trailing-icon',
      type: 'story',
    },
  ],
};
