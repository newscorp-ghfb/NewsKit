import * as React from 'react';
import {Standfirst} from '..';
import {createTheme, ThemeProvider} from '../../theme';
import {StorybookSubHeading} from '../../test/storybook-comps';

const myCustomTheme = createTheme({
  name: 'my-custom-standfirst-theme',
  overrides: {
    stylePresets: {
      standfirstCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
    typographyPresets: {
      standfirstCustom: {
        fontFamily: '{{fonts.fontFamily1.fontFamily}}',
        fontSize: '{{fonts.fontSize060}}',
        lineHeight: '{{fonts.fontLineHeight030}}',
        fontWeight: '{{fonts.fontWeight020}}',
        letterSpacing: '{{fonts.fontLetterSpacing030}}',
      },
    },
  },
});

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight.';

export default {
  title: 'NewsKit Light/standfirst',
  component: () => 'None',
};

export const StoryDefault = () => (
  <React.Fragment>
    <StorybookSubHeading>Standfirst - default</StorybookSubHeading>
    <Standfirst>{bodyString}</Standfirst>
  </React.Fragment>
);
StoryDefault.storyName = 'default';

export const StoryWithAsProp = () => (
  <React.Fragment>
    <StorybookSubHeading>Standfirst - as h3</StorybookSubHeading>
    <Standfirst as="h3">{bodyString}</Standfirst>

    <StorybookSubHeading>Standfirst - as span</StorybookSubHeading>
    <Standfirst as="span">{bodyString}</Standfirst>
  </React.Fragment>
);
StoryWithAsProp.storyName = 'with-as-prop';

export const StoryWithOverrides = () => (
  <React.Fragment>
    <ThemeProvider theme={myCustomTheme}>
      <StorybookSubHeading>
        Standfirst - with style-preset override
      </StorybookSubHeading>
      <Standfirst
        overrides={{
          styledText: {
            stylePreset: 'standfirstCustom',
          },
        }}
      >
        {bodyString}
      </Standfirst>
      <StorybookSubHeading>
        Standfirst - with typography-preset override
      </StorybookSubHeading>
      <Standfirst
        overrides={{
          styledText: {
            typographyPreset: 'editorialSubheadline020',
          },
        }}
      >
        {bodyString}
      </Standfirst>
    </ThemeProvider>
  </React.Fragment>
);
StoryWithOverrides.storyName = 'with-overrides';
