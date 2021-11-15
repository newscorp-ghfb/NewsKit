/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
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
            borderRadius: '10px',
            backgroundColor: 'orange',
            iconColor: 'red',
          },
          hover: {
            backgroundColor: 'blue',
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
export const StoryCheckboxDefault = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <ThemeProvider theme={myCustomTheme}>
      <StorybookHeading>Checkbox</StorybookHeading>
      <Grid>
        <Cell xs={8} sm={4}>
          <StorybookSubHeading>States</StorybookSubHeading>
          <Container>
            <Checkbox
              value="10"
              checked={isChecked}
              id="controlled"
              onChange={event => {
                console.log(
                  'is checked',
                  event.target?.checked,
                  'value',
                  event.target?.value,
                );
                setIsChecked(event.target?.checked);
              }}
            />
            <label htmlFor="controlled">controlled</label>
          </Container>
          {states.map(([id, {checked, ...props}]) => (
            <Container>
              <Checkbox {...props} defaultChecked={checked} id={id} />
              <label htmlFor={id}>{id}</label>
            </Container>
          ))}
        </Cell>
        <Cell xs={8} md={4}>
          <StorybookSubHeading>Sizes</StorybookSubHeading>

          {sizes.map(size => (
            <>
              <Container>
                <Checkbox size={size} id={size} />
                <label htmlFor={size}>{size}</label>
              </Container>
              <Container>
                <Checkbox size={size} id={`${size}checked`} checked />
                <label htmlFor={`${size}checked`}>{size} checked</label>
              </Container>
            </>
          ))}
        </Cell>
      </Grid>
    </ThemeProvider>
  );
};

StoryCheckboxDefault.storyName = 'checkbox-default';

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
        id="custom-style-preset"
        overrides={{
          input: {
            stylePreset: 'customCheckboxInput',
            size: '100px',
          },
        }}
      />
      <label htmlFor="custom-style-preset">custom style preset</label>
    </Container>
    <StorybookSubHeading>Icon Prop override</StorybookSubHeading>
    <Container>
      <Checkbox
        id="prop-overrides"
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
      <label htmlFor="prop-overrides">prop overrides</label>
    </Container>
    <StorybookSubHeading>Icon Component override</StorybookSubHeading>
    <Container>
      <Checkbox
        id="component-overrides"
        overrides={{
          icon: CustomCheck,
        }}
      />
      <label htmlFor="component-overrides">component overrides</label>
    </Container>
    <StorybookSubHeading>Icon Override</StorybookSubHeading>
    <Container>
      <Checkbox
        id="overrides"
        overrides={{
          icon: {
            stylePreset: 'bannerInformative',
            size: 'iconSize030',
          },
        }}
      />
      <label htmlFor="overrides">overrides</label>
    </Container>
  </ThemeProvider>
);
StoryCheckboxOverrides.storyName = 'checkbox-overrides';
