import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

import {RadioButton} from '..';
import {compileTheme, createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Cell, Grid, GridLayout} from '../..';
import {states, sizes} from './helpers';
import {RadioGroup} from '../radio-group';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'radio-group-theme',
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
    },
  }),
);

export default {
  title: 'NewsKit Light/radio-button',
  component: () => 'None',
  disabledRules: [],
};

const Container = styled.div`
  margin: 10px;
  display: flex;
`;
export const StoryRadioButtonDefault = () => (
  <ThemeProvider theme={myCustomTheme}>
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
              <RadioButton size={size} label={size} checked={false} />
            </Container>
            <Container>
              <RadioButton size={size} label={`${size}-checked`} checked />
            </Container>
          </>
        ))}
      </Cell>
    </Grid>
  </ThemeProvider>
);

StoryRadioButtonDefault.storyName = 'radio-button-default';

export const StoryRadioButtonLabel = () => {
  const shortLabel = 'Short label';
  const longLabel =
    'Very long label... The array of dependencies is not passed as arguments to the effect function.';
  return (
    <ThemeProvider theme={myCustomTheme}>
      <StorybookHeading>Checkbox - Labels</StorybookHeading>
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
      <Container>
        <span>This is checkbox</span> <RadioButton id="no-label" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="no-label">without label</label>
      </Container>
    </ThemeProvider>
  );
};

StoryRadioButtonLabel.storyName = 'radio-button-label';

export const StoryRadioButtonUsingState = () => {
  const [checked, setChecked] = React.useState('small');
  return (
    <Container>
      <GridLayout rowGap="space040">
        <StorybookSubHeading>
          Using external state ( useState ) to control checked
        </StorybookSubHeading>
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
    </Container>
  );
};
StoryRadioButtonUsingState.storyName = 'radio-button-using-state';

export const StoryRadioButtonWithGroup = () => {
  const [checked, setChecked] = React.useState('small');
  return (
    <Container>
      <GridLayout rowGap="space040">
        <StorybookSubHeading>RadioGroup Uncontrolled</StorybookSubHeading>
        <RadioGroup name="group" defaultValue="medium">
          <GridLayout rowGap="space040">
            {['small', 'medium', 'large'].map(size => (
              <RadioButton key={size} size="medium" label={size} value={size} />
            ))}
          </GridLayout>
        </RadioGroup>
        <StorybookSubHeading>RadioGroup Controlled</StorybookSubHeading>
        <RadioGroup
          value={checked}
          onChange={event => setChecked(event.target.value)}
          name="group-2"
        >
          <GridLayout rowGap="space040">
            {['small', 'medium', 'large'].map(size => (
              <RadioButton key={size} size="medium" label={size} value={size} />
            ))}
          </GridLayout>
        </RadioGroup>
      </GridLayout>
    </Container>
  );
};

StoryRadioButtonWithGroup.storyName = 'radio-group';
