import React from 'react';
import {Story as StoryType} from '@storybook/react';

import {RadioButton} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {deepMerge} from '../../utils';
import {Divider, GridLayout} from '../..';
import {IconFilledStarOutline} from '../../icons';
import {states, sizes} from './helpers';
import {RadioGroup} from '../radio-group';
import {RadioButtonIconProps} from '../types';
import {Fieldset} from '../../fieldset';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {
  StorybookPage,
  StorybookCase,
  StorybookHeading,
} from '../../test/storybook-comps';

const hoverAndFocus = {
  backgroundColor: '{{colors.interfaceInformative020}}',
  borderColor: '{{colors.inkBrand020}}',
  iconColor: '{{colors.inkBrand020}}',
};

const radioButtonCustomThemeObject: CreateThemeArgs = {
  name: 'radio-group-theme',
  overrides: {
    stylePresets: {
      customRadioInput: deepMerge(
        {},
        // @ts-ignore
        RadioButton.stylePresets.radioButtonInput,
        {
          base: {
            borderColor: '{{colors.inkBrand010}}',
            backgroundColor: '{{colors.interfaceInformative020}}',
          },
          checked: {
            backgroundColor: '{{colors.interfaceInformative020}}',
            borderColor: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
          },
          hover: hoverAndFocus,
          'checked:hover': hoverAndFocus,
          'checked:focus': hoverAndFocus,
          'checked:focus:hover': hoverAndFocus,
        },
      ),
      customOutlineColor: deepMerge(
        {},
        // @ts-ignore
        RadioButton.stylePresets.radioButtonInput,
        {
          base: {
            backgroundColor: '{{colors.interactiveInput010}}',
            borderColor: '{{colors.interactiveInput020}}',
            borderWidth: '{{borders.borderWidth020}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            borderStyle: 'solid',
          },
          'checked:focus-visible': {
            outlineColor: 'red',
            outlineStyle: '{{outlines.outlineStyleDefault}}',
            outlineWidth: '{{outlines.outlineWidthDefault}}',
            outlineOffset: '{{outlines.outlineOffsetDefault}}',
          },
        },
      ),
    },
  },
};

export const StoryRadioButtonDefault = () => (
  <StorybookPage>
    <RadioButton label="Label" checked />
  </StorybookPage>
);
StoryRadioButtonDefault.storyName = 'Default';

export const StoryRadioButtonSize = () => (
  <>
    <StorybookHeading>Base</StorybookHeading>
    <StorybookPage columns={{md: 'repeat(auto-fill, 120px)'}}>
      {sizes.map(size => (
        <StorybookCase title={size}>
          <RadioButton label="Label" size={size} />
        </StorybookCase>
      ))}
    </StorybookPage>
    <StorybookHeading>Checked</StorybookHeading>
    <StorybookPage columns={{md: 'repeat(auto-fill, 120px)'}}>
      {sizes.map(size => (
        <StorybookCase title={size}>
          <RadioButton label="Label" size={size} checked />
        </StorybookCase>
      ))}
    </StorybookPage>
  </>
);
StoryRadioButtonSize.storyName = 'Size';

export const StoryRadioButtonState = () => (
  <StorybookPage columns={{md: 'repeat(auto-fill, 120px)'}}>
    {states.map(([id, {checked, ...props}]) => (
      <StorybookCase title={id}>
        <RadioButton label="Label" checked={checked} {...props} />
      </StorybookCase>
    ))}
  </StorybookPage>
);
StoryRadioButtonState.storyName = 'States';

