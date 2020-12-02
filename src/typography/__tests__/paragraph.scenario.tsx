import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {P, Sub, Sup} from '../index';

const myCustomTheme = createTheme({
  name: 'my-custom-paragraph-theme',
  overrides: {
    stylePresets: {
      paragraphCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
      dropCapCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
  },
});

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical.';

export default {
  name: 'typography/paragraph',
  children: [
    {
      name: 'paragraph',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Paragraph</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <P>{bodyString}</P>
          <br />
          <StorybookSubHeading>with drop cap</StorybookSubHeading>
          <P dropCap>
            This being Black History Month, last week was Politicians In Search
            Of An Eye-Catching Race-Related Policy Week. Both Theresa May and
            Jeremy Corbyn had their own announcement, each seemingly benign and
            right-on, each actually destructive and wrong-headed. This being
            Black History Month, last week was Politicians In Search Of An
            Eye-Catching Race-Related Policy Week.
          </P>
          <br />
          <StorybookSubHeading>with Sup and Sub elements</StorybookSubHeading>
          <P>
            Paragraph component containing a <Sub>subscript element</Sub> and a{' '}
            <Sup>superscript element</Sup>
          </P>
        </React.Fragment>
      ),
    },
    {
      name: 'paragraph-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Paragraph with overrides</StorybookHeading>
          <StorybookSubHeading>on paragraph</StorybookSubHeading>
          <br />
          <ThemeProvider theme={myCustomTheme}>
            <P
              overrides={{
                stylePreset: 'paragraphCustom',
                typographyPreset: 'editorialHeadline020',
              }}
            >
              This being Black History Month, last week was Politicians In
              Search Of An Eye-Catching Race-Related Policy Week. Both Theresa
              May and Jeremy Corbyn had their own announcement, each seemingly
              benign and right-on, each actually destructive and wrong-headed.
            </P>
            <StorybookSubHeading>on drop cap</StorybookSubHeading>
            <br />
            <P
              dropCap
              overrides={{
                dropCap: {
                  stylePreset: 'dropCapCustom',
                  typographyPreset: 'editorialHeadline070',
                  space: 'space030',
                },
              }}
            >
              This being Black History Month, last week was Politicians In
              Search Of An Eye-Catching Race-Related Policy Week. Both Theresa
              May and Jeremy Corbyn had their own announcement, each seemingly
              benign and right-on, each actually destructive and wrong-headed.
            </P>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
