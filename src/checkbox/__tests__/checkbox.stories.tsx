import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

import {Checkbox} from '..';
import {compileTheme, createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Cell, Grid, IconFilledCancel, IconFilledStarOutline} from '../..';
import {CheckboxIconProps} from '../types';
import {states, sizes} from './helpers';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'checkbox-theme',
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
      },
    },
  }),
);

export default {
  title: 'NewsKit Light/checkbox',
  component: () => 'None',
  disabledRules: [],
};

const Container = styled.div`
  margin: 10px;
  display: flex;

  > label {
    margin-right: 40px;
  }
`;
export const StoryCheckboxDefault = () => (
  <ThemeProvider theme={myCustomTheme}>
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
  </ThemeProvider>
);

StoryCheckboxDefault.storyName = 'checkbox-default';

export const StoryCheckboxLabel = () => {
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
    </ThemeProvider>
  );
};

StoryCheckboxLabel.storyName = 'checkbox-label';

const CustomCheck = ({checked}: CheckboxIconProps) =>
  checked ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'bannerInformative'}}
    />
  );
export const StoryCheckboxOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Checkbox</StorybookHeading>
    <StorybookSubHeading>Style overrides</StorybookSubHeading>
    <Container>
      <Checkbox
        value="10"
        label="Style overrides"
        overrides={{
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
  </ThemeProvider>
);
StoryCheckboxOverrides.storyName = 'checkbox-overrides';
