import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

import {Checkbox} from '..';
import {createTheme, ThemeProvider, UncompiledTheme} from '../../theme';
import {styled} from '../../utils';
import {
  Cell,
  Grid,
  GridLayout,
  IconFilledCancel,
  IconFilledStarOutline,
} from '../..';
import {CheckboxIconProps} from '../types';
import {states, sizes} from './helpers';
import {themeObject} from '../../test/theme-select-object';

const getCustomTheme = (theme: UncompiledTheme) =>
  createTheme({
    name: 'checkbox-theme',
    baseTheme: theme,
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
  });

export default {
  title: 'NewsKit Light/checkbox',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story, context) => (
      <ThemeProvider
        theme={getCustomTheme(
          themeObject[context?.globals?.backgrounds?.value || '#ffffff'],
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
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
        <span>This is checkbox</span> <Checkbox id="custom-label" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="custom-label"> with custom label</label>
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
