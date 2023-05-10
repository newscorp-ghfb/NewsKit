import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {TextBlock} from '..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../utils';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {Block} from '../../block';

const textBlockCustomThemeObject: CreateThemeArgs = {
  name: 'textblock-custom-theme',
  overrides: {
    stylePresets: {
      textBlockCustom: {base: {color: '{{colors.inkBrand010}}'}},
      blockContainerQueryWrapper: {
        base: {
          borderStyle: 'dashed',
          borderWidth: '{{borders.borderWidth010}}',
          borderColor: '{{colors.blue060}}',
        },
      },
    },
    typographyPresets: {
      textBlockCustom: {fontFamily: '{{fonts.fontFamily020.fontFamily}}'},
    },
  },
};

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const TEXT_BLOCK_COLUMNS = '1fr';
const BODY =
  'NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development.';

export const StoryTextBlockDefault = () => (
  <StorybookPage columns={TEXT_BLOCK_COLUMNS}>
    <StorybookCase>
      <TextBlock stylePreset="inkContrast">{BODY}</TextBlock>
    </StorybookCase>
  </StorybookPage>
);
StoryTextBlockDefault.storyName = 'Default';

export const StoryTextBlockWithDifferentHTMLTag = () => (
  <StorybookPage columns={TEXT_BLOCK_COLUMNS}>
    <StorybookCase title="As h3">
      <TextBlock as="h3" stylePreset="inkContrast">
        {BODY}
      </TextBlock>
    </StorybookCase>
    <StorybookCase title="As div">
      <TextBlock as="div" stylePreset="inkContrast">
        {BODY}
      </TextBlock>
    </StorybookCase>
  </StorybookPage>
);
StoryTextBlockWithDifferentHTMLTag.storyName = 'With different html tag';

export const StoryTextBlockLogicalProps = () => (
  <StorybookPage columns={TEXT_BLOCK_COLUMNS}>
    <StorybookCase>
      <MarginOverridesWrapper>
        <TextBlock
          stylePreset="inkContrast"
          marginBlock="space040"
          paddingBlock="space040"
          marginInline="space040"
          paddingInline="space040"
        >
          {BODY}
        </TextBlock>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryTextBlockLogicalProps.storyName = 'Logical props';

export const StoryTextBlockContainerQueries = () => {
  const QueryTextBlock = () => (
    <TextBlock
      typographyPreset={{
        rules: [
          {
            rule: '@container (width <= 300px)',
            value: 'editorialParagraph010',
          },
          {
            rule: '@container (width > 300px)',
            value: 'editorialParagraph030',
          },
        ],
      }}
      stylePreset="inkContrast"
    >
      {BODY}
    </TextBlock>
  );

  return (
    <StorybookPage>
      <StorybookCase title="Container < 300px">
        <Block
          overrides={{
            containerName: 'container-small',
            containerType: 'inline-size',
          }}
          stylePreset="blockContainerQueryWrapper"
          style={{width: '200px'}}
        >
          <QueryTextBlock />
        </Block>
      </StorybookCase>
      <StorybookCase title="Container > 300px">
        <Block
          overrides={{
            containerName: 'container-small',
            containerType: 'inline-size',
          }}
          stylePreset="blockContainerQueryWrapper"
          style={{width: '400px'}}
        >
          <QueryTextBlock />
        </Block>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryTextBlockContainerQueries.storyName = 'Container Queries';

export const StoryTextBlockStylingOverrides = () => (
  <StorybookPage columns={TEXT_BLOCK_COLUMNS}>
    <StorybookCase>
      <TextBlock stylePreset="textBlockCustom">{BODY}</TextBlock>
    </StorybookCase>
  </StorybookPage>
);
StoryTextBlockStylingOverrides.storyName = 'Styling overrides';

export const StoryTextBlockOverrides = () => (
  <StorybookPage columns={TEXT_BLOCK_COLUMNS}>
    <StorybookCase title="Typography preset override">
      <TextBlock
        stylePreset="inkContrast"
        typographyPreset="editorialParagraph020"
      >
        {BODY}
      </TextBlock>
    </StorybookCase>
  </StorybookPage>
);
StoryTextBlockOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Text block',
  component: TextBlock,
  parameters: {
    nkDocs: {
      title: 'Text Block',
      url: 'https://newskit.co.uk/components/text-block',
      description:
        'Text block provides a simple way to display text. It supports text cropping, style presets, and typography presets.',
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
          textBlockCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
