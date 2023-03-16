import React from 'react';
import {Story as StoryType} from '@storybook/react';
import styled from '@emotion/styled';
import {
  StorybookHeading,
  StorybookPage,
  StorybookCase,
} from '../../test/storybook-comps';
import {Checkbox} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {IconFilledCancel, IconFilledStarOutline} from '../../icons';
import {CheckboxIconProps} from '../types';
import {states, sizes} from './helpers';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {defaultFocusVisible} from '../../utils/default-focus-visible';

const autoFlagCols = `repeat(auto-fill, minmax(150px, max-content))`;

const twoFlagCols = {
  xs: 'repeat(1, minmax(400px, max-content))',
  sm: 'repeat(2, minmax(150px, max-content))',
  lg: 'repeat(2, minmax(400px, max-content))',
};

const shortLabel = 'Label';

const StyledDiv = styled.div`
  width: 200px;
  height: 100px;
`;

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
      customCheckbox: {
        base: {
          backgroundColor: '#804200',
          iconColor: '{{colors.amber020}}',
          borderRadius: '4px',
        },
      },
      customIconFilledCancel: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      customOutlineOverrides: {
        base: {
          outlineColor: 'red',
          outlineStyle: 'dashed',
          outlineWidth: '1px',
          borderRadius: '2px',
          outlineOffset: '6px',
          backgroundColor: '{{colors.interactiveInput040}}',
          borderColor: '{{colors.interactiveInput020}}',
          borderWidth: '{{borders.borderWidth020}}',
          iconColor: '{{colors.inkInverse}}',
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

export const StoryCheckboxDefault = () => (
  <>
    <Checkbox label={shortLabel} checked />
  </>
);

StoryCheckboxDefault.storyName = 'Default';

export const StoryCheckboxSizes = () => (
  <>
    <StorybookHeading>Base</StorybookHeading>
    <StorybookPage columns={autoFlagCols}>
      {sizes.map(size => (
        <>
          <StorybookCase title={size}>
            <Checkbox size={size} label={shortLabel} />
          </StorybookCase>
        </>
      ))}
    </StorybookPage>
    <StorybookHeading>Checked</StorybookHeading>
    <StorybookPage columns={autoFlagCols}>
      {sizes.map(size => (
        <>
          <StorybookCase title={size}>
            <Checkbox size={size} label={shortLabel} checked />
          </StorybookCase>
        </>
      ))}
    </StorybookPage>
  </>
);
StoryCheckboxSizes.storyName = 'Size';

export const StoryCheckboxStates = () => (
  <>
    <StorybookPage columns={autoFlagCols}>
      {states.map(([id, {checked, ...props}]) => (
        <>
          <StorybookCase title={id}>
            <Checkbox {...props} defaultChecked={checked} label={shortLabel} />
          </StorybookCase>
        </>
      ))}
    </StorybookPage>
  </>
);
StoryCheckboxStates.storyName = 'States';

export const StoryCheckboxLabel = () => {
  const longLabel =
    'This is a very long label to show how the label aligns to the checkbox.';
  return (
    <>
      <StorybookPage columns={twoFlagCols}>
        <StyledDiv>
          <Checkbox label={shortLabel} size="medium" />
          <hr />
          <Checkbox label={longLabel} size="medium" />
        </StyledDiv>
        <StyledDiv>
          <Checkbox label={shortLabel} size="medium" labelPosition="start" />
          <hr />
          <Checkbox label={longLabel} size="medium" labelPosition="start" />
        </StyledDiv>
      </StorybookPage>
    </>
  );
};
StoryCheckboxLabel.storyName = 'Label alignment';

const CustomCheck = ({checked}: CheckboxIconProps) =>
  checked ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'customIconFilledCancel'}}
    />
  );

export const StoryCheckboxTransitions = () => (
  <>
    <StorybookPage columns={twoFlagCols}>
      <StorybookCase title="Default transition preset">
        <Checkbox
          defaultChecked
          label={shortLabel}
          overrides={{
            marginBlockEnd: '20px',
          }}
        />
      </StorybookCase>
      <StorybookCase title="Transition preset overrides">
        <Checkbox
          overrides={{
            input: {
              transitionPreset: [
                'customBackgroundColorChange',
                'customBorderColourChange',
              ],
            },
            marginBlockEnd: '20px',
          }}
          defaultChecked
          label={shortLabel}
        />
      </StorybookCase>
      <StorybookCase title="Extend on transitionDuration">
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
          label={shortLabel}
        />
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryCheckboxTransitions.storyName = 'Transitions';

export const StoryCheckboxStylingOverrides = () => (
  <>
    <Checkbox
      checked
      label="Style overrides"
      overrides={{
        marginBlock: '15px',
        marginInlineStart: '15px',
        input: {
          stylePreset: 'customCheckbox',
        },
        label: {
          typographyPreset: 'utilityBody020',
          stylePreset: 'inkBrand010',
        },
      }}
    />
  </>
);
StoryCheckboxStylingOverrides.storyName = 'Styling overrides';

export const StoryCheckboxOverrides = () => (
  <>
    <StorybookPage columns={twoFlagCols}>
      <StorybookCase title="Icon prop">
        <Checkbox
          checked
          label={shortLabel}
          overrides={{
            marginBlockEnd: 'space030',
            paddingBlock: 'space030',
            icon: {
              props: {
                overrides: {
                  size: 'iconSize010',
                },
              },
            },
          }}
        />
      </StorybookCase>
      <StorybookCase title="Icon component overriden">
        <Checkbox
          checked
          label={shortLabel}
          overrides={{
            icon: CustomCheck,
            marginBlockEnd: 'space030',
            paddingBlock: 'space030',
          }}
        />
      </StorybookCase>

      <StorybookCase title="Icon size">
        <Checkbox
          checked
          label={shortLabel}
          overrides={{
            icon: {
              stylePreset: 'bannerInformative',
              size: 'iconSize030',
            },
            marginBlockEnd: 'space030',
            paddingBlock: 'space030',
          }}
        />
      </StorybookCase>

      <StorybookCase title="Logical props">
        <Checkbox
          checked
          label={shortLabel}
          overrides={{
            marginBlockEnd: 'space030',
            paddingBlock: 'space030',
          }}
        />
      </StorybookCase>

      <StorybookCase title="Custom outline">
        <Checkbox
          checked
          label={shortLabel}
          overrides={{
            marginBlockEnd: 'space060',
            paddingBlock: 'space030',
            marginInlineEnd: 'space030',
            input: {
              stylePreset: 'customOutlineOverrides',
            },
          }}
        />
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryCheckboxOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Checkbox',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Checkbox',
      url: 'https://www.newskit.co.uk/components/checkbox/',
      description:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    },
  },
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
