import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {P, Sub, Sup} from '../index';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const paragraphCustomThemeObject: CreateThemeArgs = {
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
};

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical.';

export const StoryParagraph = () => (
  <>
    <StorybookHeading>Paragraph</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <P>{bodyString}</P>
    <br />
    <StorybookSubHeading>with drop cap</StorybookSubHeading>
    <P dropCap>
      This being Black History Month, last week was Politicians In Search Of An
      Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy Corbyn
      had their own announcement, each seemingly benign and right-on, each
      actually destructive and wrong-headed. This being Black History Month,
      last week was Politicians In Search Of An Eye-Catching Race-Related Policy
      Week.
    </P>
    <br />
    <StorybookSubHeading>
      with drop cap and multiple children
    </StorybookSubHeading>
    <P dropCap>
      This being <strong>Black History Month</strong>, last week was Politicians
      In Search Of An Eye-Catching Race-Related Policy Week. Both Theresa May
      and <strong>Jeremy Corbyn</strong> had their own announcement, each
      seemingly benign and right-on, each actually destructive and wrong-headed.
      This being Black History Month, last week was
      <i>Politicians In Search Of An Eye-Catching Race-Related Policy Week</i>.
    </P>
    <br />
    <StorybookSubHeading>
      with logical props applied to drop cap (overrides)
    </StorybookSubHeading>
    <P
      overrides={{
        dropCap: {
          marginBlock: 'space030',
          marginInline: 'space030',
          paddingBlock: 'space030',
          paddingInline: 'space030',
        },
      }}
      dropCap
    >
      This being Black History Month, last week was Politicians In Search Of An
      Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy Corbyn
      had their own announcement, each seemingly benign and right-on, each
      actually destructive and wrong-headed. This being Black History Month,
      last week was Politicians In Search Of An Eye-Catching Race-Related Policy
      Week.
    </P>
    <br />
    <br />
    <StorybookSubHeading>with Sup and Sub elements</StorybookSubHeading>
    <P>
      Paragraph component containing a <Sub>subscript element</Sub> and a{' '}
      <Sup>superscript element</Sup>
    </P>
  </>
);
StoryParagraph.storyName = 'paragraph';

export const StoryParagraphWithOverrides = () => (
  <>
    <StorybookHeading>Paragraph with overrides</StorybookHeading>
    <StorybookSubHeading>on paragraph</StorybookSubHeading>
    <br />
    <P
      overrides={{
        stylePreset: 'paragraphCustom',
        typographyPreset: 'editorialHeadline020',
      }}
    >
      This being Black History Month, last week was Politicians In Search Of An
      Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy Corbyn
      had their own announcement, each seemingly benign and right-on, each
      actually destructive and wrong-headed.
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
      This being Black History Month, last week was Politicians In Search Of An
      Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy Corbyn
      had their own announcement, each seemingly benign and right-on, each
      actually destructive and wrong-headed.
    </P>
  </>
);
StoryParagraphWithOverrides.storyName = 'paragraph-with-overrides';

export const StoryParagraphWithLogicalProps = () => {
  const logicalPropsOverrides = {
    marginBlock: 'space060',
    marginInline: 'space080',
    paddingBlock: 'space060',
    paddingInline: 'space080',
  };

  return (
    <>
      <StorybookHeading>Paragraph with logical props</StorybookHeading>
      <StorybookSubHeading>on paragraph</StorybookSubHeading>
      <br />
      <P overrides={logicalPropsOverrides}>
        This being Black History Month, last week was Politicians In Search Of
        An Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
        Corbyn had their own announcement, each seemingly benign and right-on,
        each actually destructive and wrong-headed.
      </P>
      <StorybookSubHeading>on drop cap</StorybookSubHeading>
      <br />
      <P dropCap overrides={logicalPropsOverrides}>
        This being Black History Month, last week was Politicians In Search Of
        An Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
        Corbyn had their own announcement, each seemingly benign and right-on,
        each actually destructive and wrong-headed.
      </P>
      <StorybookSubHeading>on Sub and Sup elements</StorybookSubHeading>
      <br />
      <P overrides={logicalPropsOverrides}>
        Paragraph component containing a <Sub>subscript element</Sub> and a{' '}
        <Sup>superscript element</Sup>
      </P>
    </>
  );
};
StoryParagraphWithLogicalProps.storyName = 'paragraph-with-logical-props';

export default {
  title: 'NewsKit Light/typography/paragraph',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          paragraphCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
