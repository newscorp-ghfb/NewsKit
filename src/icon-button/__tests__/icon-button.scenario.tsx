import * as React from 'react';

import {ButtonSize} from '../../button';
import {IconButton} from '..';
import {styled} from '../../utils/style';
import {Pause, Email, IconFilledLink} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {StorybookSubHeading} from '../../test/storybook-comps';

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

enum IconButtonPrimaryStyles {
  Solid = 'iconButtonSolidPrimary',
  Outlined = 'iconButtonOutlinedPrimary',
  Minimal = 'iconButtonMinimalPrimary',
}

enum IconButtonSecondaryStyles {
  Solid = 'iconButtonSolidSecondary',
  Outlined = 'iconButtonOutlinedSecondary',
  Minimal = 'iconButtonMinimalSecondary',
}

enum IconButtonNegativeStyles {
  Solid = 'iconButtonSolidNegative',
  Outlined = 'iconButtonOutlinedNegative',
  Minimal = 'iconButtonMinimalNegative',
}

enum IconButtonPositiveStyles {
  Solid = 'iconButtonSolidPositive',
  Outlined = 'iconButtonOutlinedPositive',
  Minimal = 'iconButtonMinimalPositive',
}

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

export default {
  name: 'icon-button',
  children: [
    {
      name: 'icon-button-sizes',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>Icon Button Size</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="sizing070"
              spaceInline="sizing070"
              wrap="wrap"
            >
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
    },
    {
      name: 'icon-button-intent-primary',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>Icon Button Intent Primary</StorybookSubHeading>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(IconButtonPrimaryStyles).map(style => {
              const stylePreset =
                IconButtonPrimaryStyles[
                  style as keyof typeof IconButtonPrimaryStyles
                ];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    spaceInline="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block data-state="Default">
                      <IconButton
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Pause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Email />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        overrides={{stylePreset}}
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
    },
    {
      name: 'icon-button-intent-secondary',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Icon Button Intent Secondary
          </StorybookSubHeading>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(IconButtonSecondaryStyles).map(style => {
              const stylePreset =
                IconButtonSecondaryStyles[
                  style as keyof typeof IconButtonSecondaryStyles
                ];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    spaceInline="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block data-state="Default">
                      <IconButton
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Pause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Email />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        overrides={{stylePreset}}
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
    },
    {
      name: 'icon-button-intent-negative',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>Icon Button Intent Negative</StorybookSubHeading>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(IconButtonNegativeStyles).map(style => {
              const stylePreset =
                IconButtonNegativeStyles[
                  style as keyof typeof IconButtonNegativeStyles
                ];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    spaceInline="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block data-state="Default">
                      <IconButton
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Pause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Email />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        overrides={{stylePreset}}
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
    },
    {
      name: 'icon-button-intent-positive',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>Icon Button Intent Positive</StorybookSubHeading>
          <Grid>
            <Cell xsHidden sm={3}>
              <Stack>
                <h3>State</h3>
                {states.map(state => (
                  <Label>{state}</Label>
                ))}
              </Stack>
            </Cell>
            {Object.keys(IconButtonPositiveStyles).map(style => {
              const stylePreset =
                IconButtonPositiveStyles[
                  style as keyof typeof IconButtonPositiveStyles
                ];

              return (
                <Cell xs={4} sm={3}>
                  <Stack
                    spaceInline="sizing020"
                    stackDistribution={StackDistribution.SpaceEvenly}
                  >
                    <h3>{style}</h3>
                    <Block data-state="Default">
                      <IconButton
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Pause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <Email />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        overrides={{stylePreset}}
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
    },
  ],
};
