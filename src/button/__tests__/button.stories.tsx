import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Button} from '..';
import {
  getTypographyPresetFromTheme,
  getColorCssFromTheme,
  styled,
} from '../../utils/style';
import {ButtonOverrides, ButtonSize} from '../types';
import {IconFilledEmail} from '../../icons';
import {Stack} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {StorybookSubHeading, StorybookH3} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

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

const Label = styled.div<{hasBackground?: boolean}>`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getTypographyPresetFromTheme('utilityLabel020')};
  ${({hasBackground}) =>
    getColorCssFromTheme('color', hasBackground ? 'inkInverse' : 'inkBase')};
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const Background = styled.div<{hasBackground?: boolean}>`
  margin-top: 24px;
  ${({hasBackground}) =>
    hasBackground && getColorCssFromTheme('background', 'inkBase')};
`;

const buttonCustomThemeObject: CreateThemeArgs = {
  name: 'button-custom-theme',
  overrides: {
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '500ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customBorderColourChange: {
        base: {
          transitionProperty: 'border-color',
          transitionDuration: '500ms',
          transitionDelay: '0ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
    stylePresets: {
      myButton: {
        base: {
          borderColor: '#0a68c1',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '3px',
          color: '#0a68c1',
          backgroundColor: 'transparent',
        },
      },
      testButtonStylePresetWithBorders: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
          borderColor: '{{colors.blue020}}',
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        hover: {
          backgroundColor: '{{colors.amber070}}',
          borderColor: '{{colors.green040}}',
        },
        active: {
          backgroundColor: '{{colors.interactivePrimary050}}',
        },
        disabled: {
          backgroundColor: '{{colors.interactiveDisabled010}}',
        },
        loading: {
          backgroundColor: '{{colors.interactivePrimary020}}',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

interface IntentKindStylePreset {
  kind: string;
  intentStylePreset: string;
}

const buttonSizes: Array<{
  buttonSize: ButtonSize;
  iconSize: string;
}> = [
  {buttonSize: 'small', iconSize: 'iconSize040'},
  {buttonSize: 'medium', iconSize: 'iconSize050'},
  {buttonSize: 'large', iconSize: 'iconSize050'},
];

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

const ButtonIntentKindsScenario: React.FC<{
  hasBackground?: boolean;
  name: string;
  buttonIntents: IntentKindStylePreset[];
  overrides: ButtonOverrides;
}> = ({hasBackground = false, name, buttonIntents: buttonKinds, overrides}) => (
  <Background hasBackground={hasBackground}>
    <StorybookSubHeading stylePreset={hasBackground ? 'inkInverse' : undefined}>
      {name}
    </StorybookSubHeading>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <StorybookH3 stylePreset={hasBackground ? 'inkInverse' : undefined}>
            State
          </StorybookH3>
          {states.map(state => (
            <Label hasBackground={hasBackground}>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {buttonKinds.map(({kind, intentStylePreset: stylePreset}) => {
        const kindOverrides = {...overrides, stylePreset};
        return (
          <Cell xs={4} sm={3}>
            <Stack spaceInline="space020" stackDistribution="space-evenly">
              <StorybookH3
                stylePreset={hasBackground ? 'inkInverse' : undefined}
              >
                {kind}
              </StorybookH3>
              <Block data-state="Default">
                <Button overrides={kindOverrides}>Button</Button>
              </Block>
              <Block data-state="Focused">
                <Button autoFocus overrides={kindOverrides}>
                  Button
                </Button>
              </Block>
              <Block data-state="Disabled">
                <Button disabled overrides={kindOverrides}>
                  Button
                </Button>
              </Block>
              <Block data-state="Loading">
                <Button aria-label="Loading" overrides={kindOverrides} loading>
                  Button
                </Button>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </Background>
);

export const StoryButtonSize = () => (
  <>
    <StorybookSubHeading>Button Size</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space070"
        wrap="wrap"
      >
        <Button size="small">Small button</Button>
        <Button size="medium">Medium button</Button>
        <Button size="large">Large button</Button>
      </Stack>
    </Container>
  </>
);
StoryButtonSize.storyName = 'button-size';

export const StoryFullAndFixedWidthButton = () => (
  <>
    <StorybookSubHeading>Full-Width Button</StorybookSubHeading>
    <Container>
      <Border>
        <Spacer>
          <Button size="small" overrides={{width: '100%'}}>
            Small full-width button
          </Button>
        </Spacer>
        <Spacer>
          <Button size="medium" overrides={{width: '100%'}}>
            Medium full-width button
          </Button>
        </Spacer>
        <Button size="large" overrides={{width: '100%'}}>
          Large full-width button
        </Button>
      </Border>
    </Container>
    <StorybookSubHeading>Fixed-Width Button</StorybookSubHeading>
    <Container>
      <Border>
        <Spacer>
          <Button size="small">Small fixed-width button</Button>
        </Spacer>
        <Spacer>
          <Button size="medium" overrides={{width: 'sizing120'}}>
            Medium fixed-width button
          </Button>
        </Spacer>
        <Button size="large" overrides={{width: 'sizing120'}}>
          Large fixed-width button
        </Button>
      </Border>
    </Container>
    <StorybookSubHeading>Fixed-Width and overflow</StorybookSubHeading>
    <Container>
      <Border>
        <Spacer>
          <Button
            size="small"
            overrides={{
              width: 'sizing120',
              height: 'sizing070',
              stylePreset: 'myButton',
            }}
          >
            Small fixed-width button and overflow with long long text
          </Button>
        </Spacer>
      </Border>
    </Container>
  </>
);
StoryFullAndFixedWidthButton.storyName = 'full-and-fixed-width-button';

export const StoryButtonIntentPrimary = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Primary"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidPrimary'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedPrimary'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalPrimary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    }}
  />
);
StoryButtonIntentPrimary.storyName = 'button-intent-primary';

export const StoryButtonIntentSecondary = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Secondary"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidSecondary'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedSecondary'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalSecondary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorSecondary',
      },
    }}
  />
);
StoryButtonIntentSecondary.storyName = 'button-intent-secondary';

export const StoryButtonIntentNegative = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Negative"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidNegative'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedNegative'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalNegative'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorNegative',
      },
    }}
  />
);
StoryButtonIntentNegative.storyName = 'button-intent-negative';

export const StoryButtonIntentPositive = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Positive"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidPositive'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedPositive'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalPositive'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPositive',
      },
    }}
  />
);
StoryButtonIntentPositive.storyName = 'button-intent-positive';

export const StoryButtonInverse = () => (
  <ButtonIntentKindsScenario
    hasBackground
    name="Button Inverse"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidInverse'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedInverse'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalInverse'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorInverse',
      },
    }}
  />
);
StoryButtonInverse.storyName = 'button-inverse';

export const StoryButtonWithIcons = () => (
  <>
    <StorybookSubHeading>Button with leading icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        wrap="wrap"
        spaceInline="space040"
        spaceStack="space020"
      >
        {buttonSizes.map(button => (
          <Button size={button.buttonSize}>
            <IconFilledEmail />
            Button
          </Button>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>Button with trailing icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        wrap="wrap"
        spaceInline="space040"
        spaceStack="space020"
      >
        {buttonSizes.map(button => (
          <Button size={button.buttonSize}>
            Button
            <IconFilledEmail />
          </Button>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>
      Button with leading and trailing icon
    </StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        wrap="wrap"
        spaceInline="space040"
        spaceStack="space020"
      >
        {buttonSizes.map(button => (
          <Button size={button.buttonSize}>
            <IconFilledEmail />
            Button
            <IconFilledEmail />
          </Button>
        ))}
      </Stack>
    </Container>
  </>
);
StoryButtonWithIcons.storyName = 'button-with-icons';

export const StoryButtonWithIconSizeOverrides = () => (
  <>
    <StorybookSubHeading>
      Button with icon and inline overridden size
    </StorybookSubHeading>
    <Container>
      <Stack flow="horizontal-center" spaceInline="space060">
        <Button size={buttonSizes[0].buttonSize}>
          <IconFilledEmail />
          Button
          <IconFilledEmail overrides={{size: buttonSizes[0].iconSize}} />
        </Button>
      </Stack>
    </Container>
    <StorybookSubHeading>
      Button with icon and inline overridden size from overrides
    </StorybookSubHeading>
    <Container>
      <Stack flow="horizontal-center" spaceInline="space060">
        <Button
          size={buttonSizes[0].buttonSize}
          overrides={{iconSize: 'iconSize030'}}
        >
          <IconFilledEmail />
          Button
          <IconFilledEmail overrides={{size: buttonSizes[0].iconSize}} />
        </Button>
      </Stack>
    </Container>
  </>
);
StoryButtonWithIconSizeOverrides.storyName = 'button-with-icon-size-overrides';

export const StoryButtonStyleAtBreakpoints = () => (
  <>
    <StorybookSubHeading>Button style at breakpoints</StorybookSubHeading>
    <Container>
      <Button
        overrides={{
          stylePreset: {
            xs: 'buttonOutlinedNegative',
            md: 'buttonSolidPositive',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any,
        }}
      >
        Negative XS - Positive MD
      </Button>
    </Container>
  </>
);
StoryButtonStyleAtBreakpoints.storyName = 'button-style-at-breakpoints';

export const StoryButtonWithLogicalPropsOverrides = () => (
  <>
    <StorybookSubHeading>
      Button with logical padding overrides
    </StorybookSubHeading>
    <Border>
      <Button overrides={{paddingBlock: 'space050'}}>button</Button>
    </Border>
    <Spacer />
    <StorybookSubHeading>
      Button with logical margin overrides
    </StorybookSubHeading>
    <Border>
      <Button overrides={{marginBlock: 'space050'}}>button</Button>
    </Border>
  </>
);
StoryButtonWithLogicalPropsOverrides.storyName =
  'button-with-logical-props-overrides';

export const StoryButtonLink = () => (
  <>
    <StorybookSubHeading>Button link</StorybookSubHeading>
    <Container>
      <Button href="https://www.newskit.co.uk/">Visit newskit.co.uk</Button>
    </Container>
    <StorybookSubHeading>Button link with overrides</StorybookSubHeading>
    <Container>
      <Button
        href="https://www.newskit.co.uk/"
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        Another link to newskit.co.uk
      </Button>
    </Container>
    <StorybookSubHeading>Button link disabled</StorybookSubHeading>
    <Container>
      <Button href="https://www.newskit.co.uk/" disabled>
        Another link to newskit.co.uk
      </Button>
    </Container>
  </>
);
StoryButtonLink.storyName = 'button-link';

const buttonStyles: Array<{
  stylePreset: string;
  buttonKind: string;
}> = [
  {buttonKind: 'Solid', stylePreset: ''},
  {buttonKind: 'Outlined', stylePreset: 'buttonOutlinedPrimary'},
  {buttonKind: 'Minimal', stylePreset: 'buttonMinimalPrimary'},
];

export const StoryButtonWithTransitions = () => (
  <>
    <StorybookSubHeading>Button with Transition Presets</StorybookSubHeading>
    <Container>
      <StorybookSubHeading>Default Transition Presets</StorybookSubHeading>
      <Stack flow="horizontal-top" spaceInline="space070" spaceStack="space070">
        {buttonStyles.map(buttons => (
          <Stack spaceInline="space000">
            <Label>{buttons.buttonKind}</Label>
            <Button overrides={{stylePreset: buttons.stylePreset}}>
              Button
            </Button>
          </Stack>
        ))}
      </Stack>

      <StorybookSubHeading>
        Button with Transition Preset overrides
      </StorybookSubHeading>
      <Stack flow="horizontal-top" spaceInline="space070" spaceStack="space070">
        {buttonStyles.map(buttons => (
          <Stack spaceInline="space000">
            <Label>{buttons.buttonKind}</Label>
            <Button
              overrides={{
                stylePreset: buttons.stylePreset,
                transitionPreset: 'customBackgroundColorChange',
              }}
            >
              Button
            </Button>
          </Stack>
        ))}
      </Stack>
      <StorybookSubHeading>
        Button with two Transition Preset Overrides
      </StorybookSubHeading>
      <Button
        size="medium"
        overrides={{
          transitionPreset: [
            'customBorderColourChange',
            'customBackgroundColorChange',
          ],
          stylePreset: 'testButtonStylePresetWithBorders',
        }}
      >
        Button
      </Button>

      <StorybookSubHeading>
        Button with overrides using extend on transitionDuration
      </StorybookSubHeading>
      <Button
        size="medium"
        overrides={{
          stylePreset: 'testButtonStylePresetWithBorders',
          transitionPreset: {
            extend: 'backgroundColorChange',
            base: {
              transitionDuration: '{{motions.motionDuration050}}',
            },
          },
        }}
      >
        Button
      </Button>
      <StorybookSubHeading>
        Button with overrides on two presets using extend
      </StorybookSubHeading>
      <Button
        size="medium"
        overrides={{
          transitionPreset: [
            {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration030}}',
              },
            },
            {
              extend: 'borderColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          ],
          stylePreset: 'testButtonStylePresetWithBorders',
        }}
      >
        Button
      </Button>
    </Container>
  </>
);
StoryButtonWithTransitions.storyName = 'button-with-transition';

export const StoryButtonWithOutlineOverride = () => (
  <>
    <StorybookSubHeading>Button with custom outline</StorybookSubHeading>
    <StorybookSubHeading>Custom Color</StorybookSubHeading>
    <Container>
      <Button overrides={{stylePreset: 'customOutlineColor'}}>Button</Button>
    </Container>
    <StorybookSubHeading>Custom Style</StorybookSubHeading>
    <Container>
      <Button overrides={{stylePreset: 'customOutlineStyle'}}>Button</Button>
    </Container>
    <StorybookSubHeading>Custom Width</StorybookSubHeading>
    <Container>
      <Button overrides={{stylePreset: 'customOutlineWidth'}}>Button</Button>
    </Container>
    <StorybookSubHeading>Custom Offset</StorybookSubHeading>
    <Container>
      <Button overrides={{stylePreset: 'customOutlineOffset'}}>Button</Button>
    </Container>
  </>
);
StoryButtonWithOutlineOverride.storyName = 'button-with-outline-overrides';

export default {
  title: 'Components/button',
  component: () => 'None',
  disabledRules: ['color-contrast'],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          buttonCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
