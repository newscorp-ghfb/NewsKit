import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

import {RadioButton} from '..';
import {compileTheme, createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {
  Cell,
  Grid,
  GridLayout,
  IconFilledCancel,
  IconFilledStarOutline,
} from '../..';
import {states, sizes} from './helpers';
import {RadioGroup} from '../radio-group';
import {RadioButtonIconProps} from '../types';
import {Fieldset} from '../../fieldset';

export default {
  title: 'NewsKit Light/radio-button',
  component: () => 'None',
  disabledRules: [],
};

const Container = styled.div`
  margin: 10px;
`;
export const StoryRadioButtonDefault = () => (
  <>
    <StorybookHeading>RadioButton</StorybookHeading>
    <Grid>
      <Cell xs={8} sm={4}>
        <StorybookSubHeading>States</StorybookSubHeading>

        {states.map(([id, {checked, ...props}]) => (
          <Container>
            <RadioButton {...props} label={id} checked={checked} />
          </Container>
        ))}
      </Cell>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Sizes</StorybookSubHeading>

        {sizes.map(size => (
          <>
            <Container>
              <RadioButton size={size} label={size} />
            </Container>
            <Container>
              <RadioButton size={size} label={`${size}-checked`} checked />
            </Container>
          </>
        ))}
      </Cell>
    </Grid>
  </>
);
StoryRadioButtonDefault.storyName = 'radio-button-default';

export const StoryRadioButtonLabel = () => {
  const shortLabel = 'Short label';
  const longLabel =
    'Very long label... The array of dependencies is not passed as arguments to the effect function.';
  return (
    <Container>
      <StorybookHeading>RadioButton</StorybookHeading>
      <Grid>
        {sizes.map(size => (
          <Cell xs={8} sm={4}>
            <StorybookSubHeading>Size {size}</StorybookSubHeading>
            <Container>
              <RadioButton label={shortLabel} size={size} />
            </Container>
            <hr />
            <Container>
              <RadioButton label={longLabel} size={size} />
            </Container>
            <hr />
            <Container>
              <RadioButton
                label={shortLabel}
                size={size}
                labelPosition="start"
              />
            </Container>
            <hr />
            <Container>
              <RadioButton
                label={longLabel}
                size={size}
                labelPosition="start"
              />
            </Container>
          </Cell>
        ))}
      </Grid>
      <StorybookSubHeading>No label</StorybookSubHeading>
      <GridLayout
        columns="max-content max-content max-content"
        columnGap="space030"
        alignItems="center"
      >
        <span>This is radio-button </span> <RadioButton id="custom-label" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="custom-label">with custom label</label>
      </GridLayout>
    </Container>
  );
};
StoryRadioButtonLabel.storyName = 'radio-button-label';

export const StoryRadioButtonUsingState = () => {
  const [checked, setChecked] = React.useState('small');
  return (
    <Container>
      <GridLayout rowGap="space040">
        <StorybookHeading>Using state</StorybookHeading>
        <StorybookSubHeading>
          This example uses setState instead of RadioGroup
        </StorybookSubHeading>
        <Fieldset legend="Select a size">
          <GridLayout rowGap="space040" columns="max-content">
            {['small', 'medium', 'large'].map(size => (
              <RadioButton
                size="medium"
                name="size"
                label={size}
                checked={checked === size}
                onChange={() => setChecked(size)}
              />
            ))}
          </GridLayout>
        </Fieldset>
      </GridLayout>
    </Container>
  );
};
StoryRadioButtonUsingState.storyName = 'radio-button-using-state';

export const StoryRadioButtonWithGroup = () => {
  const [checked, setChecked] = React.useState('small');
  return (
    <Container>
      <StorybookHeading>RadioGroup</StorybookHeading>
      <GridLayout rowGap="space040">
        <StorybookSubHeading>RadioGroup Uncontrolled</StorybookSubHeading>
        <Fieldset legend="Select a size">
          <RadioGroup name="group" defaultValue="medium">
            <GridLayout rowGap="space040" columns="max-content">
              {['small', 'medium', 'large'].map(size => (
                <RadioButton
                  key={size}
                  size="medium"
                  label={size}
                  value={size}
                />
              ))}
            </GridLayout>
          </RadioGroup>
        </Fieldset>
        <StorybookSubHeading>RadioGroup Controlled</StorybookSubHeading>
        <Fieldset legend="Select a size">
          <RadioGroup
            value={checked}
            onChange={event => setChecked(event.target.value)}
            name="group-2"
          >
            <GridLayout rowGap="space040" columns="max-content">
              {['small', 'medium', 'large'].map(size => (
                <RadioButton
                  key={size}
                  size="medium"
                  label={size}
                  value={size}
                />
              ))}
            </GridLayout>
          </RadioGroup>
        </Fieldset>
      </GridLayout>
    </Container>
  );
};
StoryRadioButtonWithGroup.storyName = 'radio-group';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'radio-group-theme',
    overrides: {
      stylePresets: {
        customRadioInput: {
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
        customRadioFeedback: {
          base: {
            backgroundColor: 'rgba(0,0,0,0.0)',
            borderRadius: '50%',
          },
          hover: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '50%',
          },
        },
        customIconFilledCancel: {
          base: {
            backgroundColor: '{{colors.interfaceInformative010}}',
            iconColor: '{{colors.inkInverse}}',
            borderRadius: '50%',
          },
        },
      },
    },
  }),
);

