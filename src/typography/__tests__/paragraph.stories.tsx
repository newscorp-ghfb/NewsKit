import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {P, Sub, Sup} from '../index';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {getColorCssFromTheme, styled} from '../../utils/style';

const paragraphCustomThemeObject: CreateThemeArgs = {
  name: 'custom-paragraph-theme',
  overrides: {
    stylePresets: {
      paragraphCustom: {base: {color: '{{colors.inkBrand010}}'}},
      dropCapCustom: {base: {color: '{{colors.inkBrand010}}'}},
    },
  },
};

const BODY =
  'NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development.';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryParagraphDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <P>{BODY}</P>
    </StorybookCase>
  </StorybookPage>
);
StoryParagraphDefault.storyName = 'Default';

export const StoryParagraphDropCap = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Drop cap">
      <P dropCap>{BODY}</P>
    </StorybookCase>
    <StorybookCase title="Drop cap and multiple children">
      <P dropCap>
        NewsKit provides <strong>components, guidelines and standards</strong>{' '}
        to enable digital product teams to create high-quality, consistent
        products quickly. NewsKit is built on modular design principles and
        backed by{' '}
        <strong>best practice guidance for design and development</strong>.
      </P>
    </StorybookCase>
  </StorybookPage>
);
StoryParagraphDropCap.storyName = 'Drop cap';

export const StoryParagraphSubScriptAndSuperScript = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Sub and sup elements">
      <P>
        NewsKit provides <Sub>components,</Sub> guidelines{' '}
        <Sup>and standards.</Sup>
      </P>
    </StorybookCase>
  </StorybookPage>
);
StoryParagraphSubScriptAndSuperScript.storyName = 'Subscript and superscript';

export const StoryParagraphLogicalProps = () => {
  const logicalPropsOverrides = {
    marginBlock: 'space060',
    marginInline: 'space080',
    paddingBlock: 'space060',
    paddingInline: 'space080',
  };

  return (
    <StorybookPage columns="1fr">
      <StorybookCase title="Logical props on paragraph">
        <MarginOverridesWrapper>
          <P overrides={logicalPropsOverrides}>{BODY}</P>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="Logical props drop cap">
        <MarginOverridesWrapper>
          <P dropCap overrides={logicalPropsOverrides}>
            {BODY}
          </P>
        </MarginOverridesWrapper>
      </StorybookCase>
      <StorybookCase title="Drop cap and multiple children">
        <MarginOverridesWrapper>
          <P overrides={logicalPropsOverrides}>
            NewsKit provides <Sub>components,</Sub> guidelines{' '}
            <Sup>and standards.</Sup>
          </P>
        </MarginOverridesWrapper>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryParagraphLogicalProps.storyName = 'Logical props';

export const StoryParagraphStylingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Styling overrides on paragraph">
      <P overrides={{stylePreset: 'paragraphCustom'}}>{BODY}</P>
    </StorybookCase>
    <StorybookCase title="Styling overrides on drop cap">
      <P dropCap overrides={{dropCap: {stylePreset: 'dropCapCustom'}}}>
        {BODY}
      </P>
    </StorybookCase>
  </StorybookPage>
);
StoryParagraphStylingOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Paragraph',
  component: () => P,
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          paragraphCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