export const StoryRadioButtonLabel = () => {
  const shortLabel = 'Label';
  const longLabel =
    'This is a very long label to show how the label aligns to the radio button';
  return (
    <StorybookPage columns={{md: 'repeat(auto-fill, 230px)'}}>
      <StorybookCase title="Start">
        <RadioButton label={shortLabel} labelPosition="start" />
        <Divider overrides={{marginBlock: 'space040'}} />
        <RadioButton label={longLabel} labelPosition="start" />
      </StorybookCase>
      <StorybookCase title="End">
        <RadioButton label={shortLabel} labelPosition="end" />
        <Divider overrides={{marginBlock: 'space040'}} />
        <RadioButton label={longLabel} labelPosition="end" />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryRadioButtonLabel.storyName = 'Label alignment';

export const StoryRadioButtonUsingState = () => {
  const [checked, setChecked] = React.useState('Option 1');
  return (
    <StorybookPage columns="auto">
      <StorybookCase title="Using setState instead of radio-group">
        <Fieldset legend="Select an option">
          <GridLayout rowGap="space040" columns="max-content">
            {['Option 1', 'Option 2', 'Option 3'].map(value => (
              <RadioButton
                name="option"
                label={value}
                checked={checked === value}
                onChange={() => setChecked(value)}
              />
            ))}
          </GridLayout>
        </Fieldset>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryRadioButtonUsingState.storyName = 'Using setState';

export const StoryRadioButtonWithGroup = () => {
  const [checked, setChecked] = React.useState('Option 1');
  return (
    <StorybookPage>
      <StorybookCase title="Radio group uncontrolled">
        <Fieldset legend="Select an option">
          <RadioGroup name="group" defaultValue="Option 1">
            <GridLayout rowGap="space040" columns="max-content">
              {['Option 1', 'Option 2', 'Option 3'].map(value => (
                <RadioButton name="option" label={value} value={value} />
              ))}
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </StorybookCase>
      <StorybookCase title="Radio group controlled">
        <Fieldset legend="Select an option">
          <RadioGroup
            value={checked}
            onChange={event => setChecked(event.target.value)}
            name="group-2"
          >
            <GridLayout rowGap="space040" columns="max-content">
              {['Option 1', 'Option 2', 'Option 3'].map(value => (
                <RadioButton key={value} label={value} value={value} />
              ))}
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryRadioButtonWithGroup.storyName = 'Radio group';

const CustomIcon = ({checked}: RadioButtonIconProps) =>
  checked ? <IconFilledStarOutline overrides={{size: 'iconSize020'}} /> : null;

export const StoryRadioButtonOverrides = () => {
  const styleOverrides = {
    input: {
      stylePreset: 'customRadioInput',
    },
    label: {
      typographyPreset: 'utilityBody020',
      stylePreset: 'inkBrand010',
    },
  };

  return (
    <StorybookPage>
      <StorybookCase title="">
        <Fieldset legend="Select an option">
          <RadioGroup name="style" defaultValue="1">
            <GridLayout rowGap="space040" columns="max-content">
              <RadioButton
                value="1"
                label="Option 1"
                overrides={styleOverrides}
              />
              <RadioButton
                value="2"
                label="Option 2"
                overrides={styleOverrides}
              />
              <RadioButton
                value="3"
                label="Option 3"
                overrides={styleOverrides}
              />
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryRadioButtonOverrides.storyName = 'Styling overrides';

export const StoryRadioButtonLogicalPropsOverrides = () => {
  const logicalPropsOverrides = {
    marginBlockEnd: 'space050',
    marginInlineStart: 'space040',
  };

  const propOverrides = {
    icon: {
      props: {
        overrides: {
          size: 'iconSize010',
        },
      },
    },
  };

  const iconOverrides = {
    icon: CustomIcon,
  };

  const outlineOverrides = {
    input: {
      stylePreset: 'customOutlineColor',
    },
  };

  return (
    <StorybookPage>
      <StorybookCase title="Icon prop">
        <Fieldset legend="Select an option">
          <RadioGroup name="icon" defaultValue="1">
            <GridLayout rowGap="space040" columns="max-content">
              <RadioButton
                value="1"
                label="Option 1"
                overrides={propOverrides}
              />
              <RadioButton
                value="2"
                label="Option 2"
                overrides={propOverrides}
              />
              <RadioButton
                value="3"
                label="Option 3"
                overrides={propOverrides}
              />
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </StorybookCase>
      <StorybookCase title="Icon component overrides">
        <Fieldset legend="Select an option">
          <RadioGroup name="icon" defaultValue="1">
            <GridLayout rowGap="space040" columns="max-content">
              <RadioButton
                value="1"
                label="Option 1"
                overrides={iconOverrides}
              />
              <RadioButton
                value="2"
                label="Option 2"
                overrides={iconOverrides}
              />
              <RadioButton
                value="3"
                label="Option 3"
                overrides={iconOverrides}
              />
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </StorybookCase>

      <StorybookCase title="Logical props">
        <Fieldset legend="Select an option">
          <RadioGroup name="icon" defaultValue="1">
            <RadioButton
              value="1"
              label="Option 1"
              overrides={logicalPropsOverrides}
            />
            <RadioButton
              value="2"
              label="Option 2"
              overrides={logicalPropsOverrides}
            />
            <RadioButton
              value="3"
              label="Option 3"
              overrides={logicalPropsOverrides}
            />
          </RadioGroup>
        </Fieldset>
      </StorybookCase>
      <StorybookCase title="Custom outline">
        <Fieldset legend="Select an option">
          <RadioGroup name="icon" defaultValue="1">
            <GridLayout rowGap="space040" columns="max-content">
              <RadioButton
                value="1"
                label="Option 1"
                overrides={outlineOverrides}
              />
              <RadioButton
                value="2"
                label="Option 2"
                overrides={outlineOverrides}
              />
              <RadioButton
                value="3"
                label="Option 3"
                overrides={outlineOverrides}
              />
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryRadioButtonLogicalPropsOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Radio button',
  component: () => 'None',
  disabledRules: [],
  parameters: {
    nkDocs: {
      title: 'Radio button',
      url: 'https://www.newskit.co.uk/components/radio-button/',
      description:
        'Radio buttons are selection controls that are typically used in forms.',
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
          radioButtonCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
