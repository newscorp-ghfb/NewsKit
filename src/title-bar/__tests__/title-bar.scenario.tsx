import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {TitleBar} from '..';
import {Button} from '../../button';
import {Link} from '../../link';

const myCustomTheme = createTheme({
  name: 'my-custom-title-bar-theme',
  overrides: {
    stylePresets: {
      titleBarCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
  },
});

const link = () => <Link href="/">Link</Link>;
const button = () => <Button>Default button</Button>;

export default {
  name: 'title-bar',
  children: [
    {
      name: 'title-bar',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar>Title bar default state</TitleBar>
          <br />
          <br />
          <TitleBar
            overrides={{
              heading: {
                typographyPreset: {
                  xs: 'editorialHeading010',
                  sm: 'editorialHeading020',
                  md: 'editorialHeading030',
                  lg: 'editorialHeading040',
                },
                stylePreset: 'linkInline',
              },
            }}
          >
            Title bar with overwritten heading typographyPreset
          </TitleBar>
          <br />
          <br />
          <ThemeProvider theme={myCustomTheme}>
            <TitleBar
              headingAs="h6"
              overrides={{
                spaceInset: 'spaceInsetSquish010',
                heading: {
                  stylePreset: 'titleBarCustom',
                },
              }}
            >
              H6 with overwritten style preset and space inset
            </TitleBar>
          </ThemeProvider>
          <br />
          <br />
          <TitleBar actionItem={link}>Title bar with link</TitleBar>
          <br />
          <br />
          <TitleBar actionItem={button}>Title bar with button</TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'title-bar-as-h1toh6',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar headingAs="h1">Title bar as h1</TitleBar>
          <TitleBar headingAs="h2">Title bar as h2</TitleBar>
          <TitleBar headingAs="h3">Title bar as h3</TitleBar>
          <TitleBar headingAs="h4">Title bar as h4</TitleBar>
          <TitleBar headingAs="h5">Title bar as h5</TitleBar>
          <TitleBar headingAs="h6">Title bar as h6</TitleBar>
        </React.Fragment>
      ),
    },
  ],
};
