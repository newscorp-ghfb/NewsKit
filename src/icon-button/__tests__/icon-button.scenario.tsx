import * as React from 'react';

import {ButtonSize} from '../../button';
import {IconButton} from '..';
import {styled} from '../../utils/style';
import {IconFilledPause, IconFilledEmail, IconFilledLink} from '../../icons';
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
              <IconButton aria-label="Email icon" size={ButtonSize.Small}>
                <IconFilledEmail />
              </IconButton>
              <IconButton aria-label="Email icon" size={ButtonSize.Medium}>
                <IconFilledEmail />
              </IconButton>
              <IconButton aria-label="Email icon" size={ButtonSize.Large}>
                <IconFilledEmail />
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
                        aria-label="Pause icon"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledPause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        aria-label="Link icon"
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        aria-label="Email icon"
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledEmail />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        aria-label="Loading indicator"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                        isLoading
                      />
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
                        aria-label="Pause icon"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledPause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        aria-label="Link icon"
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        aria-label="Email icon"
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledEmail />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        aria-label="Loading indicator"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                        isLoading
                      />
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
                        aria-label="Pause icon"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledPause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        aria-label="Link icon"
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        aria-label="Email icon"
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledEmail />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        aria-label="Loading indicator"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                        isLoading
                      />
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
                        aria-label="Pause icon"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledPause />
                      </IconButton>
                    </Block>

                    <Block data-state="Focused">
                      <IconButton
                        aria-label="Link icon"
                        autoFocus
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledLink />
                      </IconButton>
                    </Block>

                    <Block data-state="Disabled">
                      <IconButton
                        aria-label="Email icon"
                        disabled
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                      >
                        <IconFilledEmail />
                      </IconButton>
                    </Block>

                    <Block data-state="Loading">
                      <IconButton
                        aria-label="Loading indicator"
                        overrides={{stylePreset}}
                        size={ButtonSize.Medium}
                        isLoading
                      >
                        <IconFilledEmail />
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
