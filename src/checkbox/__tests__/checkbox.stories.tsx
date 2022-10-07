import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookLabel,
} from '../../test/storybook-comps';

import {Checkbox} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled} from '../../utils';
import {Cell, Grid, GridLayout} from '../..';
import {IconFilledCancel, IconFilledStarOutline} from '../../icons';
import {CheckboxIconProps} from '../types';
import {states, sizes} from './helpers';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {defaultFocusVisible} from '../../utils/default-focus-visible';

const checkboxCustomThemeObject: CreateThemeArgs = {
  name: 'checkbox-custom-theme',
  overrides: {
    stylePresets: {
      customCheckboxInput: {
        base: {
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderRadius: '50%',
          backgroundColor: 'orange',
          iconColor: 'red',
        },
        hover: {
          backgroundColor: 'blue',
        },
        'focus-visible': defaultFocusVisible,
      },
      customCheckboxFeedback: {
        base: {
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '50%',
        },
      },
      customIconFilledCancel: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.interactiveInput010}}',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          borderStyle: 'solid',
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
          backgroundColor: '{{colors.interactiveInput010}}',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          borderStyle: 'solid',
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
          backgroundColor: '{{colors.interactiveInput010}}',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          borderStyle: 'solid',
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
          backgroundColor: '{{colors.interactiveInput010}}',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          borderStyle: 'solid',
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
  },
};

const Container = styled.div`
  margin: 10px;
  display: flex;
`;

export const StoryCheckboxDefault = () => (
  <>
    <StorybookHeading>Checkbox</StorybookHeading>
    <Grid>
      <Cell xs={8} sm={4}>
        <StorybookSubHeading>States</StorybookSubHeading>

        {states.map(([id, {checked, ...props}]) => (
          <Container>
            <Checkbox {...props} defaultChecked={checked} label={id} />
          </Container>
        ))}
      </Cell>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Sizes</StorybookSubHeading>

        {sizes.map(size => (
          <>
            <Container>
              <Checkbox size={size} label={size} />
            </Container>
            <Container>
              <Checkbox size={size} label={`${size}-checked`} checked />
            </Container>
          </>
        ))}
      </Cell>
    </Grid>
  </>
);

StoryCheckboxDefault.storyName = 'checkbox-default';

export const StoryCheckboxLabel = () => {
  const shortLabel = 'Short label';
  const longLabel =
    'Very long label... The array of dependencies is not passed as arguments to the effect function.';
  return (
    <>
      <StorybookHeading>Checkbox - Labels</StorybookHeading>
      <Grid>
        {sizes.map(size => (
          <Cell xs={8} sm={4}>
            <StorybookSubHeading>{`Size ${size}`}</StorybookSubHeading>
            <Container>
              <Checkbox label={shortLabel} size={size} />
            </Container>
            <hr />
            <Container>
              <Checkbox label={longLabel} size={size} />
            </Container>
            <hr />
            <Container>
              <Checkbox label={shortLabel} size={size} labelPosition="start" />
            </Container>
            <hr />
            <Container>
              <Checkbox label={longLabel} size={size} labelPosition="start" />
            </Container>
          </Cell>
        ))}
      </Grid>

      <StorybookSubHeading>No label</StorybookSubHeading>
      <Container>
        <Checkbox id="custom-label" />
        {}
        <StorybookLabel htmlFor="custom-label"> Custom label</StorybookLabel>
      </Container>
    </>
  );
};

StoryCheckboxLabel.storyName = 'checkbox-label';

const CustomCheck = ({checked}: CheckboxIconProps) =>
  checked ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'customIconFilledCancel'}}
    />
  );
export const StoryCheckboxOverrides = () => (
  <>
    <StorybookHeading>Checkbox</StorybookHeading>
    <StorybookSubHeading>Style overrides</StorybookSubHeading>
    <Container>
      <Checkbox
        value="10"
        label="Style overrides"
        overrides={{
          spaceStack: 'space060',
          input: {
            stylePreset: 'customCheckboxInput',
            size: '100px',
          },
          feedback: {
            size: '120px',
            stylePreset: 'customCheckboxFeedback',
          },
          label: {
            typographyPreset: 'utilityHeading010',
            stylePreset: 'inkSubtle',
          },
          icon: {
            size: 'iconSize050',
          },
        }}
      />
    </Container>
    <StorybookSubHeading>Icon Prop override</StorybookSubHeading>
    <Container>
      <Checkbox
        label="prop overrides"
        overrides={{
          icon: {
            props: {
              overrides: {
                size: 'iconSize010',
              },
            },
          },
        }}
      />
    </Container>
    <StorybookSubHeading>Icon Component override</StorybookSubHeading>
    <Container>
      <Checkbox
        label="component overrides"
        overrides={{
          icon: CustomCheck,
        }}
      />
    </Container>
    <StorybookSubHeading>Icon Override</StorybookSubHeading>
    <Container>
      <Checkbox
        label="overrides"
        overrides={{
          icon: {
            stylePreset: 'bannerInformative',
            size: 'iconSize030',
          },
        }}
      />
    </Container>
    <StorybookSubHeading>Logical Overrides</StorybookSubHeading>
    <Container>
      <Checkbox
        label="overrides"
        overrides={{
          marginBlockEnd: 'space030',
          paddingBlock: 'space030',
        }}
      />
    </Container>
  </>
);
StoryCheckboxOverrides.storyName = 'checkbox-overrides';

export const StoryCheckboxTransitions = () => (
  <>
    <StorybookSubHeading>Checkbox with Transition Presets</StorybookSubHeading>
    <Container>
      <GridLayout rowGap="space040">
        <Checkbox defaultChecked label="default transition" />
        <Checkbox
          overrides={{
            input: {
              transitionPreset: [
                'customBackgroundColorChange',
                'customBorderColourChange',
              ],
            },
          }}
          defaultChecked
          label="with overrides using custom transitions"
        />
        <Checkbox
          overrides={{
            input: {
              transitionPreset: [
                {
                  extend: 'backgroundColorChange',
                  base: {
                    transitionDuration: '{{motions.motionDuration050}}',
                  },
                },
                {
                  extend: 'borderColorChange',
                  base: {
                    transitionDuration: '{{motions.motionDuration010}}',
                  },
                },
              ],
            },
          }}
          defaultChecked
          label="with overrides using extend on transitionDuration"
        />
      </GridLayout>
    </Container>
  </>
);

StoryCheckboxTransitions.storyName = 'checkbox-transitions';

export const StoryCheckboxOutlineOverride = () => (
  <>
    <StorybookSubHeading>Checkbox Outline override</StorybookSubHeading>
    <Container>
      <GridLayout rowGap="space040">
        <Checkbox
          overrides={{
            input: {
              stylePreset: 'customOutlineColor',
            },
          }}
          label="Custom Color"
        />
        <Checkbox
          overrides={{
            input: {
              stylePreset: 'customOutlineStyle',
            },
          }}
          label="Custom Style"
        />
        <Checkbox
          overrides={{
            input: {
              stylePreset: 'customOutlineWidth',
            },
          }}
          label="Custom Width"
        />
        <Checkbox
          overrides={{
            input: {
              stylePreset: 'customOutlineOffset',
            },
          }}
          label="Custom Offset"
        />
      </GridLayout>
    </Container>
  </>
);

StoryCheckboxOutlineOverride.storyName = 'checkbox-outline-override';

export default {
  title: 'Components/checkbox',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          checkboxCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
