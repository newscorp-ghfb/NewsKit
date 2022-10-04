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
  title: 'Components/standfirst',
  component: () => 'None',
};

export const StoryDefault = () => (
  <>
    <StorybookSubHeading>Standfirst - default</StorybookSubHeading>
    <Standfirst>{bodyString}</Standfirst>
  </>
);
StoryDefault.storyName = 'default';

export const StoryWithAsProp = () => (
  <>
    <StorybookSubHeading>Standfirst - as h3</StorybookSubHeading>
    <Standfirst as="h3">{bodyString}</Standfirst>

    <StorybookSubHeading>Standfirst - as span</StorybookSubHeading>
    <Standfirst as="span">{bodyString}</Standfirst>
  </>
);
StoryWithAsProp.storyName = 'with-as-prop';

export const StoryWithOverrides = () => (
  <>
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
  </>
);
StoryWithOverrides.storyName = 'with-overrides';

export const StoryLogicalProps = () => (
  <>
    <StorybookSubHeading>
      Standfirst - logical padding props
    </StorybookSubHeading>
    <Standfirst
      overrides={{styledText: {paddingInline: '20px', paddingBlock: '10px'}}}
    >
      {bodyString}
    </Standfirst>
    <StorybookSubHeading>Standfirst - logical margin props</StorybookSubHeading>
    <Standfirst
      overrides={{styledText: {marginInline: '20px', marginBlock: '10px'}}}
    >
      {bodyString}
    </Standfirst>
  </>
);
StoryLogicalProps.storyName = 'logical-props';
