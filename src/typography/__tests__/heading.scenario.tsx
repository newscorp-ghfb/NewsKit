import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {StorybookHeading} from '../../test/storybook-comps';
import {H6, H5, H4, H3, H2, H1} from '..';

const myCustomTheme = createTheme({
  name: 'my-custom-heading-theme',
  overrides: {
    stylePresets: {
      headingCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
  },
});

const title = 'We tell the stories that matter.';

export default {
  name: 'typography/heading',
  children: [
    {
      name: 'heading-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Heading - default</StorybookHeading>
          <br />
          <H1>Default H1 - {title}</H1>
          <br />
          <H2>Default H2 - {title}</H2>
          <br />
          <H3>Default H3 - {title}</H3>
          <br />
          <H4>Default H4 - {title}</H4>
          <br />
          <H5>Default H5 - {title}</H5>
          <br />
          <H6>Default H6 - {title}</H6>
        </React.Fragment>
      ),
    },
    {
      name: 'heading-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Heading with overrides</StorybookHeading>
          <ThemeProvider theme={myCustomTheme}>
            <H1
              overrides={{
                stylePreset: 'headingCustom',
                typographyPreset: 'editorialParagraph010',
              }}
            >
              H1 with override
            </H1>
            <br />
            <H2
              overrides={{
                stylePreset: 'headingCustom',
                typographyPreset: 'editorialParagraph020',
              }}
            >
              H2 with override
            </H2>
            <br />
            <H3
              overrides={{
                stylePreset: 'headingCustom',
                typographyPreset: 'editorialParagraph030',
              }}
            >
              H3 with override
            </H3>
            <br />
            <H4
              overrides={{
                stylePreset: 'headingCustom',
                typographyPreset: 'editorialParagraph010',
              }}
            >
              H4 with override
            </H4>
            <br />
            <H5
              overrides={{
                stylePreset: 'headingCustom',
                typographyPreset: 'editorialParagraph020',
              }}
            >
              H5 with override
            </H5>
            <br />
            <H6
              overrides={{
                stylePreset: 'headingCustom',
                typographyPreset: 'editorialParagraph030',
              }}
            >
              H6 with override
            </H6>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
