import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {TextBlock} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled} from '../../utils';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const textBlockCustomThemeObject: CreateThemeArgs = {
  name: 'textblock-custom-theme',
  overrides: {
    stylePresets: {
      textblockCustom: {
        base: {
          color: '{{colors.blue060}}',
          borderStyle: 'solid',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
    },
    typographyPresets: {
      textblockCustom: {
        fontFamily: '{{fonts.fontFamily1.fontFamily}}',
        fontSize: '{{fonts.fontSize030}}',
        lineHeight: '{{fonts.fontLineHeight030}}',
        fontWeight: '{{fonts.fontWeight020}}',
        letterSpacing: '{{fonts.fontLetterSpacing030}}',
      },
    },
  },
};

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical. Being at the biggest events with the biggest names noticing the smallest details, and sticking up for the little guy.';

const StyledDiv = styled.div`
  border: 1px purple dotted;
`;

export const StoryTextBlockDefault = () => (
  <>
    <StorybookHeading>TextBlock default</StorybookHeading>
    <TextBlock stylePreset="inkContrast">{bodyString}</TextBlock>
  </>
);
StoryTextBlockDefault.storyName = 'default';

export const StoryAsDifferentHtmlTag = () => (
  <>
    <StorybookHeading>TextBlock</StorybookHeading>
    <StorybookSubHeading>As h3</StorybookSubHeading>
    <TextBlock stylePreset="inkContrast" as="h3">
      {bodyString}
    </TextBlock>

    <StorybookSubHeading>As div</StorybookSubHeading>
    <TextBlock stylePreset="inkContrast" as="div">
      {bodyString}
    </TextBlock>
  </>
);
StoryAsDifferentHtmlTag.storyName = 'as different html tag';

export const StoryWithOverriddenPresets = () => (
  <>
    <StorybookHeading>TextBlock</StorybookHeading>
    <StorybookSubHeading>With style-preset override</StorybookSubHeading>
    <TextBlock stylePreset="textblockCustom">{bodyString}</TextBlock>
    <StorybookSubHeading>With typography-preset override</StorybookSubHeading>
    <TextBlock
      typographyPreset="editorialParagraph010"
      stylePreset="inkContrast"
    >
      {bodyString}
    </TextBlock>
  </>
);
StoryWithOverriddenPresets.storyName = 'with overridden presets';

export const StoryWithLogicalPropsOverrides = () => (
  <>
    <StorybookHeading>TextBlock</StorybookHeading>
    <StorybookSubHeading>With logical padding overrides</StorybookSubHeading>
    <TextBlock stylePreset="inkContrast" paddingBlock="space040">
      {bodyString}
    </TextBlock>

    <StorybookSubHeading>With logical margin overrides</StorybookSubHeading>
    <StyledDiv>
      <TextBlock marginBlock="space040" stylePreset="inkContrast">
        {bodyString}
      </TextBlock>
    </StyledDiv>
  </>
);
StoryWithLogicalPropsOverrides.storyName = 'with-logical-overrides';

export default {
  title: 'Components/text-block',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          textBlockCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
