import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Button} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {IconFilledAddCircle, IconFilledLaunch} from '../../icons';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {TextBlock} from '../../text-block';

const DEFAULT_BUTTON_COLS = 'repeat(auto-fill, minmax(100px, 1fr))';

const InverseContainer = styled.div`
  margin: -16px;
  ${getColorCssFromTheme('backgroundColor', 'inkContrast')};
  ${getColorCssFromTheme('color', 'inkInverse')};
`;

export const StoryButtonDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <Button>Button</Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonDefault.storyName = 'Default';

export const StoryButtonSize = () => (
  <StorybookPage columns={DEFAULT_BUTTON_COLS}>
    <StorybookCase title="Small">
      <Button size="small">Button</Button>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Button size="medium">Button</Button>
    </StorybookCase>
    <StorybookCase title="Large">
      <Button size="large">Button</Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonSize.storyName = 'Size';

export const StoryButtonPrimary = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Primary';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `button${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody030"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <Button overrides={{stylePreset}}>Button</Button>
              </StorybookCase>
              <StorybookCase title="Focus">
                <Button overrides={{stylePreset}} autoFocus>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <Button overrides={{stylePreset}} disabled>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Loading">
                <Button
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  Button
                </Button>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryButtonPrimary.storyName = 'Primary';

export const StoryButtonSecondary = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Secondary';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `button${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody020"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <Button overrides={{stylePreset}}>Button</Button>
              </StorybookCase>
              <StorybookCase title="Focus">
                <Button overrides={{stylePreset}} autoFocus>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <Button overrides={{stylePreset}} disabled>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Loading">
                <Button
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  Button
                </Button>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryButtonSecondary.storyName = 'Secondary';

export const StoryButtonNegative = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Negative';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `button${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody020"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <Button overrides={{stylePreset}}>Button</Button>
              </StorybookCase>
              <StorybookCase title="Focus">
                <Button overrides={{stylePreset}} autoFocus>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <Button overrides={{stylePreset}} disabled>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Loading">
                <Button
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  Button
                </Button>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryButtonNegative.storyName = 'Negative';

export const StoryButtonPositive = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Positive';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `button${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody020"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <Button overrides={{stylePreset}}>Button</Button>
              </StorybookCase>
              <StorybookCase title="Focus">
                <Button overrides={{stylePreset}} autoFocus>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <Button overrides={{stylePreset}} disabled>
                  Button
                </Button>
              </StorybookCase>
              <StorybookCase title="Loading">
                <Button
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  Button
                </Button>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryButtonPositive.storyName = 'Positive';

export const StoryButtonInverse = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Inverse';
  return (
    <InverseContainer>
      <StorybookPage
        overrides={{
          paddingBlock: 'space070',
          marginInline: 'space020',
          paddingInline: 'space050',
        }}
        rowGap="space090"
      >
        {appearances.map(appearance => {
          const stylePreset = `button${appearance}${intent}`;
          return (
            <GridLayoutItem key={appearance + intent} column="1/-1">
              <TextBlock
                typographyPreset="utilityBody020"
                marginBlockEnd="space070"
              >
                {appearance}
              </TextBlock>
              <GridLayout
                rowGap="space080"
                columnGap="space080"
                columns={DEFAULT_BUTTON_COLS}
              >
                <StorybookCase inverse title="Default">
                  <Button overrides={{stylePreset}}>Button</Button>
                </StorybookCase>
                <StorybookCase inverse title="Focus">
                  <Button overrides={{stylePreset}} autoFocus>
                    Button
                  </Button>
                </StorybookCase>
                <StorybookCase inverse title="Disabled">
                  <Button overrides={{stylePreset}} disabled>
                    Button
                  </Button>
                </StorybookCase>
                <StorybookCase inverse title="Loading">
                  <Button
                    overrides={{
                      stylePreset,
                      loadingIndicator: {
                        stylePreset: `indeterminateProgressIndicator${intent}`,
                      },
                    }}
                    loading
                  >
                    Button
                  </Button>
                </StorybookCase>
              </GridLayout>
            </GridLayoutItem>
          );
        })}
      </StorybookPage>
    </InverseContainer>
  );
};
StoryButtonInverse.storyName = 'Inverse';

