import * as React from 'react';
import {Standfirst} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {Story as StoryType} from '@storybook/react';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {TextBlock} from '../../text-block';
import {getColorCssFromTheme, styled} from '../../utils/style';

const CONTENT = (
  <TextBlock typographyPreset="utilitySubheading020">
    NewsKit provides components, guidelines and standards to enable digital
    product teams to create high-quality, consistent products quickly. NewsKit
    is built on modular design principles and backed by best practice guidance
    for design and development.
  </TextBlock>
);

export const StoryDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <Standfirst>{CONTENT}</Standfirst>
    </StorybookCase>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StoryWithAsSpan = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <Standfirst as="span">{CONTENT}</Standfirst>
    </StorybookCase>
  </StorybookPage>
);
StoryWithAsSpan.storyName = 'Standfirst as span';

export const StoryLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <MarginOverridesWrapper>
        <Standfirst
          overrides={{
            styledText: {
              paddingInline: '20px',
              paddingBlock: '10px',
            },
          }}
        >
          {CONTENT}
        </Standfirst>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryWithStylingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <Standfirst
        overrides={{
          styledText: {
            stylePreset: 'inkBrand010',
          },
        }}
      >
        {CONTENT}
      </Standfirst>
    </StorybookCase>
  </StorybookPage>
);
StoryWithStylingOverrides.storyName = 'Styling overrides';

export const StoryWithOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Typography preset override">
      <Standfirst
        as="span"
        overrides={{
          styledText: {
            typographyPreset: 'utilitySubheading050',
          },
        }}
      >
        NewsKit provides components, guidelines and standards to enable digital
        product teams to create high-quality, consistent products quickly.
        NewsKit is built on modular design principles and backed by best
        practice guidance for design and development.
      </Standfirst>
    </StorybookCase>
  </StorybookPage>
);
StoryWithOverrides.storyName = 'Overrides';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export default {
  title: 'Components/Standfirst',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Standfirst',
      url: 'https://www.newskit.co.uk/components/standfirst/',
      description:
        'Standfirst is an introductory paragraph in an article, which summarises the articles content.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          {},
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