const CustomIcon = ({checked}: RadioButtonIconProps) =>
  checked ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'customIconFilledCancel'}}
    />
  );

export const StoryRadioButtonOverrides = () => {
  const styleOverrides = {
    spaceStack: 'space060',
    input: {
      stylePreset: 'customRadioInput',
      size: '68px',
    },
    feedback: {
      size: '90px',
      stylePreset: 'customRadioFeedback',
    },
    label: {
      typographyPreset: 'utilityHeading010',
      stylePreset: 'inkSubtle',
    },
    icon: {
      size: 'iconSize050',
      stylePreset: 'customIconFilledCancel',
    },
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

  return (
    <ThemeProvider theme={myCustomTheme}>
      <Container>
        <StorybookHeading>RadioButton</StorybookHeading>
        <StorybookSubHeading>Style overrides</StorybookSubHeading>
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

        <StorybookSubHeading>Icon Prop override</StorybookSubHeading>
        <Fieldset legend="Select an option">
          <RadioGroup name="prop" defaultValue="1">
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
        <StorybookSubHeading>Icon Component override</StorybookSubHeading>
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
      </Container>
    </ThemeProvider>
  );
};
StoryRadioButtonOverrides.storyName = 'radio-button-overrides';

export const StoryRadioButtonLogicalPropsOverrides = () => (
  <>
    <StorybookSubHeading>
      Logical props override - root level
    </StorybookSubHeading>
    <Fieldset legend="Select an option">
      <RadioGroup name="icon" defaultValue="1">
        <GridLayout rowGap="space040" columns="max-content">
          <RadioButton
            value="1"
            label="Option 1"
            overrides={{
              marginBlockEnd: 'space030',
            }}
          />
          <RadioButton
            value="2"
            label="Option 2"
            overrides={{
              marginBlockEnd: 'space030',
            }}
          />
          <RadioButton
            value="3"
            label="Option 3"
            overrides={{
              marginBlockEnd: 'space030',
            }}
          />
        </GridLayout>
      </RadioGroup>
    </Fieldset>
    <StorybookSubHeading>
      Logical props override - input level
    </StorybookSubHeading>
    <Fieldset legend="Select an option">
      <RadioGroup name="icon" defaultValue="1">
        <GridLayout rowGap="space040" columns="max-content">
          <RadioButton
            value="1"
            label="Option 1"
            overrides={{
              input: {
                marginInlineEnd: 'space050',
              },
            }}
          />
          <RadioButton
            value="2"
            label="Option 2"
            overrides={{
              input: {
                marginInlineEnd: 'space050',
              },
            }}
          />
          <RadioButton
            value="3"
            label="Option 3"
            labelPosition="start"
            overrides={{
              input: {
                marginInlineStart: 'space050',
              },
            }}
          />
          <RadioButton
            value="4"
            label="Option 4"
            labelPosition="start"
            overrides={{
              input: {
                marginInlineStart: 'space050',
              },
            }}
          />
        </GridLayout>
      </RadioGroup>
    </Fieldset>
  </>
);
StoryRadioButtonLogicalPropsOverrides.storyName =
  'radio-button-logical-overrides';