export const StoryButtonWidth = () => (
  <StorybookPage>
    <StorybookCase title="Full width">
      <Button overrides={{width: '100%'}}>Button</Button>
    </StorybookCase>
    <StorybookCase title="Fixed width">
      <Button>Button</Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonWidth.storyName = 'Width';

export const StoryButtonVariations = () => (
  <StorybookPage columns="1/-1">
    <GridLayout
      columns="repeat(auto-fill, minmax(200px, 1fr))"
      rowGap="space040"
    >
      <StorybookCase title="Leading icon">
        <Button>
          <IconFilledAddCircle /> Button
        </Button>
      </StorybookCase>
      <StorybookCase title="Trailing icon">
        <Button>
          Button <IconFilledAddCircle />
        </Button>
      </StorybookCase>
      <StorybookCase title="Both">
        <Button>
          <IconFilledAddCircle />
          Button
          <IconFilledAddCircle />
        </Button>
      </StorybookCase>
    </GridLayout>
    <StorybookCase title="Button as a link">
      <Button href="https://www.newskit.co.uk/">
        Visit newskit.co.uk <IconFilledLaunch />
      </Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonVariations.storyName = 'Variations';

export const StoryButtonBreakpoint = () => (
  <StorybookPage>
    <StorybookCase title="Negative XS - Positive MD">
      <Button
        overrides={{
          stylePreset: {
            xs: 'buttonSolidNegative',
            md: 'buttonSolidPositive',
          },
        }}
      >
        Button
      </Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonBreakpoint.storyName = 'Breakpoint';

export const StoryButtonTransitions = () => (
  <StorybookPage>
    <StorybookCase title="Default transition preset">
      <Button>Button</Button>
    </StorybookCase>
    <StorybookCase title="Transition preset overrides">
      <Button overrides={{transitionPreset: 'customBackgroundColorChange'}}>
        Button
      </Button>
    </StorybookCase>
    <StorybookCase title="Two transition preset overrides">
      <Button
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
    </StorybookCase>
    <StorybookCase title="Extend on transitionDuration">
      <Button
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
    </StorybookCase>
  </StorybookPage>
);
StoryButtonTransitions.storyName = 'Transitions';

export const StoryButtonStylingOverrides = () => (
  <StorybookPage>
    <StorybookCase title="Style">
      <Button overrides={{stylePreset: 'stylingOverrides'}}>Button</Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonStylingOverrides.storyName = 'Styling overrides';

export const StoryButtonOverrides = () => (
  <StorybookPage>
    <GridLayoutItem column="1/-1">
      <StorybookCase title="Logical props">
        <Button
          overrides={{paddingBlock: 'space060', paddingInline: 'space050'}}
        >
          Button
        </Button>
      </StorybookCase>
    </GridLayoutItem>
    <StorybookCase title="Icon and inline overridden size">
      <Button size="large">
        <IconFilledAddCircle overrides={{size: 'iconSize020'}} />
        Button
        <IconFilledAddCircle overrides={{size: 'iconSize040'}} />
      </Button>
    </StorybookCase>
    <StorybookCase title="Icon and inline overridden size">
      <Button size="large">
        <IconFilledAddCircle />
        Button
        <IconFilledAddCircle overrides={{size: 'iconSize040'}} />
      </Button>
    </StorybookCase>

    <StorybookCase title="Fixed width and overflow">
      <Button
        overrides={{
          stylePreset: 'buttonOutlinedPrimary',
          width: 'sizing120',
          height: 'sizing090',
        }}
      >
        Small fixed-width button and overflow with long long text
      </Button>
    </StorybookCase>

    <StorybookCase title="Custom outline">
      <Button overrides={{stylePreset: 'customOutlineStyle'}}>Button</Button>
    </StorybookCase>
  </StorybookPage>
);
StoryButtonOverrides.storyName = 'Overrides';

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
          outlineOffset: '10px',
        },
      },
      stylingOverrides: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
    },
  },
};

export default {
  title: 'Components/Button',
  component: Button,
  disabledRules: ['color-contrast'],
  parameters: {
    nkDocs: {
      title: 'Button',
      url: 'https://newskit.co.uk/components/button',
      description:
        'Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          buttonCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
